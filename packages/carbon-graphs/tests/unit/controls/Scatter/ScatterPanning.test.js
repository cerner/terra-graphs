'use strict';

import Graph from '../../../../src/js/controls/Graph/Graph';
import Scatter from '../../../../src/js/controls/Scatter';
import styles from '../../../../src/js/helpers/styles';
import utils from '../../../../src/js/helpers/utils';
import {
  axisTimeSeries,
  getAxes,
  getInput,
  valuesTimeSeries,
  fetchAllElementsByClass,
  fetchElementByClass,
} from './helpers';
import { toNumber, delay, PADDING_BOTTOM } from '../../helpers/commonHelpers';
import { COLORS, SHAPES } from '../../../../src/js/helpers/constants';
import { getSVGAnimatedTransformList } from '../../../../src/js/helpers/transformUtils';
import errors from '../../../../src/js/helpers/errors';

// TODO: fix failing tests
describe.skip('Scatter - Panning', () => {
  let graphDefault;
  let scatterGraphContainer;

  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  beforeEach(() => {
    scatterGraphContainer = document.createElement('div');
    scatterGraphContainer.id = 'testScatter_carbon';
    scatterGraphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    document.body.appendChild(scatterGraphContainer);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('When pan is enabled', () => {
    beforeEach(() => {
      const axisData = utils.deepClone(getAxes(axisTimeSeries));
      axisData.dateline = [
        {
          showDatelineIndicator: true,
          label: {
            display: 'Release A',
          },
          color: COLORS.GREEN,
          shape: SHAPES.SQUARE,
          value: '2016-06-03T12:00:00Z',
        },
      ];
      axisData.pan = { enabled: true };
      const input = getInput(valuesTimeSeries, false, false);
      graphDefault = new Graph(axisData);
      graphDefault.loadContent(new Scatter(input));
    });
    it('throws error when null value is passed as y', () => {
      const panData = {
        key: 'uid_1',
        values: [
          {
            x: '2016-03-03T12:00:00Z',
            y: null,
          },
          {
            x: '2016-04-03T12:00:00Z',
            y: 20,
          },
        ],
      };
      expect(() => { graphDefault.reflow(panData); }).toThrowError(errors.THROW_MSG_INVALID_DATA);
    });
    it('throws error when undefined value is passed as y', () => {
      const panData = {
        key: 'uid_1',
        values: [
          {
            x: '2016-03-03T12:00:00Z',
            y: undefined,
          },
          {
            x: '2016-04-03T12:00:00Z',
            y: 20,
          },
        ],
      };
      expect(() => { graphDefault.reflow(panData); }).toThrowError(errors.THROW_MSG_INVALID_DATA);
    });
    it('sets clamp to false if pan is enabled', () => {
      expect(graphDefault.scale.x.clamp()).toEqual(false);
    });
    it('DatelineGroup translates properly when panning is enabled', () => {
      const datelineGroup = document.querySelector(`.${styles.datelineGroup}`);
      delay(() => {
        const { translate } = getSVGAnimatedTransformList(datelineGroup.getAttribute('transform'));
        expect(toNumber(translate[0], 10)).toBeGreaterThanOrEqual(67);
        expect(toNumber(translate[1], 10)).toBeCloseTo(PADDING_BOTTOM);
      });
    });
    describe('when key matches', () => {
      describe('label is not passed', () => {
        it('should update dynamic data and retain label', () => {
          const panData = {
            key: 'uid_1',
            values: [
              {
                x: '2016-03-03T12:00:00Z',
                y: 2,
              },
              {
                x: '2016-04-03T12:00:00Z',
                y: 20,
              },
            ],
          };
          let ScatterContent = fetchAllElementsByClass(scatterGraphContainer, styles.pointGroup);
          expect(ScatterContent.length).toEqual(3);
          graphDefault.reflow(panData);
          ScatterContent = fetchAllElementsByClass(scatterGraphContainer, styles.pointGroup);
          expect(ScatterContent.length).toEqual(2);
          const axisLabelX = fetchElementByClass(scatterGraphContainer, styles.axisLabelX);
          const axisLabelY = fetchElementByClass(scatterGraphContainer, styles.axisLabelY);
          const axisLabelY2 = fetchElementByClass(scatterGraphContainer, styles.axisLabelY2);
          expect(axisLabelX.querySelector('text').textContent).toBe('X Label');
          expect(axisLabelY.querySelector('text').textContent).toBe('Y Label');
          expect(axisLabelY2.querySelector('text').textContent).toBe('Y2 Label');
        });
      });
      describe('when label is passed', () => {
        it('should update the label during reflow', () => {
          const panData = {
            key: 'uid_1',
            values: [
              {
                x: '2016-03-03T12:00:00Z',
                y: 2,
              },
              {
                x: '2016-04-03T12:00:00Z',
                y: 20,
              },
            ],
            xLabel: 'updated xLabel',
            yLabel: 'updated yLabel',
            y2Label: 'updated y2Label',
          };
          graphDefault.reflow(panData);
          const axisLabelX = fetchElementByClass(scatterGraphContainer, styles.axisLabelX);
          const axisLabelY = fetchElementByClass(scatterGraphContainer, styles.axisLabelY);
          const axisLabelY2 = fetchElementByClass(scatterGraphContainer, styles.axisLabelY2);
          expect(axisLabelX.querySelector('text').textContent).toBe('updated xLabel');
          expect(axisLabelY.querySelector('text').textContent).toBe('updated yLabel');
          expect(axisLabelY2.querySelector('text').textContent).toBe('updated y2Label');
        });
      });
    });
    it('Dynamic Data is not updated when key does not match', () => {
      const panData = {
        key: 'uid_2',
        values: [
          {
            x: '2016-03-03T12:00:00Z',
            y: 2,
          },
          {
            x: '2016-04-03T12:00:00Z',
            y: 20,
          },
        ],
      };
      let ScatterContent = fetchAllElementsByClass(scatterGraphContainer, styles.pointGroup);
      expect(ScatterContent.length).toEqual(3);
      graphDefault.reflow(panData);
      ScatterContent = fetchAllElementsByClass(scatterGraphContainer, styles.pointGroup);
      expect(ScatterContent.length).toEqual(3);
    });
    describe('when there is no data', () => {
      it('should update the dynamic data and disable the legend', () => {
        const panData = {
          key: 'uid_1',
          values: [],
        };
        let ScatterContent = fetchAllElementsByClass(scatterGraphContainer, styles.pointGroup);
        expect(ScatterContent.length).toEqual(3);
        const legendItem = document.body.querySelector(`.${styles.legendItem}`);
        graphDefault.reflow(panData);
        ScatterContent = fetchAllElementsByClass(scatterGraphContainer, styles.pointGroup);
        expect(ScatterContent.length).toEqual(0);
        expect(legendItem.getAttribute('aria-disabled')).toBe('true');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
      });
      it('should update the dynamic data and remove shape in y-axis', () => {
        const panData = {
          key: 'uid_1',
          values: [],
        };
        let ScatterShapeContent = fetchAllElementsByClass(scatterGraphContainer, styles.axisLabelYShapeContainer);
        expect(ScatterShapeContent[0].querySelectorAll('svg').length).toEqual(1);
        graphDefault.reflow(panData);
        ScatterShapeContent = fetchAllElementsByClass(scatterGraphContainer, styles.axisLabelYShapeContainer);
        expect(ScatterShapeContent[0].querySelectorAll('svg').length).toEqual(0);
      });
      it('should update the dynamic data and remove shape in y2-axis', () => {
        graphDefault.destroy();
        const axisData = utils.deepClone(getAxes(axisTimeSeries));
        axisData.dateline = [
          {
            showDatelineIndicator: true,
            label: {
              display: 'Release A',
            },
            color: COLORS.GREEN,
            shape: SHAPES.SQUARE,
            value: '2016-06-03T12:00:00Z',
          },
        ];
        axisData.pan = { enabled: true };
        const input = getInput(valuesTimeSeries, false, false);
        input.yAxis = 'y2';
        graphDefault = new Graph(axisData);
        graphDefault.loadContent(new Scatter(input));
        const panData = {
          key: 'uid_1',
          values: [],
        };
        let ScatterShapeContent = fetchAllElementsByClass(scatterGraphContainer, styles.axisLabelY2ShapeContainer);
        expect(ScatterShapeContent[0].querySelectorAll('svg').length).toEqual(1);
        graphDefault.reflow(panData);
        ScatterShapeContent = fetchAllElementsByClass(scatterGraphContainer, styles.axisLabelY2ShapeContainer);
        expect(ScatterShapeContent[0].querySelectorAll('svg').length).toEqual(0);
      });
    });
  });
  describe('When pan is disabled', () => {
    beforeEach(() => {
      const axisData = utils.deepClone(getAxes(axisTimeSeries));
      axisData.dateline = [
        {
          showDatelineIndicator: true,
          label: {
            display: 'Release A',
          },
          color: COLORS.GREEN,
          shape: SHAPES.SQUARE,
          value: '2016-06-03T12:00:00Z',
        },
      ];
      axisData.pan = { enabled: false };
      const input = getInput(valuesTimeSeries, false, false);
      graphDefault = new Graph(axisData);
      graphDefault.loadContent(new Scatter(input));
    });
    it('DatelineGroup translates properly after some delay when panning is disabled', () => {
      const datelineGroup = document.querySelector(`.${styles.datelineGroup}`);
      delay(() => {
        const { translate } = getSVGAnimatedTransformList(datelineGroup.getAttribute('transform'));
        expect(toNumber(translate[0], 10)).toBeGreaterThanOrEqual(67);
        expect(toNumber(translate[1], 10)).toBeCloseTo(PADDING_BOTTOM);
      });
    });
  });
  describe('On click of panning button', () => {
    beforeEach(() => {
      const axisData = utils.deepClone(getAxes(axisTimeSeries));
      axisData.dateline = [
        {
          showDatelineIndicator: true,
          label: {
            display: 'Release A',
          },
          color: COLORS.GREEN,
          shape: SHAPES.SQUARE,
          value: '2016-06-03T12:00:00Z',
        },
      ];
      axisData.pan = { enabled: true };
      const input = getInput([], false, false);
      graphDefault = new Graph(axisData);
      graphDefault.loadContent(new Scatter(input));
    });
    describe('when legend hold values', () => {
      it('should remove the No Data Views', () => {
        const panData = {
          key: 'uid_1',
          values: [
            {
              x: '2016-03-03T12:00:00Z',
              y: 2,
            },
            {
              x: '2016-04-03T12:00:00Z',
              y: 20,
            },
          ],
        };
        let ScatterContent = fetchAllElementsByClass(scatterGraphContainer, styles.pointGroup);
        const legendItem = document.body.querySelector(`.${styles.legendItem}`);
        expect(legendItem.getAttribute('aria-disabled')).toBe('true');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
        expect(ScatterContent.length).toEqual(0);
        graphDefault.reflow(panData);
        ScatterContent = fetchAllElementsByClass(scatterGraphContainer, styles.pointGroup);
        expect(ScatterContent.length).toEqual(2);
        expect(legendItem.getAttribute('aria-disabled')).toBe('false');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
      });
    });
    describe('when the same data is passed on multiple clicks of panning', () => {
      it('Range modified should be false', () => {
        const panData = {
          key: 'uid_1',
          values: [
            {
              x: '2016-03-03T12:00:00Z',
              y: 0,
            },
            {
              x: '2016-04-03T12:00:00Z',
              y: 20,
            },
          ],
        };
        graphDefault.reflow(panData);
        graphDefault.reflow(panData);
        graphDefault.reflow(panData);
        expect(graphDefault.config.axis.y.dataRange.isRangeModified).toEqual(false);
      });
    });
  });
});
