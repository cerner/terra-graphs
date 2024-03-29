'use strict';

import Graph from '../../../../src/js/controls/Graph/Graph';
import Scatter from '../../../../src/js/controls/Scatter';
import errors from '../../../../src/js/helpers/errors';
import styles from '../../../../src/js/helpers/styles';
import utils from '../../../../src/js/helpers/utils';
import {
  axisDefault,
  axisTimeSeries,
  fetchElementByClass,
  getAxes,
  getInput,
  valuesDefault,
} from './helpers';

describe('Scatter', () => {
  let graphDefault = null;
  let scatterGraphContainer;

  beforeEach(() => {
    scatterGraphContainer = document.createElement('div');
    scatterGraphContainer.id = 'testScatter_carbon';
    scatterGraphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    document.body.appendChild(scatterGraphContainer);
    graphDefault = new Graph(getAxes(axisDefault));
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('When constructed', () => {
    it('initializes properly', () => {
      const scatter = new Scatter(getInput(valuesDefault));
      expect(scatter.config).not.toBeNull();
      expect(scatter.valuesRange).not.toBeNull();
      expect(scatter.dataTarget).toEqual({});
    });
    it('throws error when no input is provided', () => {
      expect(() => {
        graphDefault.loadContent(new Scatter());
      }).toThrowError(errors.THROW_MSG_NO_CONTENT_DATA_LOADED);
    });
    it('throws error when invalid input is provided', () => {
      expect(() => {
        graphDefault.loadContent(new Scatter({ dummy: 'dummy' }));
      }).toThrowError(errors.THROW_MSG_UNIQUE_KEY_NOT_PROVIDED);
    });
    it('throws error when no values are provided', () => {
      expect(() => {
        graphDefault.loadContent(
          new Scatter(getInput(undefined, false, false)),
        );
      }).toThrowError(errors.THROW_MSG_NO_DATA_POINTS);
    });
    // TODO: fix failing test
    it.skip('display the legend when values are provided', () => {
      const input = getInput(valuesDefault);
      graphDefault.loadContent(new Scatter(input));
      const legendContainer = fetchElementByClass(scatterGraphContainer, styles.legend);
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(1);
      const legendItem = document.body.querySelector(`.${styles.legendItem}`);
      expect(legendItem.getAttribute('aria-disabled')).toBe('false');
    });
    it('does not throw error when empty array is provided', () => {
      const input = utils.deepClone(getInput(valuesDefault));
      input.values = [];
      expect(() => {
        graphDefault.loadContent(new Scatter(input));
      }).not.toThrow();
    });
    // TODO: fix failing test
    it.skip('does not throw error when datetime values have milliseconds', () => {
      expect(() => {
        const graphTimeSeries = new Graph(getAxes(axisTimeSeries));
        graphTimeSeries.loadContent(
          new Scatter(
            getInput(
              [
                {
                  x: '2016-02-03T12:00:00.000Z',
                  y: 1,
                },
              ],
              false,
              false,
            ),
          ),
        );
      }).not.toThrow();
      expect(() => {
        const graphTimeSeries = new Graph(getAxes(axisTimeSeries));
        graphTimeSeries.loadContent(
          new Scatter(
            getInput(
              [
                {
                  x: '2016-02-03T12:00:00Z',
                  y: 1,
                },
              ],
              false,
              false,
            ),
          ),
        );
      }).not.toThrow();
      expect(() => {
        const graphTimeSeries = new Graph(getAxes(axisTimeSeries));
        graphTimeSeries.loadContent(
          new Scatter(
            getInput(
              [
                {
                  x: '2016-02-03T12:00Z',
                  y: 1,
                },
              ],
              false,
              false,
            ),
          ),
        );
      }).not.toThrow();
    });
    describe('throws error when values have datetime in a different ISO8601 format', () => {
      it('throws error on invalid millisecond value', () => {
        expect(() => {
          const graphTimeSeries = new Graph(getAxes(axisTimeSeries));
          graphTimeSeries.loadContent(
            new Scatter(
              getInput(
                [
                  {
                    x: '2016-02-03T12:00:00:000Z',
                    y: 1,
                  },
                ],
                false,
                false,
              ),
            ),
          );
        }).toThrow();
      });
      it('throws error on invalid second value', () => {
        expect(() => {
          const graphTimeSeries = new Graph(getAxes(axisTimeSeries));
          graphTimeSeries.loadContent(
            new Scatter(
              getInput(
                [
                  {
                    x: '2016-02-03T12:00:00:000.000Z',
                    y: 1,
                  },
                ],
                false,
                false,
              ),
            ),
          );
        }).toThrow();
      });
      it('throws error on no second value but with millisecond value', () => {
        expect(() => {
          const graphTimeSeries = new Graph(getAxes(axisTimeSeries));
          graphTimeSeries.loadContent(
            new Scatter(
              getInput(
                [
                  {
                    x: '2016-02-03T12:00.00Z',
                    y: 1,
                  },
                ],
                false,
                false,
              ),
            ),
          );
        }).toThrow();
      });
      it('throws error on no minute or second but with Zulu time stamp', () => {
        expect(() => {
          const graphTimeSeries = new Graph(getAxes(axisTimeSeries));
          graphTimeSeries.loadContent(
            new Scatter(
              getInput(
                [
                  {
                    x: '2016-02-03T12Z',
                    y: 1,
                  },
                ],
                false,
                false,
              ),
            ),
          );
        }).toThrow();
      });
      it('throws error on no hour, minute or second value but with Zulu timestamp', () => {
        expect(() => {
          const graphTimeSeries = new Graph(getAxes(axisTimeSeries));
          graphTimeSeries.loadContent(
            new Scatter(
              getInput(
                [
                  {
                    x: '2016-02-03Z',
                    y: 1,
                  },
                ],
                false,
                false,
              ),
            ),
          );
        }).toThrow();
      });
    });
    it('clones the input object correctly', () => {
      const input = getInput(valuesDefault, false, false);
      const scatter = new Scatter(input);
      expect(scatter.config.key).toBe(input.key);
      expect(scatter.config.color).toBe(input.color);
      expect(scatter.config.shape).toEqual(input.shape);
      expect(scatter.config.label).toEqual(input.label);
      expect(typeof scatter.config.onClick).toEqual('function');
      expect(scatter.config.values.length).toBe(3);
      expect(
        scatter.config.values.every(
          (i, index) => i.x === input.values[index].x,
        ),
      ).toBeTruthy();
      expect(
        scatter.config.values.every(
          (i, index) => i.y === input.values[index].y,
        ),
      ).toBeTruthy();
    });
    it("doesn't alter the config when the input object is updated", () => {
      const input = getInput(valuesDefault, false, false);
      const scatter = new Scatter(input);
      input.key = '';
      input.color = '';
      input.shape = '';
      input.onClick = null;
      input.label = {};
      input.values = [];

      expect(scatter.config.key).not.toBe(input.key);
      expect(scatter.config.color).not.toBe(input.color);
      expect(scatter.config.shape).not.toBe(input.shape);
      expect(scatter.config.label).not.toEqual(input.label);
      expect(typeof scatter.config.onClick).toEqual('function');
      expect(scatter.config.values).not.toBe(input.values);
      expect(scatter.config.values.length).toBe(3);
    });
    it('calculates min and max values correctly for y axis', () => {
      const input = getInput(valuesDefault, false, false);
      const scatter = new Scatter(input);
      expect(scatter.valuesRange.y.min).toBe(4);
      expect(scatter.valuesRange.y.max).toBe(35);
      expect(scatter.valuesRange.y2).toBeUndefined();
      expect(scatter.valuesRange.y2).toBeUndefined();
    });
    it('calculates min and max values correctly for y2 axis', () => {
      const input = getInput(valuesDefault, false, false, true);
      const scatter = new Scatter(input);
      expect(scatter.valuesRange.y).toBeUndefined();
      expect(scatter.valuesRange.y).toBeUndefined();
      expect(scatter.valuesRange.y2.min).toBe(4);
      expect(scatter.valuesRange.y2.max).toBe(35);
    });
  });
});
