'use strict';

import sinon from 'sinon';
import Graph from '../../../../src/js/controls/Graph/Graph';
import Line from '../../../../src/js/controls/Line';
import constants, {
  AXIS_TYPE,
  COLORS,
  LINE_TYPE,
  SHAPES,
} from '../../../../src/js/helpers/constants';
import errors from '../../../../src/js/helpers/errors';
import styles from '../../../../src/js/helpers/styles';
import utils from '../../../../src/js/helpers/utils';
import { triggerEvent } from '../../helpers/commonHelpers';
import {
  axisDefault,
  axisTimeSeries,
  fetchElementByClass,
  fetchAllElementsByClass,
  getAxes,
  getInput,
  valuesDefault,
  valuesTimeSeries,
} from './helpers';
import {
  LINE,
  LINE_DASHED,
} from '../../../../src/js/core/Shape/shapeDefinitions';

// TODO: fix failing tests
describe.skip('Line - Load', () => {
  let graphDefault = null;
  let lineGraphContainer;
  beforeEach(() => {
    lineGraphContainer = document.createElement('div');
    lineGraphContainer.id = 'testLine_carbon';
    lineGraphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    document.body.appendChild(lineGraphContainer);
    graphDefault = new Graph(getAxes(axisDefault));
  });
  afterEach(() => {
    document.body.innerHTML = '';
    graphDefault.destroy();
  });
  it('returns the graph instance', () => {
    const loadedLine = new Line(getInput(valuesDefault, false, false));
    loadedLine.load(graphDefault);
    expect(loadedLine).toBeInstanceOf(Line);
  });
  it('throws error when type and values are a mismatch', () => {
    expect(() => {
      const invalidTypeAxis = utils.deepClone(axisDefault);
      invalidTypeAxis.x.type = AXIS_TYPE.TIME_SERIES;
      const input = getInput(valuesDefault, false, false);
      const invalidGraph = new Graph(getAxes(invalidTypeAxis));
      invalidGraph.loadContent(new Line(input));
    }).toThrowError(errors.THROW_MSG_INVALID_FORMAT_TYPE);
  });
  it('throws error when type and values are a mismatch', () => {
    expect(() => {
      const input = getInput(valuesTimeSeries, false, false);
      const validGraph = new Graph(getAxes(utils.deepClone(axisDefault)));
      validGraph.loadContent(new Line(input));
    }).toThrowError(errors.THROW_MSG_INVALID_FORMAT_TYPE);
  });
  it('internal subsets gets created correctly for each data point', () => {
    const graph = graphDefault.loadContent(
      new Line(getInput(valuesDefault, false, false)),
    );
    const data = graph.content[0].dataTarget;
    expect(
      data.internalValuesSubset.every(
        (j) => j.onClick !== null
                    && j.x !== null
                    && j.y !== null
                    && j.label !== null
                    && j.shape
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
      new Line(getInput(valuesTimeSeries, false, false)),
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
      new Line(getInput(valuesDefault)),
    );
    const data = graph.content[0].dataTarget;
    expect(
      data.internalValuesSubset.every(
        (j) => j.color === constants.DEFAULT_COLOR,
      ),
    ).toBeTruthy();
  });
  it('defaults interpolation to linear when not provided', () => {
    const graph = graphDefault.loadContent(
      new Line(getInput(valuesDefault)),
    );
    const data = graph.content[0].dataTarget;
    expect(data.interpolationType).toBe(LINE_TYPE.LINEAR);
  });
  it('defaults shapes to circle when not provided', () => {
    const graph = graphDefault.loadContent(
      new Line(getInput(valuesDefault)),
    );
    const data = graph.content[0].dataTarget;
    expect(
      data.internalValuesSubset.every((j) => j.shape === SHAPES.CIRCLE),
    ).toBeTruthy();
  });
  it('defaults axis to Y axis when not provided', () => {
    const graph = graphDefault.loadContent(
      new Line(getInput(valuesDefault)),
    );
    const data = graph.content[0].dataTarget;
    expect(
      data.internalValuesSubset.every((j) => j.yAxis === constants.Y_AXIS),
    ).toBeTruthy();
  });
  describe('draws the graph', () => {
    let input = null;
    beforeEach(() => {
    });
    afterEach(() => {
      graphDefault.destroy();
    });
    it('adds content container for each line', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const lineContentContainer = fetchElementByClass(lineGraphContainer, styles.lineGraphContent);
      expect(lineContentContainer).not.toBeNull();
      expect(lineContentContainer.tagName).toBe('g');
      expect(lineContentContainer.getAttribute('aria-describedby')).toBe(input.key);
    });
    it('adds container for each data points sets for each line', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const secInput = utils.deepClone(input);
      secInput.key = 'uid_2';
      graphDefault.loadContent(new Line(secInput));
      const graphContent = document.body.querySelectorAll(`.${styles.lineGraphContent}`);
      expect(graphContent.length).toBe(2);
    });
    it('adds legend for each data points sets for each line', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const secInput = utils.deepClone(input);
      secInput.key = 'uid_2';
      graphDefault.loadContent(new Line(secInput));
      const legendItems = document.body.querySelectorAll(`.${styles.legendItem}`);
      expect(legendItems.length).toBe(2);
    });
    it('disables legend when disabled flag is set', () => {
      const graph = new Graph(getAxes(axisDefault));
      const data = utils.deepClone(valuesDefault);
      input = getInput(data);
      input.label.isDisabled = true;
      graph.loadContent(new Line(input));
      const legendItem = document.body.querySelector(`.${styles.legendItem}`);
      expect(legendItem.getAttribute('aria-disabled')).toBe('true');
    });
    it('disabled legend item is not tab-able', () => {
      const graph = new Graph(getAxes(axisDefault));
      const data = utils.deepClone(valuesDefault);
      input = getInput(data);
      input.label.isDisabled = true;
      graph.loadContent(new Line(input));
      const legendItem = document.body.querySelector(`.${styles.legendItemBtn}`);
      expect(legendItem.getAttribute('tabindex')).toBe('-1');
    });
    it('add line group for line', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const lineContentContainer = fetchElementByClass(lineGraphContainer, styles.lineGraphContent);
      const lineGroup = fetchElementByClass(lineContentContainer, styles.currentLinesGroup);
      expect(lineGroup).not.toBeNull();
      expect(lineGroup.tagName).toBe('g');
      expect(lineGroup.getAttribute('transform')).not.toBeNull();
    });
    it('adds line path as an SVG', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const lineContentContainer = fetchElementByClass(lineGraphContainer, styles.lineGraphContent);
      const lineGroup = fetchElementByClass(lineContentContainer, styles.currentLinesGroup);
      expect(lineGroup.firstChild.tagName).toBe('g');
      expect(lineGroup.firstChild.classList.contains(styles.line)).toBeTruthy();
    });
    it('adds line with correct color with default stroke-dasharray to 0', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const lineElement = fetchElementByClass(lineGraphContainer, styles.line);
      expect(lineElement.firstChild.tagName).toBe('path');
      expect(
        lineElement.firstChild.attributes.getNamedItem('style').value,
      ).toBe(`stroke: ${COLORS.GREEN}; stroke-dasharray: 0;`);
    });
    it('adds line with correct unique key', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const lineElement = fetchElementByClass(lineGraphContainer, styles.line);
      expect(lineElement.firstChild.attributes.getNamedItem('aria-describedby').value).toBe(input.key);
    });
    it('does not render data point if data point is null', () => {
      const graph = new Graph(getAxes(axisDefault));
      const data = utils.deepClone(valuesDefault);
      data[0].y = null;
      input = getInput(data);
      graph.loadContent(new Line(input));
      const pointsGroup = fetchElementByClass(lineGraphContainer, styles.currentPointsGroup);
      const selectedPoint = fetchElementByClass(pointsGroup, styles.dataPointSelection);
      expect(pointsGroup.children.length).toBe(valuesDefault.length - 1);
      expect(selectedPoint.getAttribute('aria-hidden')).toContain('true');
    });
    it('does not render data point if data point is undefiend', () => {
      const graph = new Graph(getAxes(axisDefault));
      const data = utils.deepClone(valuesDefault);
      data[0].y = undefined;
      input = getInput(data);
      graph.loadContent(new Line(input));
      const pointsGroup = fetchElementByClass(lineGraphContainer, styles.currentPointsGroup);
      const selectedPoint = fetchElementByClass(pointsGroup, styles.dataPointSelection);
      expect(pointsGroup.children.length).toBe(valuesDefault.length - 1);
      expect(selectedPoint.getAttribute('aria-hidden')).toContain('true');
    });
    it('does not render points if shapes needs to be hidden', () => {
      const hiddenShapeInput = getAxes(axisDefault);
      hiddenShapeInput.showShapes = false;
      const hiddenShapeGraph = new Graph(hiddenShapeInput);
      input = getInput(valuesDefault, false, false);
      hiddenShapeGraph.loadContent(new Line(input));
      expect(
        fetchElementByClass(lineGraphContainer, styles.currentPointsGroup),
      ).toBeNull();
    });
    it('does not update x axis range if allow calibration is disabled', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.axis.x.allowCalibration = false;
      graphConfig.axis.x.lowerLimit = 50;
      graphConfig.axis.x.upperLimit = 100;
      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new Line(input));

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
      graphInstance.loadContent(new Line(input));

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
      graphInstance.loadContent(new Line(input));

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
      graphInstance.loadContent(new Line(input));

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
      graphInstance.loadContent(new Line(input));

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
      graphInstance.loadContent(new Line(input));

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
      graphInstance.loadContent(new Line(input));

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
      graphInstance.loadContent(new Line(input));

      expect(graphInstance.config.axis.x.domain.lowerLimit.toISOString()).toEqual('2016-01-28T10:48:00.000Z');
      expect(graphInstance.config.axis.x.domain.upperLimit.toISOString()).toEqual('2016-06-09T13:12:00.000Z');
    });
    it('does not update y axis range if allow calibration is disabled', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.allowCalibration = false;
      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new Line(input));

      expect(graphInstance.config.axis.y.domain.upperLimit)
        .toEqual(graphConfig.axis.y.upperLimit);
      expect(graphInstance.config.axis.y.domain.lowerLimit)
        .toEqual(graphConfig.axis.y.lowerLimit);
    });
    it('update y axis range by default', () => {
      const graphConfig = getAxes(axisDefault);
      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new Line(input));

      expect(graphInstance.config.axis.y.domain.upperLimit)
        .not.toEqual(graphConfig.axis.y.upperLimit);
      expect(graphInstance.config.axis.y.domain.lowerLimit)
        .not.toEqual(graphConfig.axis.y.lowerLimit);
    });
    it('add points group for data points', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const pointsGroup = fetchElementByClass(
        lineGraphContainer,
        styles.currentPointsGroup,
      );
      expect(pointsGroup).not.toBeNull();
      expect(pointsGroup.tagName).toBe('g');
      expect(pointsGroup.getAttribute('transform')).not.toBeNull();
    });
    it('adds points for each data point', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));
      const pointsGroup = fetchElementByClass(lineGraphContainer, styles.currentPointsGroup);
      const points = pointsGroup.querySelectorAll(`.${styles.point}`);
      expect(points.length).toBe(valuesDefault.length);
    });
    it('points have correct color', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const pointsGroup = fetchElementByClass(lineGraphContainer, styles.currentPointsGroup);
      const points = fetchElementByClass(pointsGroup, styles.point);
      expect(points.attributes.getNamedItem('style').value).toBe(`fill: ${COLORS.GREEN};`);
    });
    it('points have correct shape', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const pointsGroup = fetchElementByClass(lineGraphContainer, styles.currentPointsGroup);
      const points = fetchElementByClass(pointsGroup, styles.point);
      expect(
        points.firstChild.firstChild.attributes.getNamedItem('d').value,
      ).toBe(SHAPES.RHOMBUS.path.d);
    });
    it('points have correct unique key assigned', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const pointsGroup = fetchElementByClass(lineGraphContainer, styles.currentPointsGroup);
      const points = fetchElementByClass(pointsGroup, styles.point);
      expect(points.getAttribute('aria-describedby')).toBe(input.key);
    });
    it('adds a selected data point for each point', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const pointsGroup = fetchElementByClass(lineGraphContainer, styles.currentPointsGroup);
      const selectedPoints = pointsGroup.querySelectorAll(`.${styles.dataPointSelection}`);
      expect(selectedPoints.length).toBe(valuesDefault.length);
    });
    it('selected data point is hidden by default', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const selectedPoints = fetchElementByClass(lineGraphContainer, styles.dataPointSelection);
      expect(selectedPoints.getAttribute('aria-hidden')).toBe('true');
    });
    it('selected data point has circle as shape', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const selectedPoints = fetchElementByClass(lineGraphContainer, styles.dataPointSelection);
      expect(selectedPoints.tagName).toBe('svg');
      expect(selectedPoints.firstChild.firstChild.getAttribute('d')).toBe(
        SHAPES.CIRCLE.path.d,
      );
    });
    it('selected data point has correct unique key assigned', () => {
      input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));

      const selectedPoints = fetchElementByClass(lineGraphContainer, styles.dataPointSelection);
      expect(selectedPoints.getAttribute('aria-describedby')).toBe(input.key);
    });
    it('does not render points if shapes are hidden per data set', () => {
      const hiddenShapeInput = getAxes(axisDefault);
      hiddenShapeInput.showShapes = true;
      const hiddenShapeGraph = new Graph(hiddenShapeInput);
      input = getInput(valuesDefault, false, false);
      input.showShapes = false;
      hiddenShapeGraph.loadContent(new Line(input));
      expect(fetchElementByClass(lineGraphContainer, styles.currentPointsGroup)).toBeNull();
    });
    describe('adds line with stroke-dasharray as provided by consumer with', () => {
      it('comma seperated values', () => {
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.style = {
          strokeDashArray: '2,2',
        };
        const line = new Line(input);
        graphDefault.loadContent(line);
        const lineElement = fetchElementByClass(lineGraphContainer, styles.line);
        expect(lineElement.firstChild.tagName).toBe('path');
        expect(lineElement.firstChild.attributes.getNamedItem('style').value)
          .toBe(`stroke: ${COLORS.GREEN}; stroke-dasharray: 2,2;`);
      });
      it('space seperated values', () => {
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.style = {
          strokeDashArray: '2 2',
        };
        const line = new Line(input);
        graphDefault.loadContent(line);
        const lineElement = fetchElementByClass(lineGraphContainer, styles.line);
        expect(lineElement.firstChild.tagName).toBe('path');
        expect(lineElement.firstChild.attributes.getNamedItem('style').value)
          .toBe(`stroke: ${COLORS.GREEN}; stroke-dasharray: 2 2;`);
      });
      it('just a single value', () => {
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.style = {
          strokeDashArray: '2',
        };
        const line = new Line(input);
        graphDefault.loadContent(line);
        const lineElement = fetchElementByClass(lineGraphContainer, styles.line);
        expect(lineElement.firstChild.tagName).toBe('path');
        expect(lineElement.firstChild.attributes.getNamedItem('style').value)
          .toBe(`stroke: ${COLORS.GREEN}; stroke-dasharray: 2;`);
      });
    });
    it('adds line with correct stroke-dasharray', () => {});
    describe('when clicked on a data point', () => {
      it('does not do anything if no onClick callback is provided', () => {
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.onClick = null;
        graphDefault.loadContent(new Line(input));
        const point = fetchElementByClass(lineGraphContainer, styles.point);
        triggerEvent(point, 'click', () => {
          expect(point.getAttribute('aria-disabled')).toBe('true');
        });
      });
      it('hides data point selection when parameter callback is called', () => {
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.onClick = (clearSelectionCallback) => {
          clearSelectionCallback();
        };
        graphDefault.loadContent(new Line(input));
        const point = fetchElementByClass(lineGraphContainer, styles.point);
        triggerEvent(point, 'click', () => {
          const selectionPoint = fetchElementByClass(lineGraphContainer, styles.dataPointSelection);
          expect(selectionPoint.getAttribute('aria-hidden')).toBe('true');
        });
      });
      it('calls onClick callback', () => {
        const dataPointClickHandlerSpy = sinon.spy();
        graphDefault = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault, false, false);
        input.onClick = dataPointClickHandlerSpy;
        graphDefault.loadContent(new Line(input));
        const point = fetchElementByClass(lineGraphContainer, styles.point);
        triggerEvent(point, 'click', () => {
          expect(dataPointClickHandlerSpy.calledOnce).toBeTruthy();
        });
      });
      it('calls onClick callback with parameters', () => {
        let args = {};
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
        graphDefault.loadContent(new Line(input));
        const point = lineGraphContainer.querySelectorAll(`.${styles.point}`)[1];
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
        input = getInput(valuesDefault, false, false);
        graphDefault.loadContent(new Line(input));

        const selectionPoint = fetchElementByClass(lineGraphContainer, styles.dataPointSelection);
        const point = fetchElementByClass(lineGraphContainer, styles.point);
        triggerEvent(point, 'click', () => {
          expect(selectionPoint.getAttribute('aria-hidden')).toBe('false');
        });
      });
      it('removes highlight when data point is clicked again', () => {
        input = getInput(valuesDefault, false, false);
        graphDefault.loadContent(new Line(input));

        const selectionPoint = fetchElementByClass(lineGraphContainer, styles.dataPointSelection);
        const point = fetchElementByClass(lineGraphContainer, styles.point);
        triggerEvent(point, 'click', () => {
          triggerEvent(point, 'click', () => {
            expect(selectionPoint.getAttribute('aria-hidden')).toBe('true');
          });
        });
      });
    });
    describe("when clicked on a data point's near surrounding area", () => {
      it('highlights the data point', () => {
        input = getInput(valuesDefault, false, false);
        graphDefault.loadContent(new Line(input));

        const selectionPoint = fetchElementByClass(lineGraphContainer, styles.dataPointSelection);
        triggerEvent(selectionPoint, 'click', () => {
          expect(selectionPoint.getAttribute('aria-hidden')).toBe('false');
        });
      });
      it('calls onClick callback with parameters', () => {
        let args = {};
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
        graphDefault.loadContent(new Line(input));
        const selectionPoint = lineGraphContainer.querySelectorAll(`.${styles.dataPointSelection}`)[1];
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
        input = getInput(valuesDefault, false, false);
        graphDefault.loadContent(new Line(input));

        const selectionPoint = fetchElementByClass(lineGraphContainer, styles.dataPointSelection);
        triggerEvent(selectionPoint, 'click', () => {
          triggerEvent(selectionPoint, 'click', () => {
            expect(selectionPoint.getAttribute('aria-hidden')).toBe('true');
          });
        });
      });
    });
    describe('When interpolation type is provided', () => {
      it('displays graph properly', () => {
        const graph = new Graph(getAxes(axisDefault));
        input = getInput(valuesDefault);
        input.type = LINE_TYPE.SPLINE;
        graph.loadContent(new Line(input));
        const data = graph.content[0].dataTarget;
        expect(data.interpolationType).toBe(LINE_TYPE.SPLINE);
      });
    });
    describe('When values are non-contiguous', () => {
      const axis = {
        x: {
          label: 'Some X Label',
          lowerLimit: 0,
          upperLimit: 100,
        },
        y: {
          label: 'Some Y Label',
          lowerLimit: 20,
          upperLimit: 200,
        },
        y2: {
          show: true,
          label: 'Some Y2 Label',
          lowerLimit: 20,
          upperLimit: 200,
        },
      };
      const values = [
        { x: 35, y: 40 },
        { x: 55, y: 50 },
        { x: 45, y: null },
        { x: 25, y: 100 },
        { x: 45, y: 150 },
      ];
      describe('In Y Axis', () => {
        it('displays graph properly', () => {
          const graph = new Graph(getAxes(axis));
          input = getInput(values, true, true, false);
          input.values = values;
          graph.loadContent(new Line(input));
          graph.resize();
          const lineGroup = lineGraphContainer.querySelectorAll(`.${styles.currentLinesGroup}`);
          expect(lineGroup.length).toBe(1);
          expect(lineGraphContainer.querySelectorAll(`.${styles.point}`).length).toEqual(values.length - 1);
          expect(graph.config.axis.y.domain.lowerLimit).toBe(11);
          expect(graph.config.axis.y.domain.upperLimit).toBe(209);
        });
        it('displays graph properly without domain padding', () => {
          const data = getAxes(axis);
          data.axis.y.padDomain = false;
          const graph = new Graph(data);
          input = getInput(values, true, true, false);
          input.values = values;
          graph.loadContent(new Line(input));
          graph.resize();
          const lineGroup = lineGraphContainer.querySelectorAll(`.${styles.currentLinesGroup}`);
          expect(lineGroup.length).toBe(1);
          expect(lineGraphContainer.querySelectorAll(`.${styles.point}`).length).toEqual(values.length - 1);
          expect(graph.config.axis.y.domain.lowerLimit).toBe(20);
          expect(graph.config.axis.y.domain.upperLimit).toBe(200);
        });
      });
      describe('In Y2 Axis', () => {
        it('displays graph properly', () => {
          const graph = new Graph(getAxes(axis));
          input = getInput(values, true, true, true);
          graph.loadContent(new Line(input));
          graph.resize();
          const lineGroup = lineGraphContainer.querySelectorAll(`.${styles.currentLinesGroup}`);
          expect(lineGroup.length).toBe(1);
          expect(lineGraphContainer.querySelectorAll(`.${styles.point}`).length).toEqual(values.length - 1);
          expect(graph.config.axis.y2.domain.lowerLimit).toBe(11);
          expect(graph.config.axis.y2.domain.upperLimit).toBe(209);
        });
        it('displays graph properly without domain padding', () => {
          const data = getAxes(axis);
          data.axis.y2.padDomain = false;
          const graph = new Graph(data);
          input = getInput(values, true, true, true);
          graph.loadContent(new Line(input));
          graph.resize();
          const lineGroup = lineGraphContainer.querySelectorAll(
                        `.${styles.currentLinesGroup}`,
          );
          expect(lineGroup.length).toBe(1);
          expect(lineGraphContainer.querySelectorAll(`.${styles.point}`).length).toEqual(values.length - 1);
          expect(graph.config.axis.y2.domain.lowerLimit).toBe(20);
          expect(graph.config.axis.y2.domain.upperLimit).toBe(200);
        });
      });
    });
  });
  describe('prepares to load legend item', () => {
    it('display the legend when empty array is provided as input', () => {
      graphDefault.loadContent(new Line(getInput([], false, true)));
      const legendContainer = fetchElementByClass(lineGraphContainer, styles.legend);
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(1);
      const legendItem = document.body.querySelector(`.${styles.legendItem}`);
      expect(legendItem.getAttribute('aria-disabled')).toBe('true');
      expect(legendItem.getAttribute('aria-current')).toBe('true');
    });
    it('does not load if legend is opted to be hidden', () => {
      graphDefault.destroy();
      const input = getAxes(axisDefault);
      input.showLegend = false;
      const noLegendGraph = new Graph(input);
      noLegendGraph.loadContent(new Line(getInput(valuesDefault)));
      const legendContainer = fetchElementByClass(lineGraphContainer, styles.legend);
      expect(legendContainer).toBeNull();
      noLegendGraph.destroy();
    });
    it('does not load if label property is null', () => {
      const input = getInput(valuesDefault);
      input.label = null;
      graphDefault.loadContent(new Line(input));
      const legendContainer = fetchElementByClass(lineGraphContainer, styles.legend);
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(0);
    });
    it('does not load if label property is empty', () => {
      const input = getInput(valuesDefault);
      input.label = {};
      graphDefault.loadContent(new Line(input));
      const legendContainer = fetchElementByClass(lineGraphContainer, styles.legend);
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(0);
    });
    it('does not load if label display value is not provided', () => {
      const input = getInput(valuesDefault);
      input.label.display = '';
      graphDefault.loadContent(new Line(input));
      const legendContainer = fetchElementByClass(lineGraphContainer, styles.legend);
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(0);
    });
    it('sanitizes the legend display', () => {
      const input = getInput(valuesDefault);
      input.label.display = '<HELLO DUMMY X LABEL>';
      graphDefault.loadContent(new Line(input));
      const legendContainer = fetchElementByClass(lineGraphContainer, styles.legend);
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(1);
    });
    it('loads item with a shape and text', () => {
      const input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));
      const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
      const legendItemBtn = fetchElementByClass(lineGraphContainer, styles.legendItemBtn);
      const iconSVG = legendItemBtn.children[0].firstChild;
      expect(legendItem).not.toBeNull();
      expect(legendItem.getAttribute('aria-current')).toBe('true');
      expect(legendItem.getAttribute('aria-disabled')).toBe('false');
      expect(legendItem.children[1].className).toBe(styles.legendItemText);
      expect(legendItem.children[1].tagName).toBe('LABEL');
      expect(legendItem.children[1].textContent).toBe(input.label.display);
      expect(legendItemBtn).not.toBeNull();
      expect(legendItemBtn.getAttribute('class')).toBe(styles.legendItemBtn);
      expect(iconSVG.tagName).toBe('svg');
      expect(iconSVG.classList.contains(styles.legendItemIcon)).toBeTruthy();
    });
    it('loads the correct shape', () => {
      const input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));
      const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
      const svgElements = legendItem.querySelectorAll('svg');
      const iconSVG = svgElements[0];
      const iconPath = legendItem.querySelector('path');
      expect(iconSVG).not.toBeNull();
      expect(iconSVG.classList).toContain(styles.legendItemIcon);
      expect(iconPath).not.toBeNull();
      expect(iconPath.getAttribute('d')).not.toBeNull();
      expect(iconPath.getAttribute('d')).toBe(SHAPES.RHOMBUS.path.d);
    });
    it('loads the correct color', () => {
      const input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));
      const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
      const svgElements = legendItem.querySelectorAll('svg');
      const iconSVG = svgElements[0];
      const iconPath = legendItem.querySelector('path');
      expect(iconSVG).not.toBeNull();
      expect(iconSVG.classList).toContain(styles.legendItemIcon);
      expect(iconSVG.getAttribute('style')).toBe(`fill: ${COLORS.GREEN};`);
      expect(iconPath).not.toBeNull();
      expect(iconPath.getAttribute('d')).not.toBeNull();
    });
    it('loads only line if user sets showLine to be true and showShape to be false', () => {
      const input = getInput(valuesDefault, false, false);
      input.legendOptions = {
        showShape: false,
        showLine: true,
      };
      graphDefault.loadContent(new Line(input));
      const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
      const svgElements = legendItem.querySelectorAll('svg');
      const lineSVG = svgElements[0];
      expect(svgElements.length).toBe(1);
      expect(lineSVG).not.toBeNull();
      expect(lineSVG.classList).toContain(styles.legendItemLine);
    });
    it('loads only shape if user sets showLine to be false and showShape to be true', () => {
      const input = getInput(valuesDefault, false, false);
      input.legendOptions = {
        showShape: true,
        showLine: false,
      };
      graphDefault.loadContent(new Line(input));
      const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
      const svgElements = legendItem.querySelectorAll('svg');
      const iconPath = legendItem.querySelector('path');
      const iconSVG = svgElements[0];
      expect(svgElements.length).toBe(1);
      expect(iconSVG).not.toBeNull();
      expect(iconSVG.classList).toContain(styles.legendItemIcon);
      expect(iconPath).not.toBeNull();
      expect(iconPath.getAttribute('d')).not.toBeNull();
    });
    describe('when showShapes is true', () => {
      it('loads shape and line if user sets showLine to be true and showShape to be true', () => {
        const input = getInput(valuesDefault, false, false);
        input.legendOptions = {
          showShape: true,
          showLine: true,
        };
        graphDefault.loadContent(new Line(input));
        const legendItem = fetchAllElementsByClass(
          lineGraphContainer,
          styles.legendItem,
        );
        const SVGElements = legendItem[0].querySelectorAll('svg');
        const iconPath = legendItem[0].querySelector('path');
        const iconSVG = SVGElements[0];
        expect(SVGElements.length).toBe(2);

        expect(iconSVG).not.toBeNull();
        expect(iconSVG.classList).toContain(styles.legendItemIconWithLine);
        expect(iconPath).not.toBeNull();
        expect(iconPath.getAttribute('d')).not.toBeNull();

        const lineSVG = SVGElements[1];
        expect(lineSVG).not.toBeNull();
        expect(lineSVG.classList).toContain(styles.legendItemLineWithIcon);
        expect(lineSVG.children[1].attributes.getNamedItem('style').value).toContain('stroke-dasharray: 0;');
      });
      it('loads line with legendOptions style, when legend options style is provided', () => {
        const input = getInput(valuesDefault, false, false);
        input.legendOptions = {
          showShape: true,
          showLine: true,
          style: {
            strokeDashArray: '2,2',
          },
        };
        graphDefault.loadContent(new Line(input));
        const legendItem = fetchAllElementsByClass(lineGraphContainer, styles.legendItem);
        const SVGElements = legendItem[0].querySelectorAll('svg');
        const iconPath = legendItem[0].querySelector('path');
        const iconSVG = SVGElements[0];
        expect(SVGElements.length).toBe(2);

        expect(iconSVG).not.toBeNull();
        expect(iconSVG.classList).toContain(styles.legendItemIconWithLine);
        expect(iconPath).not.toBeNull();
        expect(iconPath.getAttribute('d')).not.toBeNull();

        const lineSVG = SVGElements[1];
        expect(lineSVG).not.toBeNull();
        expect(lineSVG.classList).toContain(styles.legendItemLineWithIcon);
        expect(lineSVG.children[1].attributes.getNamedItem('style').value).toContain('stroke-dasharray: 2,2;');
      });
      it('loads correct shape on axis', () => {
        const input = getInput(valuesDefault, false, false);
        input.showShapes = true;
        graphDefault.loadContent(new Line(input));
        const axisLabelShapeItem = fetchElementByClass(lineGraphContainer, styles.axisLabelYShapeContainer);
        expect(axisLabelShapeItem.querySelector('path').getAttribute('d')).toBe(SHAPES.RHOMBUS.path.d);
      });
    });
    describe('when showShapes is false', () => {
      it('loads line as default when no legend options are provided', () => {
        const input = getInput(valuesDefault, false, false);
        input.showShapes = false;
        graphDefault.loadContent(new Line(input));
        const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
        const svgElements = legendItem.querySelectorAll('svg');
        const lineSVG = svgElements[0];
        expect(lineSVG).not.toBeNull();
        expect(lineSVG.classList).toContain(styles.legendItemLine);
        expect(lineSVG.children[1].attributes.getNamedItem('style').value).toContain('stroke-dasharray: 0;');
      });
      it('loads line as default even though showShape in legend options set to be true ', () => {
        const input = getInput(valuesDefault, false, false);
        input.legendOptions = {
          showShape: true,
          showLine: true,
        };
        input.showShapes = false;
        graphDefault.loadContent(new Line(input));
        const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
        const svgElements = legendItem.querySelectorAll('svg');
        const lineSVG = svgElements[0];
        expect(lineSVG).not.toBeNull();
        expect(lineSVG.classList).toContain(styles.legendItemLine);
        expect(lineSVG.classList).not.toContain(styles.legendItemIcon);
        expect(lineSVG.children[1].attributes.getNamedItem('style').value).toContain('stroke-dasharray: 0;');
      });
      it('loads nothing when showShape and showLine in legend options set to be false ', () => {
        const input = getInput(valuesDefault, false, false);
        input.legendOptions = {
          showShape: false,
          showLine: false,
        };
        input.showShapes = false;
        graphDefault.loadContent(new Line(input));
        const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
        const svgElements = legendItem.querySelectorAll('svg');
        expect(svgElements[0]).not.toBeDefined();
      });
      it('loads line with legendOptions style, when legend options style is provided', () => {
        const input = getInput(valuesDefault, false, false);
        input.showShapes = false;
        input.legendOptions = {
          showShape: true,
          showLine: true,
          style: {
            strokeDashArray: '2,2',
          },
        };
        graphDefault.loadContent(new Line(input));
        const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
        const svgElements = legendItem.querySelectorAll('svg');
        const lineSVG = svgElements[0];
        expect(lineSVG).not.toBeNull();
        expect(lineSVG.classList).toContain(styles.legendItemLine);
        expect(lineSVG.children[1].attributes.getNamedItem('style').value).toContain('stroke-dasharray: 2,2;');
      });
      it('loads line with line style , when legend options style is not provided', () => {
        const input = getInput(valuesDefault, false, false);
        input.showShapes = false;
        input.style = {
          strokeDashArray: '2,2',
        };
        input.legendOptions = {
          showShape: true,
          showLine: true,
        };
        graphDefault.loadContent(new Line(input)); const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
        const svgElements = legendItem.querySelectorAll('svg');
        const lineSVG = svgElements[0];
        expect(lineSVG).not.toBeNull();
        expect(lineSVG.classList).toContain(styles.legendItemLine);
        expect(lineSVG.children[1].attributes.getNamedItem('style').value).toContain('stroke-dasharray: 2,2;');
      });
      it('loads correct shape on axis', () => {
        const input = getInput(valuesDefault, false, false);
        input.showShapes = false;
        graphDefault.loadContent(new Line(input));
        const axisLabelShapeItem = fetchElementByClass(lineGraphContainer, styles.axisLabelYShapeContainer);
        expect(axisLabelShapeItem.querySelector('path').getAttribute('d')).toBe(LINE.path.d);
      });
      it('loads correct shape on axis when stroke dash array is present', () => {
        const input = getInput(valuesDefault, false, false);
        input.style = {
          strokeDashArray: '2,2',
        };
        input.showShapes = false;
        graphDefault.loadContent(new Line(input));
        const axisLabelShapeItem = fetchAllElementsByClass(lineGraphContainer, styles.axisLabelYShapeContainer);
        expect(axisLabelShapeItem[0].querySelectorAll('path')[0].getAttribute('d')).toBe(LINE_DASHED.path[0].d);
        expect(axisLabelShapeItem[0].querySelectorAll('path')[1].getAttribute('d')).toBe(LINE_DASHED.path[1].d);
        expect(axisLabelShapeItem[0].querySelectorAll('path')[2].getAttribute('d')).toBe(LINE_DASHED.path[2].d);
      });
    });
    it('loads the line with provided stroke dashArray', () => {
      const input = getInput(valuesDefault, false, false);
      input.legendOptions = {
        showShape: false,
        showLine: true,
        style: {
          strokeDashArray: '2,2',
        },
      };
      graphDefault.loadContent(new Line(input));
      const legendItem = fetchElementByClass(
        lineGraphContainer,
        styles.legendItem,
      );
      const svgElements = legendItem.querySelectorAll('svg');
      const lineSVG = svgElements[0];
      expect(lineSVG).not.toBeNull();
      expect(lineSVG.classList).toContain(styles.legendItemLine);
      expect(lineSVG.children[1].attributes.getNamedItem('style').value).toContain('stroke-dasharray: 2,2;');
    });
    it('attaches click event handlers correctly', () => {
      const input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Line(input));
      const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
      triggerEvent(legendItem, 'click', () => {
        expect(legendItem.getAttribute('aria-current')).toBe('false');
      });
    });
    it('on click hides the line and points', () => {
      jest.spyOn(window, 'requestAnimationFrame');
      const input = getInput(valuesDefault, false, false);
      const line = new Line(input);
      graphDefault.loadContent(line);
      triggerEvent(
        fetchElementByClass(lineGraphContainer, styles.legendItem),
        'click',
        () => {
          expect(window.requestAnimationFrame).toHaveBeenCalledTimes(1);
          expect(fetchElementByClass(lineGraphContainer, styles.point).getAttribute('aria-hidden')).toBe('true');
          expect(fetchElementByClass(lineGraphContainer, styles.dataPointSelection).getAttribute('aria-hidden')).toBe('true');
          expect(fetchElementByClass(lineGraphContainer, styles.line).firstChild.getAttribute('aria-hidden')).toBe('true');
        },
      );
    });
    it('on click, removes the first line but keeps the rest', () => {
      const inputPrimary = getInput(valuesDefault, false, false);
      const inputSecondary = {
        key: 'uid_2',
        label: {
          display: 'Data Label B',
        },
        values: valuesDefault,
      };
      const primaryLine = new Line(inputPrimary);
      const secondaryLine = new Line(inputSecondary);
      graphDefault.loadContent(primaryLine);
      const graph = graphDefault.loadContent(secondaryLine);
      triggerEvent(
        fetchElementByClass(lineGraphContainer, styles.legendItem),
        'click',
        () => {
          const primaryLineElement = lineGraphContainer.querySelector(`.${styles.lineGraphContent}[aria-describedby="${inputPrimary.key}"]`);
          const secondaryLineElement = lineGraphContainer.querySelector(`.${styles.lineGraphContent}[aria-describedby="${inputSecondary.key}"]`);
          expect(graph.config.shownTargets.length).toBe(1);
          expect(fetchElementByClass(primaryLineElement, styles.point).getAttribute('aria-hidden')).toBe('true');
          expect(fetchElementByClass(primaryLineElement, styles.dataPointSelection).getAttribute('aria-hidden')).toBe('true');
          expect(fetchElementByClass(primaryLineElement, styles.line).firstChild.getAttribute('aria-hidden')).toBe('true');
          expect(fetchElementByClass(secondaryLineElement, styles.point).getAttribute('aria-hidden')).toBe('false');
          expect(fetchElementByClass(secondaryLineElement, styles.dataPointSelection).getAttribute('aria-hidden')).toBe('true');
          expect(fetchElementByClass(secondaryLineElement, styles.line).firstChild.getAttribute('aria-hidden')).toBe('false');
        },
      );
    });
    it('on clicking twice toggles the line and points back to visible', () => {
      jest.spyOn(window, 'requestAnimationFrame');
      const input = getInput(valuesDefault, false, false);
      const line = new Line(input);
      const graph = graphDefault.loadContent(line);
      const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
      triggerEvent(legendItem, 'click', () => {
        line.redraw(graph);
        triggerEvent(legendItem, 'click', () => {
          line.redraw(graph);
          expect(window.requestAnimationFrame).toHaveBeenCalledTimes(2);
          expect(fetchElementByClass(lineGraphContainer, styles.point).getAttribute('aria-hidden')).toBe('false');
          expect(fetchElementByClass(lineGraphContainer, styles.dataPointSelection).getAttribute('aria-hidden')).toBe('true');
          expect(fetchElementByClass(lineGraphContainer, styles.line).firstChild.getAttribute('aria-hidden')).toBe('false');
        });
      });
    });
    it('shown targets are removed from Graph', () => {
      const input = getInput(valuesDefault, false, false);
      const graph = graphDefault.loadContent(new Line(input));
      triggerEvent(
        fetchElementByClass(lineGraphContainer, styles.legendItem),
        'click',
        () => {
          expect(graph.config.shownTargets.length).toBe(0);
        },
      );
    });
    it('shown targets are updated back when toggled', () => {
      const input = getInput(valuesDefault, false, false);
      const graph = graphDefault.loadContent(new Line(input));
      const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
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
      graphDefault.loadContent(new Line(inputPrimary));
      graphDefault.loadContent(new Line(inputSecondary));
      const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
      triggerEvent(legendItem, 'mouseenter', () => {
        expect(document.querySelector(`path[aria-describedby="${inputPrimary.key}"]`).classList.contains(styles.highlight)).toBeTruthy();
        expect(document.querySelector(`.${styles.point}[aria-describedby="${inputPrimary.key}"]`).classList.contains(styles.highlight)).toBeTruthy();
        expect(document.querySelector(`path[aria-describedby="${inputSecondary.key}"]`).classList.contains(styles.blur)).toBeTruthy();
        expect(document.querySelector(`.${styles.point}[aria-describedby="${inputSecondary.key}"]`).classList.contains(styles.blur)).toBeTruthy();
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
      graphDefault.loadContent(new Line(inputPrimary));
      graphDefault.loadContent(new Line(inputSecondary));
      const legendItem = fetchElementByClass(lineGraphContainer, styles.legendItem);
      triggerEvent(legendItem, 'mouseleave', () => {
        expect(document.querySelector(`path[aria-describedby="${inputPrimary.key}"]`).classList.contains(styles.highlight)).toBeFalsy();
        expect(document.querySelector(`.${styles.point}[aria-describedby="${inputPrimary.key}"]`).classList.contains(styles.highlight)).toBeFalsy();
        expect(document.querySelector(`path[aria-describedby="${inputSecondary.key}"]`).classList.contains(styles.blur)).toBeFalsy();
        expect(document.querySelector(`.${styles.point}[aria-describedby="${inputSecondary.key}"]`).classList.contains(styles.blur)).toBeFalsy();
      });
    });
    describe('when the legend has no data', () => {
      it('should hide the legend if showElement is false', () => {
        const input = getInput([], false, false);
        input.legendOptions = {
          showElement: false,
        };
        graphDefault.loadContent(new Line(input));
        const legendContainer = fetchElementByClass(lineGraphContainer, styles.legendItem);
        expect(legendContainer).not.toBeNull();
        expect(legendContainer.tagName).toBe('LI');
        const legendItem = document.body.querySelector(`.${styles.legendItem}`);
        expect(legendItem.getAttribute('style')).toBe('display: none; padding: 4px 8px;');
      });
      it('should show the legend if showElement is true', () => {
        const input = getInput([], false, false);
        input.legendOptions = {
          showElement: true,
        };
        graphDefault.loadContent(new Line(input));
        const legendContainer = fetchElementByClass(lineGraphContainer, styles.legendItem);
        const legendItems = legendContainer.children;
        expect(legendContainer).not.toBeNull();
        expect(legendContainer.tagName).toBe('LI');
        expect(legendItems.length).toBe(2);
        const legendItem = document.body.querySelector(`.${styles.legendItem}`);
        expect(legendItem.getAttribute('aria-disabled')).toBe('true');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
      });
    });
    describe('when the legend has data', () => {
      it('should show the legend if showElement is false', () => {
        const input = getInput(valuesDefault, false, false);
        input.legendOptions = {
          showElement: true,
        };
        graphDefault.loadContent(new Line(input));
        const legendContainer = fetchElementByClass(lineGraphContainer, styles.legendItem);
        const legendItems = legendContainer.children;
        expect(legendContainer).not.toBeNull();
        expect(legendContainer.tagName).toBe('LI');
        expect(legendItems.length).toBe(2);
        const legendItem = document.body.querySelector(`.${styles.legendItem}`);
        expect(legendItem.getAttribute('aria-disabled')).toBe('false');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
      });
      it('should show the legend if showElement is true', () => {
        const input = getInput(valuesDefault, false, false);
        input.legendOptions = {
          showElement: true,
        };
        graphDefault.loadContent(new Line(input));
        const legendContainer = fetchElementByClass(lineGraphContainer, styles.legend);
        const legendItems = legendContainer.children;
        expect(legendContainer).not.toBeNull();
        expect(legendContainer.tagName).toBe('UL');
        expect(legendItems.length).toBe(1);
        const legendItem = document.body.querySelector(`.${styles.legendItem}`);
        expect(legendItem.getAttribute('aria-disabled')).toBe('false');
        expect(legendItem.getAttribute('aria-current')).toBe('true');
      });
    });
  });
  describe('Preparing to load label shape', () => {
    let graph;
    beforeEach(() => {
      graphDefault.destroy();
      graph = new Graph(getAxes(axisDefault));
      const linePrimary = getInput(valuesDefault, true, true, true);
      const lineSecondary = getInput(valuesDefault, true, true, false);
      lineSecondary.key = 'uid_2';
      graph.loadContent(new Line(linePrimary));
      graph.loadContent(new Line(lineSecondary));
    });
    it('does not load shape if Y2 axis is not loaded', () => {
      graphDefault.destroy();
      const axes = utils.deepClone(getAxes(axisDefault));
      axes.axis.y2.show = false;
      graph = new Graph(axes);
      const input = getInput(valuesDefault, true, true, false);
      graph.loadContent(new Line(input));
      expect(graph.axesLabelShapeGroup[constants.Y_AXIS]).toBeUndefined();
      expect(graph.axesLabelShapeGroup[constants.Y2_AXIS]).toBeUndefined();
    });
    it('loads shape in Y Axis', () => {
      const labelShapeContainer = fetchElementByClass(lineGraphContainer, styles.axisLabelYShapeContainer);
      const svgPath = labelShapeContainer.children[0];
      expect(graph.axesLabelShapeGroup[constants.Y_AXIS]).not.toBeUndefined();
      expect(labelShapeContainer.children.length).toBe(1);
      expect(svgPath.tagName).toBe('svg');
      expect(svgPath.getAttribute('x')).toBe('0');
      expect(svgPath.getAttribute('aria-describedby')).toBe('uid_2');
    });
    it('loads shape for each data set in Y Axis', () => {
      const lineTertiary = getInput(valuesDefault, true, true, false);
      lineTertiary.key = 'uid_3';
      graph.loadContent(new Line(lineTertiary));
      const labelShapeContainer = fetchElementByClass(lineGraphContainer, styles.axisLabelYShapeContainer);
      const svgPath = labelShapeContainer.children[1];
      expect(labelShapeContainer.children.length).toBe(2);
      expect(svgPath.tagName).toBe('svg');
      expect(svgPath.getAttribute('x')).toBe('20');
      expect(svgPath.getAttribute('aria-describedby')).toBe('uid_3');
    });
    it('loads shape in Y2 Axis', () => {
      const labelShapeContainer = fetchElementByClass(
        lineGraphContainer,
        styles.axisLabelY2ShapeContainer,
      );
      const svgPath = labelShapeContainer.children[0];
      expect(graph.axesLabelShapeGroup[constants.Y2_AXIS]).not.toBeUndefined();
      expect(labelShapeContainer.children.length).toBe(1);
      expect(svgPath.tagName).toBe('svg');
      expect(svgPath.getAttribute('x')).toBe('0');
      expect(svgPath.getAttribute('aria-describedby')).toBe('uid_1');
    });
    it('loads shape for each data set in Y2 Axis', () => {
      const lineTertiary = getInput(valuesDefault, true, true, true);
      lineTertiary.key = 'uid_4';
      graph.loadContent(new Line(lineTertiary));
      const labelShapeContainer = fetchElementByClass(
        lineGraphContainer,
        styles.axisLabelY2ShapeContainer,
      );
      const svgPath = labelShapeContainer.children[1];
      expect(labelShapeContainer.children.length).toBe(2);
      expect(svgPath.tagName).toBe('svg');
      expect(svgPath.getAttribute('x')).toBe('20');
      expect(svgPath.getAttribute('aria-describedby')).toBe('uid_4');
    });
  });
  describe('When legend item is clicked', () => {
    it('preserves the DOM order', () => {
      graphDefault.destroy();
      const graph = new Graph(getAxes(axisDefault));
      const linePrimary = getInput(valuesDefault, true, true, true);
      const lineSecondary = getInput(valuesDefault, true, true, false);
      linePrimary.key = 'uid_1';
      lineSecondary.key = 'uid_2';
      graph.loadContent(new Line(linePrimary));
      graph.loadContent(new Line(lineSecondary));
      const legendItem = document.querySelector(`.${styles.legendItem}[aria-describedby="${linePrimary.key}"]`);
      expect(graph.config.shownTargets).toEqual(['uid_1', 'uid_2']);
      triggerEvent(legendItem, 'click');
      triggerEvent(legendItem, 'click');
      expect(graph.config.shownTargets).toEqual(['uid_2', 'uid_1']);
      expect(document.querySelector(`.${styles.lineGraphContent}`).getAttribute('aria-describedby')).toEqual(linePrimary.key);
    });
  });
});
