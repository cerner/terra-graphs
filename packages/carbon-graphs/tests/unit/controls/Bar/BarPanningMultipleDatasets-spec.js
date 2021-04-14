'use strict';

import Bar from '../../../../src/js/controls/Bar/Bar';
import Graph from '../../../../src/js/controls/Graph/Graph';
import styles from '../../../../src/js/helpers/styles';
import utils from '../../../../src/js/helpers/utils';
import {
  loadCustomJasmineMatcher,
  toNumber,
  PADDING_BOTTOM,
  delay,
} from '../../helpers/commonHelpers';
import {
  getAxes,
  getInput,
  valuesTimeSeries,
  axisTimeSeries,
  fetchAllElementsByClass,
  fetchElementByClass,
} from './helpers';
import { getSVGAnimatedTransformList } from '../../../../src/js/helpers/transformUtils';
import { COLORS, SHAPES } from '../../../../src/js/helpers/constants';
import errors from '../../../../src/js/helpers/errors';

describe('Bar - Panning', () => {
  let graphDefault = null;
  let barGraphContainer;
  let consolewarn;

  beforeAll(() => {
    loadCustomJasmineMatcher();
    // to supress warnings
    consolewarn = console.warn;
    console.warn = () => {};
  });
  afterAll(() => {
    console.warn = consolewarn;
  });
  beforeEach(() => {
    barGraphContainer = document.createElement('div');
    barGraphContainer.id = 'testBar_carbon';
    barGraphContainer.setAttribute(
      'style',
      'width: 1024px; height: 400px;',
    );
    document.body.appendChild(barGraphContainer);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  describe('When enabled', () => {
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
      graphDefault.loadContent(new Bar(input));
    });
    it('Checks if clamp is false when pan is enabled', () => {
      expect(graphDefault.scale.x.clamp()).toEqual(false);
    });
    it('throws error when null value is passed as y', () => {
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
          }],
      };

      expect(() => { graphDefault.reflowMultipleDatasets(graphData); }).toThrowError(errors.THROW_MSG_INVALID_DATA);
    });
    it('throws error when undefined value is passed as y', () => {
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
          }],
      };

      expect(() => { graphDefault.reflowMultipleDatasets(graphData); }).toThrowError(errors.THROW_MSG_INVALID_DATA);
    });
    it('translates DatelineGroup properly when panning is enabled', (done) => {
      const datelineGroup = document.querySelector(
                `.${styles.datelineGroup}`,
      );
      delay(() => {
        const { translate } = getSVGAnimatedTransformList(
          datelineGroup.getAttribute('transform'),
        );
        expect(toNumber(translate[0], 10)).toBeCloserTo(72);
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
              }],
          };
          let barContent = fetchAllElementsByClass(
            barGraphContainer,
            styles.bar,
          );
          expect(barContent.length).toEqual(3);
          graphDefault.reflowMultipleDatasets(graphData);
          barContent = fetchAllElementsByClass(
            barGraphContainer,
            styles.bar,
          );
          expect(barContent.length).toEqual(2);
          const axisLabelX = fetchElementByClass(
            barGraphContainer,
            styles.axisLabelX,
          );
          const axisLabelY = fetchElementByClass(
            barGraphContainer,
            styles.axisLabelY,
          );
          const axisLabelY2 = fetchElementByClass(
            barGraphContainer,
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
            panData: [{
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
            }],
            xLabel: 'updated xLabel',
            yLabel: 'updated yLabel',
            y2Label: 'updated y2Label',
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const axisLabelX = fetchElementByClass(
            barGraphContainer,
            styles.axisLabelX,
          );
          const axisLabelY = fetchElementByClass(
            barGraphContainer,
            styles.axisLabelY,
          );
          const axisLabelY2 = fetchElementByClass(
            barGraphContainer,
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
    it('does not update dynamic data when key does not match', () => {
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
          }],
      };
      let barContent = fetchAllElementsByClass(
        barGraphContainer,
        styles.bar,
      );
      expect(barContent.length).toEqual(3);
      graphDefault.reflowMultipleDatasets(graphData);
      barContent = fetchAllElementsByClass(barGraphContainer, styles.bar);
      expect(barContent.length).toEqual(3);
    });
    describe('when there is no data', () => {
      it('should update the dynamic data and disable the legend', () => {
        const graphData = {
          panData: [{
            key: 'uid_1',
            values: [],
          }],
        };
        const legendItem = document.body.querySelector(
                    `.${styles.legendItem}`,
        );
        expect(legendItem.getAttribute('aria-disabled')).toBe('false');
        graphDefault.reflowMultipleDatasets(graphData);
        expect(legendItem.getAttribute('aria-disabled')).toBe('true');
      });
      it('should update the dynamic data and remove shape from y-axis', () => {
        const graphData = {
          panData: [{
            key: 'uid_1',
            values: [],
          }],
        };
        let barContent = fetchAllElementsByClass(
          barGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        expect(barContent[0].querySelectorAll('svg').length).toBe(1);
        barContent = fetchAllElementsByClass(
          barGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        graphDefault.reflowMultipleDatasets(graphData);
        expect(barContent[0].querySelectorAll('svg').length).toBe(0);
      });
      it('should update the dynamic data and remove shape from y2-axis', () => {
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
        graphDefault.loadContent(new Bar(input));
        const graphData = {
          panData: [{
            key: 'uid_1',
            values: [],
          }],
        };
        let barContent = fetchAllElementsByClass(
          barGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        expect(barContent[0].querySelectorAll('svg').length).toBe(1);
        barContent = fetchAllElementsByClass(
          barGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        graphDefault.reflowMultipleDatasets(graphData);
        expect(barContent[0].querySelectorAll('svg').length).toBe(0);
      });
    });
    describe('when data values updates during reflow', () => {
      const graphData = {
        panData: [
          {
            key: 'uid_1',
            values: [],
          },
          {
            key: 'uid_2',
            values: [],
          },

        ],
      };
      const graphData1 = {
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
      beforeEach(() => {
        graphDefault.destroy();
        const axisData = utils.deepClone(getAxes(axisTimeSeries));

        axisData.pan = { enabled: true };
        axisData.showLabel = true;
        const input = getInput(valuesTimeSeries, false, false);
        const input1 = getInput(valuesTimeSeries, false, true, true);
        input1.key = 'uid_2';
        graphDefault = new Graph(axisData);
        graphDefault.loadContent(new Bar(input));
        graphDefault.loadContent(new Bar(input1));
      });
      it('should add shapes in both y and y2 axis when there is noData in previous state', () => {
        const barShapeContentY = fetchAllElementsByClass(
          barGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        const barShapeContentY2 = fetchAllElementsByClass(
          barGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        expect(
          barShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(1);
        expect(
          barShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(1);

        graphDefault.reflowMultipleDatasets(graphData);
        expect(
          barShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(0);
        expect(
          barShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(0);

        graphDefault.reflowMultipleDatasets(graphData1);
        expect(
          barShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(1);
        expect(
          barShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(1);
      });
      it('should keep shapes as is in both y and y2 axis when there is no noData in previous state', () => {
        const barShapeContentY = fetchAllElementsByClass(
          barGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        const barShapeContentY2 = fetchAllElementsByClass(
          barGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        expect(
          barShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(1);
        expect(
          barShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(1);

        graphDefault.reflowMultipleDatasets(graphData1);
        expect(
          barShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(1);
        expect(
          barShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(1);
      });
    });
    describe('when there is more than one data set in single axis', () => {
      const graphData = {
        panData: [
          {
            x: '2016-03-03T12:00:00Z',
            y: 2,
          },
          {
            key: 'uid_2',
            values: [],
          },

        ],
      };
      const graphData1 = {
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
      it('should add and remove one shape in y-axis successfully during reflow', () => {
        graphDefault.destroy();
        const axisData = utils.deepClone(getAxes(axisTimeSeries));

        axisData.pan = { enabled: true };
        axisData.showLabel = true;
        const input = getInput(valuesTimeSeries, false, false);
        const input1 = getInput(valuesTimeSeries, false, true);
        input1.key = 'uid_2';
        graphDefault = new Graph(axisData);
        graphDefault.loadContent(new Bar(input));
        graphDefault.loadContent(new Bar(input1));
        const barShapeContentY = fetchAllElementsByClass(
          barGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        expect(
          barShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(2);

        graphDefault.reflowMultipleDatasets(graphData);
        expect(
          barShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(1);
        expect(
          barShapeContentY[0].querySelectorAll('svg[aria-describedby="uid_2"]')[0],
        ).toEqual(undefined);

        graphDefault.reflowMultipleDatasets(graphData1);
        expect(
          barShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(2);
        expect(
          barShapeContentY[0].querySelectorAll('svg[aria-describedby="uid_2"]')[0],
        ).not.toBeNull();
      });
      it('should add and remove one shape in y2-axis successfully during reflow', () => {
        graphDefault.destroy();
        const axisData = utils.deepClone(getAxes(axisTimeSeries));

        axisData.pan = { enabled: true };
        axisData.showLabel = true;
        const input = getInput(valuesTimeSeries, false, false, true);
        const input1 = getInput(valuesTimeSeries, false, true, true);
        input1.key = 'uid_2';
        graphDefault = new Graph(axisData);
        graphDefault.loadContent(new Bar(input));
        graphDefault.loadContent(new Bar(input1));
        const barShapeContentY2 = fetchAllElementsByClass(
          barGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        expect(
          barShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(2);

        graphDefault.reflowMultipleDatasets(graphData);
        expect(
          barShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(1);
        expect(
          barShapeContentY2[0].querySelectorAll('svg[aria-describedby="uid_2"]')[0],
        ).toEqual(undefined);

        graphDefault.reflowMultipleDatasets(graphData1);
        expect(
          barShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(2);
        expect(
          barShapeContentY2[0].querySelectorAll('svg[aria-describedby="uid_2"]')[0],
        ).not.toBeNull();
      });
    });
  });
  describe('When disabled', () => {
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
      graphDefault.loadContent(new Bar(input));
    });
    it('Checks if clamp is true when pan is disabled', () => {
      expect(graphDefault.scale.x.clamp()).toEqual(true);
    });
    it('translates DatelineGroup properly after some delay when panning is disabled', (done) => {
      const datelineGroup = document.querySelector(
                `.${styles.datelineGroup}`,
      );
      delay(() => {
        const { translate } = getSVGAnimatedTransformList(
          datelineGroup.getAttribute('transform'),
        );
        expect(toNumber(translate[0], 10)).toBeCloserTo(72);
        expect(toNumber(translate[1], 10)).toBeCloseTo(PADDING_BOTTOM);
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
      axisData.pan = { enabled: false };
      const input = getInput([], false, false);
      graphDefault = new Graph(axisData);
      graphDefault.loadContent(new Bar(input));
    });
    describe('when legend holds values', () => {
      it('should remove the No Data Views', () => {
        const graphData = {
          panData: [{
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
          }],
        };
        let barContent = fetchAllElementsByClass(
          barGraphContainer,
          styles.bar,
        );
        const legendItem = document.body.querySelector(
                    `.${styles.legendItem}`,
        );
        expect(legendItem.getAttribute('aria-disabled')).toBe('true');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
        expect(barContent.length).toEqual(0);
        graphDefault.reflowMultipleDatasets(graphData);
        barContent = fetchAllElementsByClass(
          barGraphContainer,
          styles.bar,
        );
        expect(barContent.length).toEqual(2);
        expect(legendItem.getAttribute('aria-disabled')).toBe('false');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
      });
    });
  });
});
