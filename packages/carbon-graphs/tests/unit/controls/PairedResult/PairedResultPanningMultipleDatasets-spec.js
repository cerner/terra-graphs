'use strict';

import Graph from '../../../../src/js/controls/Graph/Graph';
import PairedResult from '../../../../src/js/controls/PairedResult';
import { COLORS, SHAPES } from '../../../../src/js/helpers/constants';
import styles from '../../../../src/js/helpers/styles';
import { getSVGAnimatedTransformList } from '../../../../src/js/helpers/transformUtils';
import utils from '../../../../src/js/helpers/utils';
import {
  delay,
  loadCustomJasmineMatcher,
  PADDING_BOTTOM,
  toNumber, triggerEvent,
} from '../../helpers/commonHelpers';
import {
  axisTimeSeries,
  getAxes,
  getInput,
  valuesTimeSeries,
  fetchAllElementsByClass,
  fetchElementByClass,
} from './helpers';
import errors from '../../../../src/js/helpers/errors';

describe('PairedResult', () => {
  let graphDefault = null;
  let pairedResultGraphContainer;
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
    pairedResultGraphContainer = document.createElement('div');
    pairedResultGraphContainer.id = 'testPairedResult_carbon';
    pairedResultGraphContainer.setAttribute(
      'style',
      'width: 1024px; height: 400px;',
    );
    document.body.appendChild(pairedResultGraphContainer);
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
      graphDefault.loadContent(new PairedResult(input));
    });
    it('Checks if clamp is false when pan is enabled', () => {
      expect(graphDefault.scale.x.clamp()).toEqual(false);
    });
    it('translates DatelineGroup properly when panning is enabled', (done) => {
      const datelineGroup = document.querySelector(
                `.${styles.datelineGroup}`,
      );
      delay(() => {
        const { translate } = getSVGAnimatedTransformList(
          datelineGroup.getAttribute('transform'),
        );
        expect(toNumber(translate[0], 10)).toBeCloserTo(80);
        expect(toNumber(translate[1], 10)).toBeCloseTo(PADDING_BOTTOM);
        done();
      });
    });
    describe('For paired result high', () => {
      it('throw an error when null value is provided for y', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [
                {
                  high: {
                    x: '2016-09-17T12:00:00Z',
                    y: null,
                  },
                },
              ],
            },
          ],
        };
        expect(() => { graphDefault.reflowMultipleDatasets(graphData); }).toThrowError(errors.THROW_MSG_INVALID_DATA);
      });
      it('throw an error when undefined value is provided for y', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [
                {
                  high: {
                    x: '2016-09-17T12:00:00Z',
                    y: undefined,
                  },
                },
              ],
            },
          ],
        };
        expect(() => { graphDefault.reflowMultipleDatasets(graphData); }).toThrowError(errors.THROW_MSG_INVALID_DATA);
      });
    });
    describe('For paired result mid', () => {
      it('throw an error when null value is provided for y', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [
                {
                  mid: {
                    x: '2016-09-18T12:00:00Z',
                    y: null,
                  },
                },
              ],
            },
          ],
        };
        expect(() => { graphDefault.reflowMultipleDatasets(graphData); }).toThrowError(errors.THROW_MSG_INVALID_DATA);
      });
      it('throw an error when undefined value is provided for y', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [
                {
                  mid: {
                    x: '2016-09-17T12:00:00Z',
                    y: undefined,
                  },
                },
              ],
            },
          ],
        };
        expect(() => { graphDefault.reflowMultipleDatasets(graphData); }).toThrowError(errors.THROW_MSG_INVALID_DATA);
      });
    });
    describe('For paired result low', () => {
      it('throw an error when null value is provided for y', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [
                {
                  low: {
                    x: '2016-09-18T12:00:00Z',
                    y: null,
                  },
                },
              ],
            },
          ],
        };
        expect(() => { graphDefault.reflowMultipleDatasets(graphData); }).toThrowError(errors.THROW_MSG_INVALID_DATA);
      });
      it('throw an error when undefined value is provided for y', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [
                {
                  low: {
                    x: '2016-09-17T12:00:00Z',
                    y: undefined,
                  },
                },
              ],
            },
          ],
        };
        expect(() => { graphDefault.reflowMultipleDatasets(graphData); }).toThrowError(errors.THROW_MSG_INVALID_DATA);
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
                    high: {
                      x: '2016-09-17T12:00:00Z',
                      y: 110,
                    },
                    mid: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    low: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                  },
                ],
              },
            ],
          };
          let pairedContent = fetchAllElementsByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          expect(pairedContent.length).toEqual(2);
          graphDefault.reflowMultipleDatasets(graphData);
          pairedContent = fetchAllElementsByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          expect(pairedContent.length).toEqual(1);
          const axisLabelX = fetchElementByClass(
            pairedResultGraphContainer,
            styles.axisLabelX,
          );
          const axisLabelY = fetchElementByClass(
            pairedResultGraphContainer,
            styles.axisLabelY,
          );
          const axisLabelY2 = fetchElementByClass(
            pairedResultGraphContainer,
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
                    high: {
                      x: '2016-09-17T12:00:00Z',
                      y: 110,
                    },
                    mid: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    low: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                  },
                ],
              },
            ],
            xLabel: 'updated xLabel',
            yLabel: 'updated yLabel',
            y2Label: 'updated y2Label',
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const axisLabelX = fetchElementByClass(
            pairedResultGraphContainer,
            styles.axisLabelX,
          );
          const axisLabelY = fetchElementByClass(
            pairedResultGraphContainer,
            styles.axisLabelY,
          );
          const axisLabelY2 = fetchElementByClass(
            pairedResultGraphContainer,
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
                high: {
                  x: '2016-09-17T12:00:00Z',
                  y: 110,
                },
                mid: {
                  x: '2016-09-18T12:00:00Z',
                  y: 70,
                },
                low: {
                  x: '2016-09-19T02:00:00Z',
                  y: 30,
                },
              },
            ],
          },
        ],
      };
      let pairedContent = fetchAllElementsByClass(
        pairedResultGraphContainer,
        styles.pairedBox,
      );
      expect(pairedContent.length).toEqual(2);
      graphDefault.reflowMultipleDatasets(graphData);
      pairedContent = fetchAllElementsByClass(
        pairedResultGraphContainer,
        styles.pairedBox,
      );
      expect(pairedContent.length).toEqual(2);
    });
    describe('when invalid data is passed', () => {
      describe('for paired result high,', () => {
        it('should remove datapoint when undefined is passed', () => {
          const graphData = {
            panData: [
              {
                key: 'uid_1',
                values: [
                  {
                    high: undefined,
                    mid: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    low: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                  },
                ],
              },
            ],
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const pair = fetchElementByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          const pointGroup = pair.querySelectorAll(
              `.${styles.pointGroup}`,
          );
          expect(pointGroup.length).toEqual(2);
        });
        it('should remove datapoint when null is passed ', () => {
          const graphData = {
            panData: [
              {
                key: 'uid_1',
                values: [
                  {
                    high: null,
                    mid: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    low: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                  },
                ],
              },
            ],
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const pair = fetchElementByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          const pointGroup = pair.querySelectorAll(
              `.${styles.pointGroup}`,
          );
          expect(pointGroup.length).toEqual(2);
        });
        it('should remove datapoint when blank is passed ', () => {
          const graphData = {
            panData: [
              {
                key: 'uid_1',
                values: [
                  {
                    high: {
                    },
                    mid: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    low: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                  },
                ],
              },
            ],
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const pair = fetchElementByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          const pointGroup = pair.querySelectorAll(
              `.${styles.pointGroup}`,
          );
          expect(pointGroup.length).toEqual(2);
        });
      });
      describe('for paired result mid', () => {
        it('should remove datapoint when undefined is passed', () => {
          const graphData = {
            panData: [
              {
                key: 'uid_1',
                values: [
                  {
                    high: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    mid: undefined,
                    low: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                  },
                ],
              },
            ],
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const pair = fetchElementByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          const pointGroup = pair.querySelectorAll(
              `.${styles.pointGroup}`,
          );
          expect(pointGroup.length).toEqual(2);
        });
        it('should remove datapoint when null is passed ', () => {
          const graphData = {
            panData: [
              {
                key: 'uid_1',
                values: [
                  {
                    high: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    mid: null,
                    low: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                  },
                ],
              },
            ],
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const pair = fetchElementByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          const pointGroup = pair.querySelectorAll(
              `.${styles.pointGroup}`,
          );
          expect(pointGroup.length).toEqual(2);
        });
        it('should remove datapoint when blank is passed ', () => {
          const graphData = {
            panData: [
              {
                key: 'uid_1',
                values: [
                  {
                    high: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    mid: { },
                    low: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                  },
                ],
              },
            ],
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const pair = fetchElementByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          const pointGroup = pair.querySelectorAll(
              `.${styles.pointGroup}`,
          );
          expect(pointGroup.length).toEqual(2);
        });
      });
      describe('for paired result low', () => {
        it('should remove datapoint when undefined is passed', () => {
          const graphData = {
            panData: [
              {
                key: 'uid_1',
                values: [
                  {
                    high: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    mid: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                    low: undefined,
                  },
                ],
              },
            ],
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const pair = fetchElementByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          const pointGroup = pair.querySelectorAll(
              `.${styles.pointGroup}`,
          );
          expect(pointGroup.length).toEqual(2);
        });
        it('should remove datapoint when null is passed ', () => {
          const graphData = {
            panData: [
              {
                key: 'uid_1',
                values: [
                  {
                    high: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    mid: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                    low: null,
                  },
                ],
              },
            ],
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const pair = fetchElementByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          const pointGroup = pair.querySelectorAll(
              `.${styles.pointGroup}`,
          );
          expect(pointGroup.length).toEqual(2);
        });
        it('should remove datapoint when blank is passed ', () => {
          const graphData = {
            panData: [
              {
                key: 'uid_1',
                values: [
                  {
                    high: {
                      x: '2016-09-18T12:00:00Z',
                      y: 70,
                    },
                    mid: {
                      x: '2016-09-19T02:00:00Z',
                      y: 30,
                    },
                    low: { },
                  },
                ],
              },
            ],
          };
          graphDefault.reflowMultipleDatasets(graphData);
          const pair = fetchElementByClass(
            pairedResultGraphContainer,
            styles.pairedBox,
          );
          const pointGroup = pair.querySelectorAll(
              `.${styles.pointGroup}`,
          );
          expect(pointGroup.length).toEqual(2);
        });
      });
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
        let pairedContent = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.pairedBox,
        );
        const legendItem = document.body.querySelector(
                    `.${styles.legendItem}`,
        );
        expect(pairedContent.length).toEqual(2);
        graphDefault.reflowMultipleDatasets(graphData);
        pairedContent = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.pairedBox,
        );
        expect(pairedContent.length).toEqual(0);
        expect(legendItem.getAttribute('aria-disabled')).toBe('true');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
      });
      it('should update the dynamic data and remove shape in y-axis', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [],
            },
          ],
        };
        let pairedShapeContent = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.axisLabelYShapeContainer,
        );

        expect(
          pairedShapeContent[0].querySelectorAll('svg').length,
        ).toEqual(3);
        graphDefault.reflowMultipleDatasets(graphData);
        pairedShapeContent = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        expect(
          pairedShapeContent[0].querySelectorAll('svg').length,
        ).toEqual(0);
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
        graphDefault.loadContent(new PairedResult(input));
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [],
            },
          ],
        };
        let pairedShapeContent = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );

        expect(
          pairedShapeContent[0].querySelectorAll('svg').length,
        ).toEqual(3);
        graphDefault.reflowMultipleDatasets(graphData);
        pairedShapeContent = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        expect(
          pairedShapeContent[0].querySelectorAll('svg').length,
        ).toEqual(0);
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
                high: {
                  x: '2016-09-18T12:00:00Z',
                  y: 70,
                },
                mid: {
                  x: '2016-09-19T02:00:00Z',
                  y: 30,
                },
                low: {
                  x: '2016-09-19T02:00:00Z',
                  y: 10,
                },
              },
            ],
          },
          {
            key: 'uid_2',
            values: [
              {
                high: {
                  x: '2016-09-18T12:00:00Z',
                  y: 70,
                },
                mid: {
                  x: '2016-09-19T02:00:00Z',
                  y: 30,
                },
                low: {
                  x: '2016-09-19T02:00:00Z',
                  y: 10,
                },
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
        graphDefault.loadContent(new PairedResult(input));
        graphDefault.loadContent(new PairedResult(input1));
      });
      it('should add shapes in both y and y2 axis when there is noData in previous state', () => {
        const pairedResultShapeContentY = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        const pairedResultShapeContentY2 = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(3);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(3);

        graphDefault.reflowMultipleDatasets(graphData);
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(0);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(0);

        graphDefault.reflowMultipleDatasets(graphData1);
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(3);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(3);
      });
      it('should keep shapes as is in both y and y2 axis when there is no noData in previous state', () => {
        const pairedResultShapeContentY = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        const pairedResultShapeContentY2 = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(3);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(3);

        graphDefault.reflowMultipleDatasets(graphData1);
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(3);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(3);
      });
    });
    describe('when there is more than one data set in single axis', () => {
      const graphData = {
        panData: [
          {
            key: 'uid_1',
            values: [
              {
                high: {
                  x: '2016-09-18T12:00:00Z',
                  y: 70,
                },
                mid: {
                  x: '2016-09-19T02:00:00Z',
                  y: 30,
                },
                low: {
                  x: '2016-09-19T02:00:00Z',
                  y: 10,
                },
              },
            ],
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
                high: {
                  x: '2016-09-18T12:00:00Z',
                  y: 70,
                },
                mid: {
                  x: '2016-09-19T02:00:00Z',
                  y: 30,
                },
                low: {
                  x: '2016-09-19T02:00:00Z',
                  y: 10,
                },
              },
            ],
          },
          {
            key: 'uid_2',
            values: [
              {
                high: {
                  x: '2016-09-18T12:00:00Z',
                  y: 70,
                },
                mid: {
                  x: '2016-09-19T02:00:00Z',
                  y: 30,
                },
                low: {
                  x: '2016-09-19T02:00:00Z',
                  y: 10,
                },
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
        graphDefault.loadContent(new PairedResult(input));
        graphDefault.loadContent(new PairedResult(input1));
        const pairedResultShapeContentY = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.axisLabelYShapeContainer,
        );
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(6);

        graphDefault.reflowMultipleDatasets(graphData);
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(3);
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg[aria-describedby="uid_2_high"]')[0],
        ).toEqual(undefined);
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg[aria-describedby="uid_2_mid"]')[0],
        ).toEqual(undefined);
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg[aria-describedby="uid_2_low"]')[0],
        ).toEqual(undefined);

        graphDefault.reflowMultipleDatasets(graphData1);
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg').length,
        ).toEqual(6);
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg[aria-describedby="uid_2_high"]')[0],
        ).not.toBeNull();
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg[aria-describedby="uid_2_mid"]')[0],
        ).not.toBeNull();
        expect(
          pairedResultShapeContentY[0].querySelectorAll('svg[aria-describedby="uid_2_low"]')[0],
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
        graphDefault.loadContent(new PairedResult(input));
        graphDefault.loadContent(new PairedResult(input1));
        const pairedResultShapeContentY2 = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.axisLabelY2ShapeContainer,
        );
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(6);

        graphDefault.reflowMultipleDatasets(graphData);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(3);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg[aria-describedby="uid_2_high"]')[0],
        ).toEqual(undefined);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg[aria-describedby="uid_2_mid"]')[0],
        ).toEqual(undefined);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg[aria-describedby="uid_2_low"]')[0],
        ).toEqual(undefined);

        graphDefault.reflowMultipleDatasets(graphData1);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg').length,
        ).toEqual(6);
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg[aria-describedby="uid_2_high"]')[0],
        ).not.toBeNull();
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg[aria-describedby="uid_2_mid"]')[0],
        ).not.toBeNull();
        expect(
          pairedResultShapeContentY2[0].querySelectorAll('svg[aria-describedby="uid_2_low"]')[0],
        ).not.toBeNull();
      });
    });
    describe('when there is no data state with reflow', () => {
      it('should carry legend state on click of panning button', (done) => {
        graphDefault.destroy();
        const axisData = utils.deepClone(getAxes(axisTimeSeries));

        axisData.pan = { enabled: true };
        axisData.showLabel = true;
        const input = getInput(valuesTimeSeries, false, false, true);
        graphDefault = new Graph(axisData);
        graphDefault.loadContent(new PairedResult(input));
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [
              ],
            },
          ],
        };
        const graphData1 = {
          panData: [
            {
              key: 'uid_1',
              values: [
                {
                  high: {
                    x: '2016-09-18T12:00:00Z',
                    y: 70,
                  },
                  mid: {
                    x: '2016-09-19T02:00:00Z',
                    y: 30,
                  },
                  low: {
                    x: '2016-09-19T02:00:00Z',
                    y: 10,
                  },
                },
              ],
            },
          ],
        };
        const legendItemHigh = pairedResultGraphContainer.querySelector(
          `.${styles.legendItem}[aria-describedby="${input.key}_high"]`,
        );
        const legendItemLow = pairedResultGraphContainer.querySelector(
          `.${styles.legendItem}[aria-describedby="${input.key}_low"]`,
        );
        const legendItemMid = pairedResultGraphContainer.querySelector(
          `.${styles.legendItem}[aria-describedby="${input.key}_mid"]`,
        );

        const triggerLegendItems = () => {
          triggerEvent(legendItemHigh, 'click', () => {
            expect(legendItemHigh.getAttribute('aria-current')).toBe(
              'false',
            );
          });
          triggerEvent(legendItemLow, 'click', () => {
            expect(legendItemLow.getAttribute('aria-current')).toBe(
              'false',
            );
          });

          done();
        };

        triggerLegendItems();

        graphDefault.reflowMultipleDatasets(graphData);
        graphDefault.reflowMultipleDatasets(graphData1);
        expect(legendItemHigh.getAttribute('aria-current')).toBe(
          'false',
        );
        expect(legendItemLow.getAttribute('aria-current')).toBe(
          'false',
        );
        expect(legendItemMid.getAttribute('aria-current')).toBe(
          'true',
        );
        graphDefault.reflowMultipleDatasets(graphData);
        graphDefault.reflowMultipleDatasets(graphData1);
        expect(legendItemHigh.getAttribute('aria-current')).toBe(
          'false',
        );
        expect(legendItemLow.getAttribute('aria-current')).toBe(
          'false',
        );
        expect(legendItemMid.getAttribute('aria-current')).toBe(
          'true',
        );
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
      graphDefault.loadContent(new PairedResult(input));
    });
    it('translates DatelineGroup properly after some delay when panning is disabled', (done) => {
      const datelineGroup = document.querySelector(
                `.${styles.datelineGroup}`,
      );
      delay(() => {
        const { translate } = getSVGAnimatedTransformList(
          datelineGroup.getAttribute('transform'),
        );
        expect(toNumber(translate[0], 10)).toBeCloserTo(80);
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
      axisData.pan = { enabled: true };
      const input = getInput([], false, false);
      graphDefault = new Graph(axisData);
      graphDefault.loadContent(new PairedResult(input));
    });
    describe('when legend holds values', () => {
      it('should remove the No Data Views', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [
                {
                  high: {
                    x: '2016-09-17T12:00:00Z',
                    y: 110,
                  },
                  mid: {
                    x: '2016-09-18T12:00:00Z',
                    y: 70,
                  },
                  low: {
                    x: '2016-09-19T02:00:00Z',
                    y: 30,
                  },
                },
              ],
            },
          ],
        };
        let pairedContent = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.pairedBox,
        );
        const legendItem = document.body.querySelector(
                    `.${styles.legendItem}`,
        );
        expect(legendItem.getAttribute('aria-disabled')).toBe('true');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
        expect(pairedContent.length).toEqual(0);
        graphDefault.reflowMultipleDatasets(graphData);
        pairedContent = fetchAllElementsByClass(
          pairedResultGraphContainer,
          styles.pairedBox,
        );
        expect(pairedContent.length).toEqual(1);
        expect(legendItem.getAttribute('aria-disabled')).toBe('false');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
      });
    });
    describe('when the same data is passed on multiple clicks of panning', () => {
      it('Range modified should be false', () => {
        const graphData = {
          panData: [
            {
              key: 'uid_1',
              values: [
                {
                  high: {
                    x: '2016-09-17T12:00:00Z',
                    y: 0,
                  },
                  mid: {
                    x: '2016-09-18T12:00:00Z',
                    y: 70,
                  },
                  low: {
                    x: '2016-09-19T02:00:00Z',
                    y: 30,
                  },
                },
              ],
            },
          ],
        };
        graphDefault.reflowMultipleDatasets(graphData);
        graphDefault.reflowMultipleDatasets(graphData);
        graphDefault.reflowMultipleDatasets(graphData);
        expect(graphDefault.config.axis.y.dataRange.isRangeModified).toEqual(false);
      });
    });
  });
});
