'use strict';

import Carbon from '../../../../src/js/carbon';
import Bar from '../../../../src/js/controls/Bar/Bar';
import Graph from '../../../../src/js/controls/Graph/Graph';
import constants, { COLORS, SHAPES } from '../../../../src/js/helpers/constants';
import styles from '../../../../src/js/helpers/styles';
import utils from '../../../../src/js/helpers/utils';
import { toNumber, triggerEvent } from '../../helpers/commonHelpers';
import {
  axisDefault,
  axisTimeSeries,
  fetchAllElementsByClass,
  fetchElementByClass,
  getAxes,
  getInput,
  valuesDefault,
  valuesTimeSeries,
} from './helpers';
import errors from '../../../../src/js/helpers/errors';

describe('Bar - Load Lifecycle', () => {
  let barGraphContainer;

  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    barGraphContainer = document.createElement('div');
    barGraphContainer.id = 'testBar_carbon';
    barGraphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    document.body.appendChild(barGraphContainer);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('Initialization', () => {
    let graphDefault = null;
    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('returns the graph instance', () => {
      const loadedBar = new Bar(getInput(valuesDefault, false, false));
      loadedBar.load(graphDefault);
      expect(loadedBar).toBeInstanceOf(Bar);
    });
    it('throws an error when null value is passed as y', () => {
      let input = null;
      expect(() => {
        const data = utils.deepClone(valuesDefault);
        data[0].y = null;
        input = getInput(data);
        graphDefault.loadContent(new Bar(input));
      }).toThrowError(errors.THROW_MSG_INVALID_DATA);
    });
    it('throws an error when undefined value is passed as y', () => {
      let input = null;
      expect(() => {
        const data = utils.deepClone(valuesDefault);
        data[0].y = undefined;
        input = getInput(data);
        graphDefault.loadContent(new Bar(input));
      }).toThrowError(errors.THROW_MSG_INVALID_DATA);
    });
    it('correctly creates internal subsets for each data point', () => {
      const graph = graphDefault.loadContent(
        new Bar(getInput(valuesDefault, false, false)),
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
    it('successfully creates internal subsets for time series', () => {
      const graphTimeSeries = new Graph(getAxes(axisTimeSeries));
      const graph = graphTimeSeries.loadContent(
        new Bar(getInput(valuesTimeSeries, false, false)),
      );
      const data = graph.content[0].dataTarget;
      expect(
        data.internalValuesSubset.every(
          (j) => typeof j.x === 'object' && j.x instanceof Date,
        ),
      ).toBeTruthy();
    });
    it('defaults color to blue when not provided', () => {
      const graph = graphDefault.loadContent(
        new Bar(getInput(valuesDefault)),
      );
      const data = graph.content[0].dataTarget;
      expect(
        data.internalValuesSubset.every((j) => j.color === COLORS.BLUE),
      ).toBeTruthy();
    });
    it('defaults axis to Y axis when not provided', () => {
      const graph = graphDefault.loadContent(
        new Bar(getInput(valuesDefault)),
      );
      const data = graph.content[0].dataTarget;
      expect(
        data.internalValuesSubset.every((j) => j.yAxis === constants.Y_AXIS),
      ).toBeTruthy();
    });
    it('defaults bar content cascade group to key value if no group is provided', () => {
      const input = getInput(valuesDefault);
      const graph = graphDefault.loadContent(new Bar(input));
      const data = graph.content[0].dataTarget;
      expect(data.group).toEqual(input.key);
    });
    it('sets axis info row group to respective bar group', () => {
      const data = utils.deepClone(getInput(valuesDefault, false, false));
      data.axisInfoRow = [
        {
          axis: 'x',
          x: 1,
          value: {
            onClick: () => {},
            characterCount: 9,
            color: Carbon.helpers.COLORS.ORANGE,
            shape: {},
            label: {
              display: '51',
              secondaryDisplay: 'ICU',
            },
          },
        },
      ];
      const bar = new Bar(data);
      const graph = graphDefault.loadContent(bar);
      expect(graph.content[0].dataTarget.axisInfoRow[0].group).toEqual(
        graph.content[0].dataTarget.group,
      );
    });

    //  TODO: fix failing test
    it.skip('adds axis info row label height to bottom padding when axis info row is used', () => {
      const initialBottomPadding = graphDefault.config.padding.bottom;
      const initialAxisInfoRowLabelHeight = graphDefault.config.axisInfoRowLabelHeight;
      const data = utils.deepClone(getInput(valuesDefault, false, false));
      data.axisInfoRow = [
        {
          axis: 'x',
          x: 1,
          value: {
            onClick: () => {},
            characterCount: 9,
            color: Carbon.helpers.COLORS.ORANGE,
            shape: {},
            label: {
              display: '51',
              secondaryDisplay: 'ICU',
            },
          },
        },
      ];
      const bar = new Bar(data);
      const graph = graphDefault.loadContent(bar);
      const finalBottomPadding = graph.config.padding.bottom;
      const finalAxisInfoRowLabelHeight = graph.config.axisInfoRowLabelHeight;

      expect(initialBottomPadding).toEqual(constants.PADDING.bottom);
      expect(initialAxisInfoRowLabelHeight).toEqual(0);
      expect(finalBottomPadding).toBeGreaterThan(initialBottomPadding);
      expect(finalAxisInfoRowLabelHeight).not.toEqual(0);
      expect(finalBottomPadding).toEqual(initialBottomPadding + finalAxisInfoRowLabelHeight);
    });
  });

  describe('draws the graph', () => {
    let graphDefault = null;
    let input = null;

    beforeEach(() => {
      input = getInput(valuesDefault, false, false);
      graphDefault = new Graph(getAxes(axisDefault));
      graphDefault.loadContent(new Bar(input));
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('adds content container for bars', () => {
      const barContentContainer = fetchElementByClass(
        barGraphContainer,
        styles.barGraphContent,
      );
      expect(barContentContainer).not.toBeNull();
      expect(barContentContainer.tagName).toBe('g');
      expect(barContentContainer.getAttribute('aria-describedby')).toBe(
        input.key,
      );
    });
    it('adds legend for each bar content', () => {
      const input2 = utils.deepClone(input);
      input2.key = 'uid_2';

      graphDefault.loadContent(new Bar(input2));

      const legendItems = document.body.querySelectorAll(`.${styles.legendItem}`);
      expect(legendItems.length).toBe(2);
    });
    it('disables legend when disabled flag is set', () => {
      graphDefault.destroy();
      graphDefault = new Graph(getAxes(axisTimeSeries));

      input = getInput(valuesTimeSeries, false, false);
      input.label.isDisabled = true;

      graphDefault.loadContent(new Bar(input));

      const legendItem = document.body.querySelector(`.${styles.legendItem}`);
      expect(legendItem.getAttribute('aria-disabled')).toBe('true');
    });
    it('adds bar group for bar content', () => {
      const barContentContainer = fetchElementByClass(barGraphContainer, styles.barGraphContent);
      const barGroup = fetchElementByClass(barContentContainer, styles.currentBarsGroup);
      expect(barGroup).not.toBeNull();
      expect(barGroup.tagName).toBe('g');
      expect(barGroup.getAttribute('transform')).not.toBeNull();
    });
    it('adds bar as an SVG', () => {
      const barContentContainer = fetchElementByClass(
        barGraphContainer,
        styles.barGraphContent,
      );
      const barGroup = fetchElementByClass(
        barContentContainer,
        styles.currentBarsGroup,
      );
      expect(barGroup.firstChild.tagName).toBe('g');
      expect(
        barGroup.firstChild.classList.contains(styles.bar),
      ).toBeTruthy();
    });
    it('adds bars with correct color', () => {
      const barElement = fetchElementByClass(
        barGraphContainer,
        styles.bar,
      );
      expect(barElement.firstChild.tagName).toBe('rect');
      expect(
        barElement.firstChild.attributes.getNamedItem('style').value,
      ).toBe(`fill: ${COLORS.GREEN}; stroke: ${COLORS.GREEN};`);
    });
    it('adds bar content with correct unique key', () => {
      const barElement = fetchElementByClass(
        barGraphContainer,
        styles.barGraphContent,
      );
      expect(
        barElement.attributes.getNamedItem('aria-describedby').value,
      ).toBe(input.key);
    });
    it('creates selection bars', () => {
      const barElements = fetchAllElementsByClass(
        barGraphContainer,
        styles.taskBarSelection,
      );
      expect(barElements.length).toBe(5);
    });
    it('hides selection bars by default', () => {
      const barElements = fetchAllElementsByClass(
        barGraphContainer,
        styles.taskBarSelection,
      );
      expect(
        barElements[0].attributes.getNamedItem('aria-hidden').value,
      ).toBe('true');
    });
    it('selected data point has rect as shape', () => {
      const selectedPoints = fetchElementByClass(
        barGraphContainer,
        styles.taskBarSelection,
      );
      expect(selectedPoints.tagName).toBe('rect');
    });
    it('creates selection bars for timeline graph', () => {
      graphDefault.destroy();
      graphDefault = new Graph(getAxes(axisTimeSeries));
      input = getInput(valuesTimeSeries, false, false);
      graphDefault.loadContent(new Bar(input));
      const selectionPoints = fetchAllElementsByClass(
        barGraphContainer,
        styles.taskBarSelection,
      );
      expect(selectionPoints.length).toEqual(5);
    });

    it('does not update x axis range if allow calibration is disabled', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.axis.x.allowCalibration = false;
      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new Bar(input));

      expect(graphInstance.config.axis.x.domain.upperLimit)
        .toEqual(graphConfig.axis.x.upperLimit);
      expect(graphInstance.config.axis.x.domain.lowerLimit)
        .toEqual(graphConfig.axis.x.lowerLimit);
    });
    it('does not update x axis range by default if allowCalibration is undefined', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.axis.x.allowCalibration = undefined;
      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new Bar(input));

      expect(graphInstance.config.axis.x.domain.upperLimit)
        .toEqual(graphConfig.axis.x.upperLimit);
      expect(graphInstance.config.axis.x.domain.lowerLimit)
        .toEqual(graphConfig.axis.x.lowerLimit);
    });
    it('does not update x axis range if allowCalibration is true and datapoints are within limits', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.axis.x.allowCalibration = true;
      graphConfig.axis.x.lowerLimit = 0;
      graphConfig.axis.x.upperLimit = 6;

      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new Bar(input));

      expect(graphInstance.config.axis.x.domain.lowerLimit).toEqual(0);
      expect(graphInstance.config.axis.x.domain.upperLimit).toEqual(6);
    });
    it('updates x axis range if allowCalibration is true and datapoints exceed or are equal to limits', () => {
      const graphConfig = getAxes(axisDefault);
      graphConfig.axis.x.allowCalibration = true;
      graphConfig.axis.x.lowerLimit = 2;
      graphConfig.axis.x.upperLimit = 2.5;

      const graphInstance = new Graph(graphConfig);
      input = getInput(valuesDefault, false, false);
      graphInstance.loadContent(new Bar(input));

      expect(graphInstance.config.axis.x.domain.lowerLimit).toEqual(0.9);
      expect(graphInstance.config.axis.x.domain.upperLimit).toEqual(3.1);
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
      graphInstance.loadContent(new Bar(input));

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
      graphInstance.loadContent(new Bar(input));

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
      graphInstance.loadContent(new Bar(input));

      expect(graphInstance.config.axis.x.domain.lowerLimit.toISOString()).toEqual('2016-01-28T10:48:00.000Z');
      expect(graphInstance.config.axis.x.domain.upperLimit.toISOString()).toEqual('2016-06-09T13:12:00.000Z');
    });
  });
  describe('selection bar translates to 0 x-axis range', () => {
    it('when graph has no bar contents', () => {
      const graphDefault = new Graph(getAxes(axisDefault));
      const input = getInput(valuesDefault, false, false);
      const bar = new Bar(input);
      graphDefault.loadContent(bar);
      bar.redraw(graphDefault);
      graphDefault.unloadContent(bar);
      const selectionPoint = fetchElementByClass(
        barGraphContainer,
        styles.taskBarSelection,
      );
      expect(toNumber(selectionPoint.getAttribute('x'))).toEqual(0);
    });
  });
  describe('selection bar has rect attributes correctly set', () => {
    let graphDefault;
    let input;
    afterEach(() => {
      graphDefault.destroy();
    });
    it('correctly sets attributes for simple bar', () => {
      graphDefault = new Graph(getAxes(axisDefault));

      input = getInput(valuesDefault, false, false);
      input.onClick = (clearSelectionCallback) => { clearSelectionCallback(); };

      const bar = new Bar(input);
      graphDefault.loadContent(bar);
      bar.redraw(graphDefault);
      const selectionPoint = fetchElementByClass(barGraphContainer, styles.taskBarSelection);
      const point = fetchElementByClass(barGraphContainer, styles.taskBar);
      triggerEvent(point, 'click', () => {
        expect(toNumber(selectionPoint.getAttribute('x')))
          .toBeCloserTo(toNumber(point.getAttribute('x')) - 5);
        expect(toNumber(selectionPoint.getAttribute('y')))
          .toBeCloserTo(toNumber(point.getAttribute('y')) - 5);
        expect(toNumber(selectionPoint.getAttribute('height')))
          .toBeCloserTo(toNumber(point.getAttribute('height')) + 10);
        expect(toNumber(selectionPoint.getAttribute('width')))
          .toBeCloserTo(toNumber(point.getAttribute('width')) + 10);
      });
    });
    it('correctly sets attributes for grouped bar', () => {
      graphDefault = new Graph(getAxes(axisDefault));
      input = getInput(valuesDefault, false, false);
      input.onClick = (clearSelectionCallback) => {
        clearSelectionCallback();
      };
      const bar = new Bar(input);
      graphDefault.loadContent(bar);
      const input2 = utils.deepClone(
        getInput(valuesDefault, false, false),
      );
      input2.key = 'uid_2';
      input2.onClick = (clearSelectionCallback) => {
        clearSelectionCallback();
      };
      const bar2 = new Bar(input2);
      graphDefault.loadContent(bar2);
      bar.redraw(graphDefault);
      bar2.redraw(graphDefault);
      const selectionPoint = fetchElementByClass(
        barGraphContainer,
        styles.taskBarSelection,
      );
      const point = fetchElementByClass(
        barGraphContainer,
        styles.taskBar,
      );
      const points = fetchAllElementsByClass(
        barGraphContainer,
        styles.taskBar,
      );
      triggerEvent(point, 'click', () => {
        expect(toNumber(selectionPoint.getAttribute('x')))
          .toBeCloserTo(toNumber(points[0].getAttribute('x')) - 5);
        expect(toNumber(selectionPoint.getAttribute('y')))
          .toBeCloserTo(toNumber(points[0].getAttribute('y')) - 5);
        expect(toNumber(selectionPoint.getAttribute('height')))
          .toBeCloserTo(toNumber(points[0].getAttribute('height')) + 10);
        expect(toNumber(selectionPoint.getAttribute('width')))
          .toBeCloserTo(
            toNumber(points[3].getAttribute('x'))
                            - toNumber(points[0].getAttribute('x'))
                            + toNumber(points[1].getAttribute('width'))
                            + 10,
          );
      });
    });
    it('correctly sets attributes for stacked bar', () => {
      graphDefault = new Graph(getAxes(axisDefault));
      input = getInput(valuesDefault, false, false);
      input.onClick = (clearSelectionCallback) => {
        clearSelectionCallback();
      };
      const bar = new Bar(input);
      graphDefault.loadContent(bar);
      const input2 = utils.deepClone(
        getInput(valuesDefault, false, false),
      );
      input2.key = 'uid_2';
      input2.group = 'uid_1';
      input2.onClick = (clearSelectionCallback) => {
        clearSelectionCallback();
      };
      const bar2 = new Bar(input2);
      graphDefault.loadContent(bar2);
      bar.redraw(graphDefault);
      bar2.redraw(graphDefault);
      const selectionPoint = fetchElementByClass(
        barGraphContainer,
        styles.taskBarSelection,
      );
      const point = fetchElementByClass(
        barGraphContainer,
        styles.taskBar,
      );
      const points = fetchAllElementsByClass(
        barGraphContainer,
        styles.taskBar,
      );
      triggerEvent(point, 'click', () => {
        expect(toNumber(selectionPoint.getAttribute('x')))
          .toBeCloserTo(toNumber(points[0].getAttribute('x')) - 5);
        expect(toNumber(selectionPoint.getAttribute('y')))
          .toBeCloserTo(toNumber(points[0].getAttribute('y')) - 5);
        expect(toNumber(selectionPoint.getAttribute('height')))
          .toBeCloserTo(
            toNumber(points[0].getAttribute('height'))
                            + toNumber(points[3].getAttribute('height'))
                            + 10,
          );
        expect(toNumber(selectionPoint.getAttribute('width')))
          .toBeCloserTo(
            toNumber(points[0].getAttribute('width')) + 10,
          );
      });
    });
    it('correctly sets attributes for mixed type bar', () => {
      graphDefault.destroy();
      graphDefault = new Graph(getAxes(axisDefault));
      input = getInput(valuesDefault, false, false);
      input.onClick = (clearSelectionCallback) => {
        clearSelectionCallback();
      };
      const bar = new Bar(input);
      graphDefault.loadContent(bar);
      const input2 = utils.deepClone(
        getInput(valuesDefault, false, false),
      );
      input2.key = 'uid_2';
      input2.onClick = (clearSelectionCallback) => {
        clearSelectionCallback();
      };
      const input3 = utils.deepClone(
        getInput(valuesDefault, false, false),
      );
      input3.key = 'uid_3';
      input3.group = 'uid_1';
      input3.onClick = (clearSelectionCallback) => {
        clearSelectionCallback();
      };
      const bar2 = new Bar(input2);
      const bar3 = new Bar(input3);
      graphDefault.loadContent(bar2);
      graphDefault.loadContent(bar3);
      bar.redraw(graphDefault);
      bar2.redraw(graphDefault);
      bar3.redraw(graphDefault);
      const selectionPoint = fetchElementByClass(
        barGraphContainer,
        styles.taskBarSelection,
      );
      const point = fetchElementByClass(
        barGraphContainer,
        styles.taskBar,
      );
      const points = fetchAllElementsByClass(
        barGraphContainer,
        styles.taskBar,
      );
      triggerEvent(point, 'click', () => {
        expect(toNumber(selectionPoint.getAttribute('x')))
          .toBeCloserTo(toNumber(points[0].getAttribute('x')) - 5);
        expect(toNumber(selectionPoint.getAttribute('y')))
          .toBeCloserTo(toNumber(points[0].getAttribute('y')) - 5);
        expect(toNumber(selectionPoint.getAttribute('height')))
          .toBeCloserTo(
            toNumber(points[0].getAttribute('height'))
                            + toNumber(points[6].getAttribute('height'))
                            + 10,
          );
        expect(toNumber(selectionPoint.getAttribute('width')))
          .toBeCloserTo(
            toNumber(points[3].getAttribute('x'))
                            - toNumber(points[0].getAttribute('x'))
                            + toNumber(points[1].getAttribute('width'))
                            + 10,
          );
      });
    });
  });
  describe('when clicked on a data point', () => {
    let graphDefault;
    let input;
    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));
    });
    afterEach(() => {
      graphDefault.destroy();
    });
    it('does not do anything if no onClick callback is provided', () => {
      input = getInput(valuesDefault, false, false);
      input.onClick = null;
      graphDefault.loadContent(new Bar(input));
      const bar = fetchElementByClass(
        barGraphContainer,
        styles.taskBar,
      );
      triggerEvent(bar, 'click', () => {
        expect(bar.getAttribute('aria-disabled')).toBe('true');
      });
    });
    it('hides data point selection when parameter callback is called', () => {
      input = getInput(valuesDefault, false, false);
      input.onClick = (clearSelectionCallback) => {
        clearSelectionCallback();
      };
      graphDefault.loadContent(new Bar(input));
      const point = fetchElementByClass(
        barGraphContainer,
        styles.taskBar,
      );
      triggerEvent(point, 'click', () => {
        const selectionPoint = fetchElementByClass(
          barGraphContainer,
          styles.taskBarSelection,
        );
        expect(selectionPoint.getAttribute('aria-hidden')).toBe(
          'true',
        );
      });
    });
    it('highlights the data point', () => {
      const selectionPoint = fetchElementByClass(
        barGraphContainer,
        styles.taskBarSelection,
      );
      const point = fetchElementByClass(
        barGraphContainer,
        styles.taskBar,
      );
      triggerEvent(point, 'click', () => {
        expect(selectionPoint.getAttribute('aria-hidden')).toBe(
          'false',
        );
      });
    });
    it('removes highlight when data point is clicked again', () => {
      const selectionPoint = fetchElementByClass(
        barGraphContainer,
        styles.taskBarSelection,
      );
      const point = fetchElementByClass(
        barGraphContainer,
        styles.taskBar,
      );
      triggerEvent(point, 'click', () => {
        triggerEvent(point, 'click', () => {
          expect(selectionPoint.getAttribute('aria-hidden')).toBe(
            'true',
          );
        });
      });
    });
    it('calls onClick callback with parameters', () => {
      let args = {};
      input = getInput(valuesDefault, false, false);
      input.onClick = (cb, key, index, vals) => {
        args = {
          cb,
          key,
          index,
          vals,
        };
      };
      graphDefault.loadContent(new Bar(input));
      const selectionPoint = barGraphContainer.querySelectorAll(
        `.${styles.taskBar}`,
      )[1];
      triggerEvent(selectionPoint, 'click', () => {
        expect(args).not.toBeNull();
        expect(args.cb).toEqual(jasmine.any(Function));
        expect(args.key).toBe('uid_1');
        expect(args.vals).not.toBeNull();
        expect(args.vals.length).toEqual(1);
      });
    });
    it('onClick callback will get an array of all content that belongs to that tick group', () => {
      let args = {};
      input = getInput(valuesDefault, false, false);
      input.onClick = (cb, key, index, vals) => {
        args = {
          cb,
          key,
          index,
          vals,
        };
      };
      graphDefault.loadContent(new Bar(input));
      const input2 = utils.deepClone(
        getInput(valuesDefault, false, false),
      );
      input2.key = 'uid_2';
      input2.onClick = (cb, key, index, vals) => {
        args = {
          cb,
          key,
          index,
          vals,
        };
      };
      graphDefault.loadContent(new Bar(input2));
      const selectionPoint = barGraphContainer.querySelectorAll(
        `.${styles.taskBar}`,
      )[1];
      triggerEvent(selectionPoint, 'click', () => {
        expect(args.key).toBe('uid_1');
        expect(args.vals.length).toEqual(2);
        expect(args.vals[0].key).toBe('uid_1');
        expect(args.vals[1].key).toBe('uid_2');
      });
    });
    it('unload content will remove content data from selection bar datum', () => {
      let args = {};
      input = getInput(valuesDefault, false, false);
      input.onClick = (cb, key, index, vals) => {
        args = {
          cb,
          key,
          index,
          vals,
        };
      };
      graphDefault.loadContent(new Bar(input));
      const input2 = utils.deepClone(
        getInput(valuesDefault, false, false),
      );
      input2.key = 'uid_2';
      input2.onClick = (cb, key, index, vals) => {
        args = {
          cb,
          key,
          index,
          vals,
        };
      };
      const barContent = new Bar(input2);
      graphDefault.loadContent(barContent);
      barContent.redraw(graphDefault);
      graphDefault.unloadContent(barContent);
      const selectionPoint2 = barGraphContainer.querySelectorAll(
        `.${styles.taskBar}`,
      )[1];
      triggerEvent(selectionPoint2, 'click', () => {
        expect(args.key).toBe('uid_1');
        expect(args.vals.length).toEqual(1);
        expect(args.vals[0].key).toBe('uid_1');
      });
    });
    it('onClick callback will get selection bar datum in order which input was loaded', () => {
      let args = {};
      input = getInput(valuesDefault, false, false);
      input.onClick = (cb, key, index, vals) => {
        args = {
          cb,
          key,
          index,
          vals,
        };
      };
      const input2 = utils.deepClone(
        getInput(valuesDefault, false, false),
      );
      input2.key = 'uid_2';
      input2.onClick = (cb, key, index, vals) => {
        args = {
          cb,
          key,
          index,
          vals,
        };
      };
      graphDefault.loadContent(new Bar(input2));
      graphDefault.loadContent(new Bar(input));
      const selectionPoint2 = barGraphContainer.querySelectorAll(
        `.${styles.taskBar}`,
      )[1];
      triggerEvent(selectionPoint2, 'click', () => {
        expect(args.vals.length).toEqual(2);
        expect(args.vals[0].key).toBe('uid_2');
        expect(args.vals[1].key).toBe('uid_1');
      });
    });
  });
  describe('prepares to load legend item', () => {
    let graphDefault;
    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));
    });
    afterEach(() => {
      graphDefault.destroy();
    });
    //    TODO: fix failing test
    it.skip('does not load if legend is opted to be hidden', () => {
      const input = getAxes(axisDefault);
      input.showLegend = false;
      const noLegendGraph = new Graph(input);
      noLegendGraph.loadContent(new Bar(getInput(valuesDefault)));
      const legendContainer = fetchElementByClass(
        barGraphContainer,
        styles.legend,
      );
      expect(legendContainer).toBeNull();
      noLegendGraph.destroy();
    });
    it('does not load if label display value is not provided', () => {
      const input = getInput(valuesDefault);
      input.label.display = '';
      graphDefault.loadContent(new Bar(input));
      const legendContainer = fetchElementByClass(
        barGraphContainer,
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
      graphDefault.loadContent(new Bar(input));
      const legendContainer = fetchElementByClass(
        barGraphContainer,
        styles.legend,
      );
      const legendItems = legendContainer.children;
      expect(legendContainer).not.toBeNull();
      expect(legendContainer.tagName).toBe('UL');
      expect(legendItems.length).toBe(1);
    });
    it('loads item with a shape and text', () => {
      const input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Bar(input));
      const legendItem = fetchElementByClass(
        barGraphContainer,
        styles.legendItem,
      );
      const legendItemBtn = fetchElementByClass(
        barGraphContainer,
        styles.legendItemBtn,
      );
      const iconSVG = legendItemBtn.children[0].firstChild;
      const iconGroup = iconSVG.firstChild;
      expect(legendItem).not.toBeNull();
      expect(legendItem.getAttribute('aria-current')).toBe('true');
      expect(legendItem.getAttribute('aria-disabled')).toBe('false');
      expect(legendItem.children[1].className).toBe(styles.legendItemText);
      expect(legendItem.children[1].tagName).toBe('LABEL');
      expect(legendItem.children[1].textContent).toBe(input.label.display);
      expect(legendItemBtn).not.toBeNull();
      expect(legendItemBtn.getAttribute('class')).toBe(styles.legendItemBtn);
      expect(iconSVG.tagName).toBe('svg');
      expect(iconGroup.firstChild.getAttribute('d')).toBe(SHAPES.SQUARE.path.d);
      expect(iconSVG.classList.contains(styles.legendItemIcon)).toBeTruthy();
    });
    it('loads the correct color', () => {
      const input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Bar(input));
      const legendItem = fetchElementByClass(
        barGraphContainer,
        styles.legendItem,
      );
      const iconSVG = legendItem.querySelector('svg');
      const iconPath = legendItem.querySelector('path');
      expect(iconSVG).not.toBeNull();
      expect(iconSVG.classList).toContain(styles.legendItemIcon);
      expect(iconSVG.getAttribute('style')).toContain(COLORS.GREEN);
      expect(iconPath).not.toBeNull();
      expect(iconPath.getAttribute('d')).not.toBeNull();
    });
    it('attaches click event handlers correctly', () => {
      const input = getInput(valuesDefault, false, false);
      graphDefault.loadContent(new Bar(input));
      const legendItem = fetchElementByClass(
        barGraphContainer,
        styles.legendItem,
      );
      triggerEvent(legendItem, 'click', () => {
        expect(legendItem.getAttribute('aria-current')).toBe('false');
      });
    });
    it('on click hides the bars', () => {
      const rafSpy = jest.spyOn(window, 'requestAnimationFrame');

      const input = getInput(valuesDefault, false, false);
      const bar = new Bar(input);
      const graph = graphDefault.loadContent(bar);
      triggerEvent(
        fetchElementByClass(barGraphContainer, styles.legendItem),
        'click',
        () => {
          bar.redraw(graph);
          expect(window.requestAnimationFrame).toHaveBeenCalledTimes(
            1,
          );
          expect(
            fetchElementByClass(
              barGraphContainer,
              styles.bar,
            ).firstChild.getAttribute('aria-hidden'),
          ).toBe('true');
          rafSpy.calls.reset();
        },
      );
    });
    it('on click, removes the first bar content but keeps the rest', () => {
      const inputPrimary = getInput(valuesDefault, false, false);
      const inputSecondary = {
        key: 'uid_2',
        label: {
          display: 'Data Label B',
        },
        values: valuesDefault,
      };
      const primaryBar = new Bar(inputPrimary);
      const secondaryBar = new Bar(inputSecondary);
      graphDefault.loadContent(primaryBar);
      const graph = graphDefault.loadContent(secondaryBar);
      triggerEvent(
        fetchElementByClass(barGraphContainer, styles.legendItem),
        'click',
        () => {
          primaryBar.redraw(graph);
          secondaryBar.redraw(graph);
          const primaryBarElement = barGraphContainer.querySelector(
                        `.${styles.barGraphContent}[aria-describedby="${inputPrimary.key}"]`,
          );
          const secondaryBarElement = barGraphContainer.querySelector(
                        `.${styles.barGraphContent}[aria-describedby="${inputSecondary.key}"]`,
          );
          expect(graph.config.shownTargets.length).toBe(1);
          expect(
            fetchElementByClass(
              primaryBarElement,
              styles.bar,
            ).firstChild.getAttribute('aria-hidden'),
          ).toBe('true');
          expect(
            fetchElementByClass(
              secondaryBarElement,
              styles.bar,
            ).firstChild.getAttribute('aria-hidden'),
          ).toBe('false');
        },
      );
    });
    it('on clicking twice toggles the bars back to visible', () => {
      const rafSpy = jest.spyOn(window, 'requestAnimationFrame');

      const input = getInput(valuesDefault, false, false);
      const bar = new Bar(input);
      const graph = graphDefault.loadContent(bar);
      const legendItem = fetchElementByClass(
        barGraphContainer,
        styles.legendItem,
      );
      triggerEvent(legendItem, 'click', () => {
        bar.redraw(graph);
        triggerEvent(legendItem, 'click', () => {
          bar.redraw(graph);
          expect(window.requestAnimationFrame).toHaveBeenCalledTimes(
            2,
          );
          expect(
            fetchElementByClass(barGraphContainer, styles.bar)
              .firstChild.style.display,
          ).toBe('');
          rafSpy.calls.reset();
        });
      });
    });
    it('shown targets are removed from Graph', () => {
      const input = getInput(valuesDefault, false, false);
      const graph = graphDefault.loadContent(new Bar(input));
      triggerEvent(
        fetchElementByClass(barGraphContainer, styles.legendItem),
        'click',
        () => {
          expect(graph.config.shownTargets.length).toBe(0);
        },
      );
    });
    it('shown targets are updated back when toggled', () => {
      const input = getInput(valuesDefault, false, false);
      const graph = graphDefault.loadContent(new Bar(input));
      const legendItem = fetchElementByClass(
        barGraphContainer,
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
      const primaryBar = new Bar(inputPrimary);
      const secondaryBar = new Bar(inputSecondary);
      graphDefault.loadContent(primaryBar);
      graphDefault.loadContent(secondaryBar);
      const legendItem = fetchElementByClass(
        barGraphContainer,
        styles.legendItem,
      );
      triggerEvent(legendItem, 'mouseenter', () => {
        expect(
          document
            .querySelector(
                            `rect[aria-describedby="${inputSecondary.key}"]`,
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
      const primaryBar = new Bar(inputPrimary);
      const secondaryBar = new Bar(inputSecondary);
      graphDefault.loadContent(primaryBar);
      graphDefault.loadContent(secondaryBar);
      const legendItem = fetchElementByClass(
        barGraphContainer,
        styles.legendItem,
      );
      triggerEvent(legendItem, 'mouseleave', () => {
        expect(
          document
            .querySelector(
                            `rect[aria-describedby="${inputSecondary.key}"]`,
            )
            .classList.contains(styles.blur),
        ).toBeFalsy();
        expect(
          document
            .querySelector(
                            `rect[aria-describedby="${inputPrimary.key}"]`,
            )
            .classList.contains(styles.blur),
        ).toBeFalsy();
      });
    });
  });
  describe('Prepares to load label shape', () => {
    let graph;
    beforeEach(() => {
      graph = new Graph(getAxes(axisDefault));
      const barPrimary = getInput(valuesDefault, true, true, true);
      const barSecondary = getInput(valuesDefault, true, true, false);
      barSecondary.key = 'uid_2';
      graph.loadContent(new Bar(barPrimary));
      graph.loadContent(new Bar(barSecondary));
    });
    afterEach(() => {
      if (graph) graph.destroy();
    });
    it('Does not load shape if Y2 axis is not loaded', () => {
      const axes = utils.deepClone(getAxes(axisDefault));
      axes.axis.y2.show = false;
      graph = new Graph(axes);
      const input = getInput(valuesDefault, true, true, false);
      graph.loadContent(new Bar(input));
      expect(graph.axesLabelShapeGroup[constants.Y_AXIS]).toBeUndefined();
      expect(
        graph.axesLabelShapeGroup[constants.Y2_AXIS],
      ).toBeUndefined();
    });
    it('Loads shape in Y Axis', () => {
      const labelShapeContainer = fetchElementByClass(
        barGraphContainer,
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
      const barTertiary = getInput(valuesDefault, true, true, false);
      barTertiary.key = 'uid_3';
      graph.loadContent(new Bar(barTertiary));
      const labelShapeContainer = fetchElementByClass(
        barGraphContainer,
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
        barGraphContainer,
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
      const barTertiary = getInput(valuesDefault, true, true, true);
      barTertiary.key = 'uid_4';
      graph.loadContent(new Bar(barTertiary));
      const labelShapeContainer = fetchElementByClass(
        barGraphContainer,
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
    //    TODO: fix failing test
    it.skip('Preserves the DOM order', () => {
      const graph = new Graph(getAxes(axisDefault));
      const barPrimary = getInput(valuesDefault, true, true, true);
      const barSecondary = getInput(valuesDefault, true, true, false);
      barPrimary.key = 'uid_1';
      barSecondary.key = 'uid_2';
      graph.loadContent(new Bar(barPrimary));
      graph.loadContent(new Bar(barSecondary));
      const legendItem = document.querySelector(
                `.${styles.legendItem}[aria-describedby="${barPrimary.key}"]`,
      );
      expect(graph.config.shownTargets).toEqual(['uid_1', 'uid_2']);
      triggerEvent(legendItem, 'click');
      triggerEvent(legendItem, 'click');
      expect(graph.config.shownTargets).toEqual(['uid_2', 'uid_1']);
      expect(
        document
          .querySelector(`.${styles.barGraphContent}`)
          .getAttribute('aria-describedby'),
      ).toEqual(barPrimary.key);
    });
  });
});
