'use strict';

import sinon from 'sinon';
import Graph from '../../../../../src/js/controls/Graph/Graph';
import {
  Bubble,
  BubbleMultipleDataset,
} from '../../../../../src/js/controls/Bubble';
import constants, {
  AXIS_TYPE,
  BUBBLE,
  COLORS,
} from '../../../../../src/js/helpers/constants';
import errors from '../../../../../src/js/helpers/errors';
import styles from '../../../../../src/js/helpers/styles';
import utils from '../../../../../src/js/helpers/utils';
import { toNumber, triggerEvent } from '../../../helpers/commonHelpers';
import {
  axisDefault,
  axisTimeSeries,
  fetchElementByClass,
  getAxes,
  getInput,
  getNoOnClickInput,
  valuesDefault,
  valuesDefaultWeightBased,
  valuesTimeSeries,
  fetchElementByTag,
} from '../helpers';

describe('Bubble Multiple Dataset - Load', () => {
  let graphDefault = null;
  let bubbleGraphContainer;

  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  beforeEach(() => {
    bubbleGraphContainer = document.createElement('div');
    bubbleGraphContainer.id = 'testBubble_carbon';
    bubbleGraphContainer.setAttribute(
      'style',
      'width: 1024px; height: 400px;',
    );
    document.body.appendChild(bubbleGraphContainer);
    graphDefault = new Graph(getAxes(axisDefault));
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('returns the graph instance', () => {
    const loadedBubble = new BubbleMultipleDataset(
      getInput(valuesDefault, false),
    );
    loadedBubble.load(graphDefault);
    expect(loadedBubble instanceof Bubble).toBeTruthy();
  });
  it('throws error when type and values are a mismatch', () => {
    expect(() => {
      const invalidTypeAxis = utils.deepClone(axisDefault);
      invalidTypeAxis.x.type = AXIS_TYPE.TIME_SERIES;
      const input = getInput(valuesDefault, false);
      const invalidGraph = new Graph(getAxes(invalidTypeAxis));
      invalidGraph.loadContent(new BubbleMultipleDataset(input));
    }).toThrowError(errors.THROW_MSG_INVALID_FORMAT_TYPE);
  });
  it('throws error when type and values are a mismatch', () => {
    expect(() => {
      const input = getInput(valuesTimeSeries, false);
      const validGraph = new Graph(getAxes(utils.deepClone(axisDefault)));
      validGraph.loadContent(new BubbleMultipleDataset(input));
    }).toThrowError(errors.THROW_MSG_INVALID_FORMAT_TYPE);
  });
  it('throws error when y values is passed as null', () => {
    let input = null;
    expect(() => {
      graphDefault.destroy();
      const graph = new Graph(getAxes(axisDefault));
      const data = utils.deepClone(valuesDefault);
      data[0].y = null;
      input = getInput(data);
      graph.loadContent(new BubbleMultipleDataset(input));
    }).toThrowError(errors.THROW_MSG_INVALID_DATA);
  });
  it('throws error when y values is passed as undefined', () => {
    let input = null;
    expect(() => {
      graphDefault.destroy();
      const graph = new Graph(getAxes(axisDefault));
      const data = utils.deepClone(valuesDefault);
      data[0].y = undefined;
      input = getInput(data);
      graph.loadContent(new BubbleMultipleDataset(input));
    }).toThrowError(errors.THROW_MSG_INVALID_DATA);
  });
  it('internal subsets gets created correctly for each data point', () => {
    const graph = graphDefault.loadContent(
      new BubbleMultipleDataset(getInput(valuesDefault, false, false)),
    );
    const data = graph.content[0].dataTarget;
    expect(
      data.internalValuesSubset.every(
        (j) => j.onClick !== null
                    && j.x !== null
                    && j.y !== null
                    && j.label !== null
                    && j.color
                    && j.yAxis
                    && j.key === data.key,
      ),
    ).toBeTruthy();
    expect(graph.config.shownTargets.length).toBe(1);
  });
  it('internal subsets gets created successfully for time series', () => {
    const graphTimeSeries = new Graph(getAxes(axisTimeSeries));
    const graph = graphTimeSeries.loadContent(
      new BubbleMultipleDataset(getInput(valuesTimeSeries, false, false)),
    );
    const data = graph.content[0].dataTarget;
    expect(
      data.internalValuesSubset.every(
        (j) => typeof j.x === 'object' && j.x instanceof Date,
      ),
    ).toBeTruthy();
  });
  it('defaults color to black when not provided', () => {
    const graph = graphDefault.loadContent(
      new BubbleMultipleDataset(getInput(valuesDefault)),
    );
    const data = graph.content[0].dataTarget;
    expect(
      data.internalValuesSubset.every(
        (j) => j.color === constants.DEFAULT_COLOR,
      ),
    ).toBeTruthy();
  });
  it('defaults axis to Y axis when not provided', () => {
    const graph = graphDefault.loadContent(
      new BubbleMultipleDataset(getInput(valuesDefault)),
    );
    const data = graph.content[0].dataTarget;
    expect(
      data.internalValuesSubset.every((j) => j.yAxis === constants.Y_AXIS),
    ).toBeTruthy();
  });
  describe('draws the graph', () => {
    let input = null;
    beforeEach(() => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new BubbleMultipleDataset(input));
    });
    it('adds content container for each bubble set', () => {
      const bubbleContentContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.bubbleGraphContent,
      );
      expect(bubbleContentContainer).not.toBeNull();
      expect(bubbleContentContainer.tagName).toBe('g');
      expect(
        bubbleContentContainer.getAttribute('aria-describedby'),
      ).toBe(input.key);
    });
    it('adds container for each data points sets for each bubble set', () => {
      const secInput = utils.deepClone(input);
      secInput.key = 'uid_2';
      graphDefault.loadContent(new BubbleMultipleDataset(secInput));
      const graphContent = document.body.querySelectorAll(
                `.${styles.bubbleGraphContent}`,
      );
      expect(graphContent.length).toBe(2);
    });
    it('adds legend for each data points sets for each bubble', () => {
      const secInput = utils.deepClone(input);
      secInput.key = 'uid_2';
      graphDefault.loadContent(new BubbleMultipleDataset(secInput));
      const legendItems = document.body.querySelectorAll(
                `.${styles.legendItem}`,
      );
      expect(legendItems.length).toBe(2);
    });
    it('disables legend when disabled flag is set', () => {
      graphDefault.destroy();
      const graph = new Graph(getAxes(axisDefault));
      const data = utils.deepClone(valuesDefault);
      input = getInput(data);
      input.label.isDisabled = true;
      graph.loadContent(new BubbleMultipleDataset(input));
      const legendItem = document.body.querySelector(
                `.${styles.legendItem}`,
      );
      expect(legendItem.getAttribute('aria-disabled')).toBe('true');
    });
    it('disabled legend item is not tab-able', () => {
      graphDefault.destroy();
      const graph = new Graph(getAxes(axisDefault));
      const data = utils.deepClone(valuesDefault);
      input = getInput(data);
      input.label.isDisabled = true;
      graph.loadContent(new BubbleMultipleDataset(input));
      const legendItem = document.body.querySelector(
                `.${styles.legendItemBtn}`,
      );
      expect(legendItem.getAttribute('tabindex')).toBe('-1');
    });
    it('add bubble group for bubble', () => {
      const bubbleContentContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.bubbleGraphContent,
      );
      const bubbleGroup = fetchElementByClass(
        bubbleContentContainer,
        styles.currentPointsGroup,
      );
      expect(bubbleGroup).not.toBeNull();
      expect(bubbleGroup.tagName).toBe('g');
      expect(bubbleGroup.getAttribute('transform')).not.toBeNull();
    });
    it('add points group for data points', () => {
      const pointsGroup = fetchElementByClass(
        bubbleGraphContainer,
        styles.currentPointsGroup,
      );
      expect(pointsGroup).not.toBeNull();
      expect(pointsGroup.tagName).toBe('g');
      expect(pointsGroup.getAttribute('transform')).not.toBeNull();
    });
    it('adds points for each data point', () => {
      const pointsGroup = fetchElementByClass(
        bubbleGraphContainer,
        styles.currentPointsGroup,
      );
      const points = pointsGroup.querySelectorAll(`.${styles.point}`);
      expect(points.length).toBe(valuesDefault.length);
    });
    it('points have correct color', () => {
      const pointsGroup = fetchElementByClass(
        bubbleGraphContainer,
        styles.currentPointsGroup,
      );
      const points = fetchElementByClass(pointsGroup, styles.point);
      const bubbleCircle = fetchElementByTag(points, 'circle');
      expect(bubbleCircle.attributes.fill.value).toEqual(COLORS.GREEN);
    });
    it('points have correct unique key assigned', () => {
      const pointsGroup = fetchElementByClass(
        bubbleGraphContainer,
        styles.currentPointsGroup,
      );
      const points = fetchElementByClass(pointsGroup, styles.point);
      expect(points.getAttribute('aria-describedby')).toBe(input.key);
    });
    it('each bubble should have a default radius', () => {
      const points = fetchElementByClass(
        bubbleGraphContainer,
        styles.point,
      );
      expect(points.tagName).toBe('g');
      expect(points.firstChild.tagName).toBe('circle');
      expect(points.firstChild.attributes.getNamedItem('r').value).toBe(
                `${constants.DEFAULT_BUBBLE_RADIUS_MAX}`,
      );
    });
    it('adds a selected data point for each point', () => {
      const pointsGroup = fetchElementByClass(
        bubbleGraphContainer,
        styles.currentPointsGroup,
      );
      const selectedPoints = pointsGroup.querySelectorAll(
                `.${styles.dataPointSelection}`,
      );
      expect(selectedPoints.length).toBe(valuesDefault.length);
    });
    it('selected data point is hidden by default', () => {
      const selectedPoints = fetchElementByClass(
        bubbleGraphContainer,
        styles.dataPointSelection,
      );
      expect(selectedPoints.getAttribute('aria-hidden')).toBe('true');
    });
    it('selected data point has circle as shape', () => {
      const selectedPoints = fetchElementByClass(
        bubbleGraphContainer,
        styles.dataPointSelection,
      );
      expect(selectedPoints.tagName).toBe('g');
      expect(selectedPoints.firstChild.tagName).toBe('circle');
    });
    it('selected data point has correct unique key assigned', () => {
      const selectedPoints = fetchElementByClass(
        bubbleGraphContainer,
        styles.dataPointSelection,
      );
      expect(selectedPoints.getAttribute('aria-describedby')).toBe(
        input.key,
      );
    });
    it('does not update x axis range if allow calibration is disabled', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.axis.x.allowCalibration = false;
      graphConfig.axis.x.lowerLimit = 50;
      graphConfig.axis.x.upperLimit = 100;
      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new BubbleMultipleDataset(input));

      expect(graphInstance.config.axis.x.domain.upperLimit)
        .toEqual(graphConfig.axis.x.upperLimit);
      expect(graphInstance.config.axis.x.domain.lowerLimit)
        .toEqual(graphConfig.axis.x.lowerLimit);
    });
    it('does not update x axis range by default if allowCalibration is undefined', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.axis.x.allowCalibration = undefined;
      graphConfig.axis.x.lowerLimit = 50;
      graphConfig.axis.x.upperLimit = 100;
      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new BubbleMultipleDataset(input));

      expect(graphInstance.config.axis.x.domain.upperLimit)
        .toEqual(graphConfig.axis.x.upperLimit);
      expect(graphInstance.config.axis.x.domain.lowerLimit)
        .toEqual(graphConfig.axis.x.lowerLimit);
    });
    it('does not update x axis range if allowCalibration is true and datapoints are within limits', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.axis.x.allowCalibration = true;
      graphConfig.axis.x.lowerLimit = 20;
      graphConfig.axis.x.upperLimit = 70;

      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new BubbleMultipleDataset(input));

      expect(graphInstance.config.axis.x.domain.lowerLimit).toEqual(20);
      expect(graphInstance.config.axis.x.domain.upperLimit).toEqual(70);
    });
    it('updates x axis range if allowCalibration is true and datapoints exceed limits', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.axis.x.allowCalibration = true;
      graphConfig.axis.x.lowerLimit = 30;
      graphConfig.axis.x.upperLimit = 40;

      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new BubbleMultipleDataset(input));

      expect(graphInstance.config.axis.x.domain.lowerLimit).toEqual(24);
      expect(graphInstance.config.axis.x.domain.upperLimit).toEqual(46);
    });
    it('updates x axis range if allowCalibration is true and datapoints are equal to limits', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.axis.x.allowCalibration = true;
      graphConfig.axis.x.lowerLimit = 25;
      graphConfig.axis.x.upperLimit = 45;

      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new BubbleMultipleDataset(input));

      expect(graphInstance.config.axis.x.domain.lowerLimit).toEqual(24);
      expect(graphInstance.config.axis.x.domain.upperLimit).toEqual(46);
    });
    it('does not update the timeseries x axis range if allowCalibration is true and datapoints are within limits', () => {
      const expectedDateLowerLimit = new Date(2016, 1, 1);
      const expectedDateUpperLimit = new Date(2016, 5, 15);

      const graphConfig = getAxes(axisTimeSeries);
      graphConfig.axis.x.allowCalibration = true;
      graphConfig.axis.x.lowerLimit = expectedDateLowerLimit.toISOString();
      graphConfig.axis.x.upperLimit = expectedDateUpperLimit.toISOString();

      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesTimeSeries, false, false);
      graphInstance.loadContent(new BubbleMultipleDataset(input));

      expect(graphInstance.config.axis.x.domain.lowerLimit).toEqual(expectedDateLowerLimit);
      expect(graphInstance.config.axis.x.domain.upperLimit).toEqual(expectedDateUpperLimit);
    });
    it('updates the timeseries x axis range if allowCalibration is true and datapoints exceed limits', () => {
      const graphConfig = getAxes(axisTimeSeries);
      graphConfig.axis.x.allowCalibration = true;
      graphConfig.axis.x.lowerLimit = new Date(2016, 3, 10).toISOString();
      graphConfig.axis.x.upperLimit = new Date(2016, 4, 25).toISOString();

      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesTimeSeries, false, false);
      graphInstance.loadContent(new BubbleMultipleDataset(input));

      expect(graphInstance.config.axis.x.domain.lowerLimit.toISOString()).toEqual('2016-01-28T10:48:00.000Z');
      expect(graphInstance.config.axis.x.domain.upperLimit.toISOString()).toEqual('2016-06-09T13:12:00.000Z');
    });
    it('updates the timeseries x axis range if allowCalibration is true and datapoints are equal to limits', () => {
      const graphConfig = getAxes(axisTimeSeries);
      graphConfig.axis.x.allowCalibration = true;
      graphConfig.axis.x.lowerLimit = '2016-02-03T12:00:00Z';
      graphConfig.axis.x.upperLimit = '2016-06-03T12:00:00Z';

      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesTimeSeries, false, false);
      graphInstance.loadContent(new BubbleMultipleDataset(input));

      expect(graphInstance.config.axis.x.domain.lowerLimit.toISOString()).toEqual('2016-01-28T10:48:00.000Z');
      expect(graphInstance.config.axis.x.domain.upperLimit.toISOString()).toEqual('2016-06-09T13:12:00.000Z');
    });
    describe('draw bubble different size', () => {
      it('bubble of custom size', () => {
        graphDefault.destroy();
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.weight = {
          fixedRadius: 12,
        };
        const bubble = new BubbleMultipleDataset(input);
        graphDefault.loadContent(bubble);
        const points = fetchElementByClass(
          bubbleGraphContainer,
          styles.point,
        );
        expect(points.tagName).toBe('g');
        expect(points.firstChild.tagName).toBe('circle');
        expect(
          points.firstChild.attributes.getNamedItem('r').value,
        ).toBe('12');
      });
      it('weight based bubbles', () => {
        graphDefault.destroy();
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefaultWeightBased, false, false);
        input.weight = {
          min: 10,
          max: 100,
        };
        const bubble = new BubbleMultipleDataset(input);
        graphDefault.loadContent(bubble);

        const bubblePoint = document.querySelectorAll(`.${styles.point}`);
        bubblePoint.forEach((points) => {
          expect(points.tagName).toBe('g');
          expect(points.firstChild.tagName).toBe('circle');
          expect(toNumber(points.firstChild.attributes.getNamedItem('r').value)).toBeGreaterThanOrEqual(3);
          expect(toNumber(points.firstChild.attributes.getNamedItem('r').value)).toBeLessThanOrEqual(30);
        });
      });
    });
    describe('when clicked on a data point', () => {
      it('does not do anything if no onClick callback is provided', () => {
        graphDefault.destroy();
        graphDefault = new Graph(getAxes(axisDefault));
        input = getNoOnClickInput(valuesDefault, false, false);
        graphDefault.loadContent(new BubbleMultipleDataset(input));
        const point = fetchElementByClass(
          bubbleGraphContainer,
          styles.point,
        );
        triggerEvent(point, 'click', () => {
          expect(point.getAttribute('aria-disabled')).toBe('true');
        });
      });
      it('hides data point selection when parameter callback is called', () => {
        graphDefault.destroy();
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.onClick = (clearSelectionCallback) => {
          clearSelectionCallback();
        };
        graphDefault.loadContent(new BubbleMultipleDataset(input));
        const point = fetchElementByClass(
          bubbleGraphContainer,
          styles.point,
        );
        triggerEvent(point, 'click', () => {
          const selectionPoint = fetchElementByClass(
            bubbleGraphContainer,
            styles.dataPointSelection,
          );
          expect(selectionPoint.getAttribute('aria-hidden')).toBe(
            'true',
          );
        });
      });
      it('calls onClick callback', () => {
        const dataPointClickHandlerSpy = sinon.spy();
        graphDefault.destroy();
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.onClick = dataPointClickHandlerSpy;
        graphDefault.loadContent(new BubbleMultipleDataset(input));
        const point = fetchElementByClass(
          bubbleGraphContainer,
          styles.point,
        );
        triggerEvent(point, 'click', () => {
          expect(dataPointClickHandlerSpy.calledOnce).toBeTruthy();
        });
      });
      it('calls onClick callback with parameters', () => {
        let args = {};
        graphDefault.destroy();
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.onClick = (cb, key, index, val, target) => {
          args = {
            cb,
            key,
            index,
            val,
            target,
          };
        };
        graphDefault.loadContent(new BubbleMultipleDataset(input));
        const point = bubbleGraphContainer.querySelectorAll(
                    `.${styles.point}`,
        )[1];
        triggerEvent(point, 'click', () => {
          expect(args).not.toBeNull();
          expect(args.cb).toEqual(jasmine.any(Function));
          expect(args.key).toBe('uid_1');
          expect(args.index).toBe(1);
          expect(args.val).not.toBeNull();
          expect(args.val.x).toBe(input.values[1].x);
          expect(args.val.y).toBe(input.values[1].y);
          expect(args.target).not.toBeNull();
        });
      });
      it('highlights the data point', () => {
        const selectionPoint = fetchElementByClass(
          bubbleGraphContainer,
          styles.dataPointSelection,
        );
        const point = fetchElementByClass(
          bubbleGraphContainer,
          styles.point,
        );
        triggerEvent(point, 'click', () => {
          expect(selectionPoint.getAttribute('aria-hidden')).toBe(
            'false',
          );
        });
      });
      it('removes highlight when data point is clicked again', () => {
        const selectionPoint = fetchElementByClass(
          bubbleGraphContainer,
          styles.dataPointSelection,
        );
        const point = fetchElementByClass(
          bubbleGraphContainer,
          styles.point,
        );
        triggerEvent(point, 'click', () => {
          triggerEvent(point, 'click', () => {
            expect(selectionPoint.getAttribute('aria-hidden')).toBe(
              'true',
            );
          });
        });
      });
    });
    describe("when clicked on a data point's near surrounding area", () => {
      it('highlights the data point', () => {
        const selectionPoint = fetchElementByClass(
          bubbleGraphContainer,
          styles.dataPointSelection,
        );
        triggerEvent(selectionPoint, 'click', () => {
          expect(selectionPoint.getAttribute('aria-hidden')).toBe(
            'false',
          );
        });
      });
      it('calls onClick callback with parameters', () => {
        let args = {};
        graphDefault.destroy();
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.onClick = (cb, key, index, val, target) => {
          args = {
            cb,
            key,
            index,
            val,
            target,
          };
        };
        graphDefault.loadContent(new BubbleMultipleDataset(input));
        const selectionPoint = bubbleGraphContainer.querySelectorAll(
                    `.${styles.dataPointSelection}`,
        )[1];
        triggerEvent(selectionPoint, 'click', () => {
          expect(args).not.toBeNull();
          expect(args.cb).toEqual(jasmine.any(Function));
          expect(args.key).toBe('uid_1');
          expect(args.index).toBe(1);
          expect(args.val).not.toBeNull();
          expect(args.val.x).toBe(input.values[1].x);
          expect(args.val.y).toBe(input.values[1].y);
          expect(args.target).not.toBeNull();
        });
      });
      it('removes highlight when clicked again', () => {
        const selectionPoint = fetchElementByClass(
          bubbleGraphContainer,
          styles.dataPointSelection,
        );
        triggerEvent(selectionPoint, 'click', () => {
          triggerEvent(selectionPoint, 'click', () => {
            expect(selectionPoint.getAttribute('aria-hidden')).toBe(
              'true',
            );
          });
        });
      });
    });
  });
  describe('prepares to load legend item', () => {
    it('display the legend when empty array is provided as input', () => {
      graphDefault.loadContent(
        new BubbleMultipleDataset(getInput([], false)),
      );
      const legendContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.legend,
      );
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(1);
      const legendItem = document.body.querySelector(
                `.${styles.legendItem}`,
      );
      expect(legendItem.getAttribute('aria-disabled')).toBe('true');
      expect(legendItem.getAttribute('aria-current')).toBe('true');
    });
    it('does not load if legend is opted to be hidden', () => {
      graphDefault.destroy();
      const input = getAxes(axisDefault);
      input.showLegend = false;
      const noLegendGraph = new Graph(input);
      noLegendGraph.loadContent(
        new BubbleMultipleDataset(getInput(valuesDefault)),
      );
      const legendContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.legend,
      );
      expect(legendContainer).toBeNull();
      noLegendGraph.destroy();
    });
    it('does not load if label property is null', () => {
      const input = getInput(valuesDefault);
      input.label = null;
      graphDefault.loadContent(new BubbleMultipleDataset(input));
      const legendContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.legend,
      );
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(0);
    });
    it('does not load if label property is empty', () => {
      const input = getInput(valuesDefault);
      input.label = {};
      graphDefault.loadContent(new BubbleMultipleDataset(input));
      const legendContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.legend,
      );
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(0);
    });
    it('does not load if label display value is not provided', () => {
      const input = getInput(valuesDefault);
      input.label.display = '';
      graphDefault.loadContent(new BubbleMultipleDataset(input));
      const legendContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.legend,
      );
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(0);
    });
    it('sanitizes the legend display', () => {
      const input = getInput(valuesDefault);
      input.label.display = '<HELLO DUMMY X LABEL>';
      graphDefault.loadContent(new BubbleMultipleDataset(input));
      const legendContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.legend,
      );
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(1);
    });
    it('loads item with a shape and text', () => {
      const input = getInput(valuesDefault, false);
      graphDefault.loadContent(new BubbleMultipleDataset(input));
      const legendItem = fetchElementByClass(
        bubbleGraphContainer,
        styles.legendItem,
      );
      const legendItemBtn = fetchElementByClass(
        bubbleGraphContainer,
        styles.legendItemBtn,
      );
      const iconSVG = legendItemBtn.children[0].firstChild;
      expect(legendItem).not.toBeNull();
      expect(legendItem.getAttribute('aria-current')).toBe('true');
      expect(legendItem.getAttribute('aria-disabled')).toBe('false');
      expect(legendItem.children[1].className).toBe(
        styles.legendItemText,
      );
      expect(legendItem.children[1].tagName).toBe('LABEL');
      expect(legendItem.children[1].textContent).toBe(
        input.label.display,
      );
      expect(legendItemBtn).not.toBeNull();
      expect(legendItemBtn.getAttribute('class')).toBe(
        styles.legendItemBtn,
      );
      expect(iconSVG.tagName).toBe('svg');
      expect(
        iconSVG.classList.contains(styles.legendItemIcon),
      ).toBeTruthy();
    });
    it('loads the correct color', () => {
      const input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new BubbleMultipleDataset(input));
      const legendItem = fetchElementByClass(
        bubbleGraphContainer,
        styles.legendItem,
      );
      const iconSVG = legendItem.querySelector('svg');
      const iconPath = legendItem.querySelector('path');
      expect(iconSVG).not.toBeNull();
      expect(iconSVG.classList).toContain(styles.legendItemIcon);
      expect(iconSVG.getAttribute('style')).toBe(
                `fill: ${COLORS.GREEN};`,
      );
      expect(iconPath).not.toBeNull();
      expect(iconPath.getAttribute('d')).not.toBeNull();
    });
    it('attaches click event handlers correctly', () => {
      const input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new BubbleMultipleDataset(input));
      const legendItem = fetchElementByClass(
        bubbleGraphContainer,
        styles.legendItem,
      );
      triggerEvent(legendItem, 'click', () => {
        expect(legendItem.getAttribute('aria-current')).toBe('false');
      });
    });
    it('on click hides the bubbles', () => {
      const rafSpy = spyOn(
        window,
        'requestAnimationFrame',
      ).and.callThrough();
      const input = getInput(valuesDefault, false, false);
      const bubble = new BubbleMultipleDataset(input);
      graphDefault.loadContent(bubble);
      triggerEvent(
        fetchElementByClass(bubbleGraphContainer, styles.legendItem),
        'click',
        () => {
          expect(window.requestAnimationFrame).toHaveBeenCalledTimes(
            1,
          );
          expect(
            fetchElementByClass(
              bubbleGraphContainer,
              styles.point,
            ).getAttribute('aria-hidden'),
          ).toBe('true');
          expect(
            fetchElementByClass(
              bubbleGraphContainer,
              styles.dataPointSelection,
            ).getAttribute('aria-hidden'),
          ).toBe('true');
          rafSpy.calls.reset();
        },
      );
    });
    it('on click, removes the first bubble set but keeps the rest', () => {
      const inputPrimary = getInput(valuesDefault, false, false);
      const inputSecondary = {
        key: 'uid_2',
        label: {
          display: 'Data Label B',
        },
        values: valuesDefault,
      };
      const primaryBubble = new BubbleMultipleDataset(inputPrimary);
      const secondaryBubble = new BubbleMultipleDataset(inputSecondary);
      graphDefault.loadContent(primaryBubble);
      const graph = graphDefault.loadContent(secondaryBubble);
      triggerEvent(
        fetchElementByClass(bubbleGraphContainer, styles.legendItem),
        'click',
        () => {
          const primaryBubbleElement = bubbleGraphContainer.querySelector(
                        `.${styles.bubbleGraphContent}[aria-describedby="${inputPrimary.key}"]`,
          );
          const secondaryBubbleElement = bubbleGraphContainer.querySelector(
                        `.${styles.bubbleGraphContent}[aria-describedby="${inputSecondary.key}"]`,
          );
          expect(graph.config.shownTargets.length).toBe(1);
          expect(
            fetchElementByClass(
              primaryBubbleElement,
              styles.point,
            ).getAttribute('aria-hidden'),
          ).toBe('true');
          expect(
            fetchElementByClass(
              primaryBubbleElement,
              styles.dataPointSelection,
            ).getAttribute('aria-hidden'),
          ).toBe('true');
          expect(
            fetchElementByClass(
              secondaryBubbleElement,
              styles.point,
            ).getAttribute('aria-hidden'),
          ).toBe('false');
          expect(
            fetchElementByClass(
              secondaryBubbleElement,
              styles.dataPointSelection,
            ).getAttribute('aria-hidden'),
          ).toBe('true');
        },
      );
    });
    it('on clicking twice toggles the bubbles back to visible', () => {
      const rafSpy = spyOn(
        window,
        'requestAnimationFrame',
      ).and.callThrough();
      const input = getInput(valuesDefault, false, false);
      const bubble = new BubbleMultipleDataset(input);
      const graph = graphDefault.loadContent(bubble);
      const legendItem = fetchElementByClass(
        bubbleGraphContainer,
        styles.legendItem,
      );
      triggerEvent(legendItem, 'click', () => {
        bubble.redraw(graph);
        triggerEvent(legendItem, 'click', () => {
          bubble.redraw(graph);
          expect(window.requestAnimationFrame).toHaveBeenCalledTimes(
            2,
          );
          expect(
            fetchElementByClass(
              bubbleGraphContainer,
              styles.point,
            ).getAttribute('aria-hidden'),
          ).toBe('false');
          expect(
            fetchElementByClass(
              bubbleGraphContainer,
              styles.dataPointSelection,
            ).getAttribute('aria-hidden'),
          ).toBe('true');
          rafSpy.calls.reset();
        });
      });
    });
    it('shown targets are removed from Graph', () => {
      const input = getInput(valuesDefault, false, false);
      const graph = graphDefault.loadContent(
        new BubbleMultipleDataset(input),
      );
      triggerEvent(
        fetchElementByClass(bubbleGraphContainer, styles.legendItem),
        'click',
        () => {
          expect(graph.config.shownTargets.length).toBe(0);
        },
      );
    });
    it('shown targets are updated back when toggled', () => {
      const input = getInput(valuesDefault, false, false);
      const graph = graphDefault.loadContent(
        new BubbleMultipleDataset(input),
      );
      const legendItem = fetchElementByClass(
        bubbleGraphContainer,
        styles.legendItem,
      );
      triggerEvent(legendItem, 'click', () => {
        triggerEvent(legendItem, 'click', () => {
          expect(graph.config.shownTargets.length).toBe(1);
        });
      });
    });
    it('attaches mouse enter event handlers correctly', () => {
      const inputPrimary = getInput(valuesDefault, false, false);
      const inputSecondary = {
        key: 'uid_2',
        label: {
          display: 'Data Label B',
        },
        values: valuesDefault,
      };
      graphDefault.loadContent(new BubbleMultipleDataset(inputPrimary));
      graphDefault.loadContent(new BubbleMultipleDataset(inputSecondary));
      const legendItem = fetchElementByClass(
        bubbleGraphContainer,
        styles.legendItem,
      );
      triggerEvent(legendItem, 'mouseenter', () => {
        expect(
          document
            .querySelector(
                            `.${styles.point}[aria-describedby="${inputPrimary.key}"]`,
            )
            .classList.contains(styles.highlight),
        ).toBeTruthy();
        expect(
          document
            .querySelector(
                            `.${styles.point}[aria-describedby="${inputSecondary.key}"]`,
            )
            .classList.contains(styles.blur),
        ).toBeTruthy();
      });
    });
    it('attaches mouse leave event handlers correctly', () => {
      const inputPrimary = getInput(valuesDefault, false, false);
      const inputSecondary = {
        key: 'uid_2',
        label: {
          display: 'Data Label B',
        },
        values: valuesDefault,
      };
      graphDefault.loadContent(new BubbleMultipleDataset(inputPrimary));
      graphDefault.loadContent(new BubbleMultipleDataset(inputSecondary));
      const legendItem = fetchElementByClass(
        bubbleGraphContainer,
        styles.legendItem,
      );
      triggerEvent(legendItem, 'mouseleave', () => {
        expect(
          document
            .querySelector(
                            `.${styles.point}[aria-describedby="${inputPrimary.key}"]`,
            )
            .classList.contains(styles.highlight),
        ).toBeFalsy();
        expect(
          document
            .querySelector(
                            `.${styles.point}[aria-describedby="${inputSecondary.key}"]`,
            )
            .classList.contains(styles.blur),
        ).toBeFalsy();
      });
    });
  });
  describe('Prepares to load label shape', () => {
    let graph;
    beforeEach(() => {
      graphDefault.destroy();
      graph = new Graph(getAxes(axisDefault));
      const bubblePrimary = getInput(valuesDefault, true, true);
      const bubbleSecondary = getInput(valuesDefault, true, false);
      bubbleSecondary.key = 'uid_2';
      graph.loadContent(new BubbleMultipleDataset(bubblePrimary));
      graph.loadContent(new BubbleMultipleDataset(bubbleSecondary));
    });
    it('Does not load shape if Y2 axis is not loaded', () => {
      graphDefault.destroy();
      const axes = utils.deepClone(getAxes(axisDefault));
      axes.axis.y2.show = false;
      graph = new Graph(axes);
      const input = getInput(valuesDefault, true, false);
      graph.loadContent(new BubbleMultipleDataset(input));
      expect(graph.axesLabelShapeGroup[constants.Y_AXIS]).toBeUndefined();
      expect(
        graph.axesLabelShapeGroup[constants.Y2_AXIS],
      ).toBeUndefined();
    });
    it('Loads shape in Y Axis', () => {
      const labelShapeContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.axisLabelYShapeContainer,
      );
      const svgPath = labelShapeContainer.children[0];
      expect(
        graph.axesLabelShapeGroup[constants.Y_AXIS],
      ).not.toBeUndefined();
      expect(labelShapeContainer.children.length).toBe(1);
      expect(svgPath.tagName).toBe('svg');
      expect(svgPath.getAttribute('x')).toBe('0');
      expect(svgPath.getAttribute('aria-describedby')).toBe('uid_2');
    });
    it('Loads shape for each data set in Y Axis', () => {
      const bubbleTertiary = getInput(valuesDefault, true, false);
      bubbleTertiary.key = 'uid_3';
      graph.loadContent(new BubbleMultipleDataset(bubbleTertiary));
      const labelShapeContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.axisLabelYShapeContainer,
      );
      const svgPath = labelShapeContainer.children[1];
      expect(labelShapeContainer.children.length).toBe(2);
      expect(svgPath.tagName).toBe('svg');
      expect(svgPath.getAttribute('x')).toBe('20');
      expect(svgPath.getAttribute('aria-describedby')).toBe('uid_3');
    });
    it('Loads shape in Y2 Axis', () => {
      const labelShapeContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.axisLabelY2ShapeContainer,
      );
      const svgPath = labelShapeContainer.children[0];
      expect(
        graph.axesLabelShapeGroup[constants.Y2_AXIS],
      ).not.toBeUndefined();
      expect(labelShapeContainer.children.length).toBe(1);
      expect(svgPath.tagName).toBe('svg');
      expect(svgPath.getAttribute('x')).toBe('0');
      expect(svgPath.getAttribute('aria-describedby')).toBe('uid_1');
    });
    it('Loads shape for each data set in Y2 Axis', () => {
      const bubbleTertiary = getInput(valuesDefault, true, true);
      bubbleTertiary.key = 'uid_4';
      graph.loadContent(new BubbleMultipleDataset(bubbleTertiary));
      const labelShapeContainer = fetchElementByClass(
        bubbleGraphContainer,
        styles.axisLabelY2ShapeContainer,
      );
      const svgPath = labelShapeContainer.children[1];
      expect(labelShapeContainer.children.length).toBe(2);
      expect(svgPath.tagName).toBe('svg');
      expect(svgPath.getAttribute('x')).toBe('20');
      expect(svgPath.getAttribute('aria-describedby')).toBe('uid_4');
    });
  });
  describe('On Blubble Click', () => {
    let graph;
    beforeEach(() => {
      graph = new Graph(getAxes(axisDefault));
      const input = getInput(valuesDefault, false, false);
      graph.loadContent(new BubbleMultipleDataset(input));
    });
    describe('On click', () => {
      it('Highlight respective bubble', () => {
        const bubblePoint = fetchElementByClass(
          bubbleGraphContainer,
          styles.point,
        );
        const bubbleCircle = fetchElementByTag(bubblePoint, 'circle');
        triggerEvent(bubbleCircle, 'click', () => {
          expect(bubbleCircle.classList.length.toString()).toEqual(
            '0',
          );
        });
      });
      it('Blurs all other bubbles', () => {
        const bubblePoint = fetchElementByClass(
          bubbleGraphContainer,
          styles.point,
        );
        const bubbleCircle = fetchElementByTag(bubblePoint, 'circle');

        triggerEvent(bubbleCircle, 'click', () => {
          const circleNodes = document.querySelectorAll(
                        `.${styles.point} circle`,
          );
          circleNodes.forEach((node) => {
            if (node.getAttribute('aria-selected') === 'false') {
              expect(
                node.classList.contains(styles.bubbleBlur),
              ).toEqual(true);
            }
          });
        });
      });
    });
  });
  describe('Multiple Dataset behavior', () => {
    let input = null;
    let graph = null;
    beforeEach(() => {
      graph = new Graph(getAxes(axisDefault));
      input = getInput(valuesDefault, false, false);
    });

    it('ignores all datasets after 7', () => {
      const input2 = utils.deepClone(input);
      input2.key = 'uid_2';
      const input3 = utils.deepClone(input);
      input3.key = 'uid_3';
      const input4 = utils.deepClone(input);
      input4.key = 'uid_4';
      const input5 = utils.deepClone(input);
      input5.key = 'uid_5';
      const input6 = utils.deepClone(input);
      input6.key = 'uid_6';
      const input7 = utils.deepClone(input);
      input7.key = 'uid_7';
      const input8 = utils.deepClone(input);
      input8.key = 'uid_8';

      graph.loadContent(new BubbleMultipleDataset(input));
      graph.loadContent(new BubbleMultipleDataset(input2));
      graph.loadContent(new BubbleMultipleDataset(input3));
      graph.loadContent(new BubbleMultipleDataset(input4));
      graph.loadContent(new BubbleMultipleDataset(input5));
      graph.loadContent(new BubbleMultipleDataset(input6));
      graph.loadContent(new BubbleMultipleDataset(input7));
      graph.loadContent(new BubbleMultipleDataset(input8));

      const graphContent = document.body.querySelectorAll(
                `.${styles.bubbleGraphContent}`,
      );
      expect(graphContent.length).toBe(BUBBLE.MAX_DATASETS_MULTIPLE_API);
    });
  });
});
