'use strict';

import Graph from '../../../../src/js/controls/Graph/Graph';
import Line from '../../../../src/js/controls/Line';
import { COLORS, SHAPES } from '../../../../src/js/helpers/constants';
import styles from '../../../../src/js/helpers/styles';
import { getSVGAnimatedTransformList } from '../../../../src/js/helpers/transformUtils';
import utils from '../../../../src/js/helpers/utils';
import {
  delay,
  loadCustomJasmineMatcher,
  PADDING_BOTTOM,
  toNumber,
} from '../../helpers/commonHelpers';
import {
  axisTimeSeries,
  getAxes,
  getInput,
  valuesTimeSeries,
  fetchAllElementsByClass,
  fetchElementByClass,
} from './helpers';

describe('Line - Panning', () => {
  let graphDefault = null;
  let lineGraphContainer;
  beforeAll(() => {
    loadCustomJasmineMatcher();
  });
  beforeEach(() => {
    lineGraphContainer = document.createElement('div');
    lineGraphContainer.id = 'testLine_carbon';
    lineGraphContainer.setAttribute(
      'style',
      'width: 1024px; height: 400px;',
    );
    document.body.appendChild(lineGraphContainer);
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
      axisData.showLabel = true;
      const input = getInput(valuesTimeSeries, false, false);
      graphDefault = new Graph(axisData);
      graphDefault.loadContent(new Line(input));
    });
    it('Check if clamp is false if pan is enabled', () => {
      expect(graphDefault.scale.x.clamp()).toEqual(false);
    });
    it('DatelineGroup translates properly when panning is enabled', (done) => {
      const datelineGroup = document.querySelector(
                `.${styles.datelineGroup}`,
      );
      delay(() => {
        const { translate } = getSVGAnimatedTransformList(
          datelineGroup.getAttribute('transform'),
        );
        expect(toNumber(translate[0], 10)).toBeGreaterThanOrEqual(67);
        expect(toNumber(translate[1], 10)).toBeCloseTo(PADDING_BOTTOM);
        done();
      });
    });
    describe('when key matches', () => {
      describe('label is not passed', () => {
        it('should update dynamic data and retain label', () => {
          const graphData = {
            panData: [
              {
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
              },
            ],
          };
          let lineContent = fetchAllElementsByClass(
            lineGraphContainer,
            styles.pointGroup,
          );
          expect(lineContent.length).toEqual(3);
          graphDefault.reflow(graphData);
          lineContent = fetchAllElementsByClass(
            lineGraphContainer,
            styles.pointGroup,
          );
          expect(lineContent.length).toEqual(2);
          const axisLabelX = fetchElementByClass(
            lineGraphContainer,
            styles.axisLabelX,
          );
          const axisLabelY = fetchElementByClass(
            lineGraphContainer,
            styles.axisLabelY,
          );
          const axisLabelY2 = fetchElementByClass(
            lineGraphContainer,
            styles.axisLabelY2,
          );
          expect(axisLabelX.querySelector('text').textContent).toBe(
            'X Label',
          );
          expect(axisLabelY.querySelector('text').textContent).toBe(
            'Y Label',
          );
          expect(axisLabelY2.querySelector('text').textContent).toBe(
            'Y2 Label',
          );
        });
      });
      describe('when label is passed', () => {
        it('should update the label during reflow', () => {
          const graphData = {
            panData: [
              {
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
              },
            ],
            xLabel: 'updated xLabel',
            yLabel: 'updated yLabel',
            y2Label: 'updated y2Label',
          };
          graphDefault.reflow(graphData);
          const axisLabelX = fetchElementByClass(
            lineGraphContainer,
            styles.axisLabelX,
          );
          const axisLabelY = fetchElementByClass(
            lineGraphContainer,
            styles.axisLabelY,
          );
          const axisLabelY2 = fetchElementByClass(
            lineGraphContainer,
            styles.axisLabelY2,
          );
          expect(axisLabelX.querySelector('text').textContent).toBe(
            'updated xLabel',
          );
          expect(axisLabelY.querySelector('text').textContent).toBe(
            'updated yLabel',
          );
          expect(axisLabelY2.querySelector('text').textContent).toBe(
            'updated y2Label',
          );
        });
      });
    });
    it('Dynamic Data is not updated when key does not match', () => {
      const graphData = {
        panData: [
          {
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
          },
        ],
      };
      let lineContent = fetchAllElementsByClass(
        lineGraphContainer,
        styles.pointGroup,
      );
      expect(lineContent.length).toEqual(3);
      graphDefault.reflow(graphData);
      lineContent = fetchAllElementsByClass(
        lineGraphContainer,
        styles.pointGroup,
      );
      expect(lineContent.length).toEqual(3);
    });
    describe('when there is no data', () => {
      it('should update the dynamic data and disable the legend', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [],
            },
          ],
        };
        let lineContent = fetchAllElementsByClass(
          lineGraphContainer,
          styles.pointGroup,
        );
        const legendItem = document.body.querySelector(
                    `.${styles.legendItem}`,
        );
        expect(lineContent.length).toEqual(3);

        graphDefault.reflow(graphData);
        lineContent = fetchAllElementsByClass(
          lineGraphContainer,
          styles.pointGroup,
        );
        expect(lineContent.length).toEqual(0);
        expect(legendItem.getAttribute('aria-disabled')).toBe('true');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
      });
      it('should update the dynamic data and remove  shape in y-axis', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [],
            },
          ],
        };
        let lineShapeContent = fetchAllElementsByClass(
          lineGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        expect(
          lineShapeContent[0].querySelectorAll('svg').length,
        ).toEqual(1);

        graphDefault.reflow(graphData);
        lineShapeContent = fetchAllElementsByClass(
          lineGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        expect(
          lineShapeContent[0].querySelectorAll('svg').length,
        ).toEqual(0);
      });
      it('should update the dynamic data and remove the shape in y2-axis', () => {
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
        axisData.showLabel = true;
        const input = getInput(valuesTimeSeries, false, false);
        input.yAxis = 'y2';
        graphDefault = new Graph(axisData);
        graphDefault.loadContent(new Line(input));
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [],
            },
          ],
        };
        let lineShapeContent = fetchAllElementsByClass(
          lineGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        expect(
          lineShapeContent[0].querySelectorAll('svg').length,
        ).toEqual(1);

        graphDefault.reflow(graphData);
        lineShapeContent = fetchAllElementsByClass(
          lineGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        expect(
          lineShapeContent[0].querySelectorAll('svg').length,
        ).toEqual(0);
      });
    });
  });
  describe('When values are non-contiguous', () => {
    beforeEach(() => {
      const axisData = utils.deepClone(getAxes(axisTimeSeries));
      axisData.pan = { enabled: true };
      const input = getInput([], false, false);
      graphDefault = new Graph(axisData);
      graphDefault.loadContent(new Line(input));
    });
    it('should remove datapoint with y value as null', () => {
      const graphData = {
        panData: [
          {
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
          },
        ],
      };
      graphDefault.reflow(graphData);
      const lineContent = fetchAllElementsByClass(
        lineGraphContainer,
        styles.pointGroup,
      );
      expect(lineContent.length).toEqual(graphData.panData[0].values.length - 1);
    });
    it('should remove datapoint with y value as null', () => {
      const graphData = {
        panData: [
          {
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
          },
        ],
      };
      graphDefault.reflow(graphData);
      const lineContent = fetchAllElementsByClass(
        lineGraphContainer,
        styles.pointGroup,
      );
      expect(lineContent.length).toEqual(graphData.panData[0].values.length - 1);
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
      graphDefault.loadContent(new Line(input));
    });
    it('Check if clamp is true if pan is disabled', () => {
      expect(graphDefault.scale.x.clamp()).toEqual(true);
    });
    it('DatelineGroup translates properly after some delay when panning is disabled', (done) => {
      const datelineGroup = document.querySelector(
                `.${styles.datelineGroup}`,
      );
      delay(() => {
        const { translate } = getSVGAnimatedTransformList(
          datelineGroup.getAttribute('transform'),
        );
        expect(toNumber(translate[0], 10)).toBeCloserTo(67);
        expect(toNumber(translate[1], 10)).toBeCloserTo(PADDING_BOTTOM);
        done();
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
      graphDefault.loadContent(new Line(input));
    });
    describe('when legend hold values', () => {
      it('should remove the No Data Views', () => {
        const graphData = {
          panData: [
            {
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
            },
          ],
        };
        let lineContent = fetchAllElementsByClass(
          lineGraphContainer,
          styles.pointGroup,
        );
        const legendItem = document.body.querySelector(
                    `.${styles.legendItem}`,
        );
        expect(lineContent.length).toEqual(0);
        expect(legendItem.getAttribute('aria-disabled')).toBe('true');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
        graphDefault.reflow(graphData);
        lineContent = fetchAllElementsByClass(
          lineGraphContainer,
          styles.pointGroup,
        );
        expect(lineContent.length).toEqual(2);
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
