'use strict';

import * as d3 from 'd3';
import Graph from '../../../../src/js/controls/Graph/index';
import Line from '../../../../src/js/controls/Line/Line';
import { getXAxisWidth } from '../../../../src/js/helpers/axis';
import constants from '../../../../src/js/helpers/constants';
import styles from '../../../../src/js/helpers/styles';
import utils from '../../../../src/js/helpers/utils';
import {
  loadCustomJasmineMatcher,
  toNumber,
  triggerEvent,
} from '../../helpers/commonHelpers';
import {
  axisDefault,
  fetchElementByClass,
  getAxes,
  getData,
  valuesDefault,
  axisDefaultWithoutXAxisLabel,
} from './helpers';

describe('Graph - Resize', () => {
  let graph = null;
  let graphContainer;
  beforeAll(() => {
    loadCustomJasmineMatcher();
  });
  beforeEach(() => {
    graphContainer = document.createElement('div');
    graphContainer.id = 'testGraph_carbon';
    graphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    graphContainer.setAttribute('class', 'carbon-test-class');
    document.body.appendChild(graphContainer);
    graph = new Graph(utils.deepClone(getAxes(axisDefault)));
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('Sets the canvas width correctly', (done) => {
    expect(graph.config.canvasWidth).toBe(1024);
    graphContainer.setAttribute('style', 'width: 800px; height: 200px');
    graph.resize();
    triggerEvent(window, 'resize', () => {
      expect(graph.config.canvasWidth).toBe(800);
      done();
    });
  });
  it('Sets the defs clipPath width and height correctly', (done) => {
    graphContainer.setAttribute('style', 'width: 800px; height: 200px');
    graph.resize();
    triggerEvent(window, 'resize', () => {
      const defsElement = fetchElementByClass(styles.canvas).firstChild;
      const clipPathRect = defsElement.firstChild.firstChild;
      expect(toNumber(clipPathRect.getAttribute('height'))).toBe(
        graph.config.height,
      );
      expect(toNumber(clipPathRect.getAttribute('width'))).toBe(
        getXAxisWidth(graph.config),
      );
      done();
    });
  });
  it('Calculates X axis d3 scale using domain and range', (done) => {
    graph.resize();
    triggerEvent(window, 'resize', () => {
      expect(graph.scale.x).not.toBeNull();
      expect(graph.scale.x).toEqual(jasmine.any(Function));
      done();
    });
  });
  it('Calculates Y axis d3 scale using domain and range', (done) => {
    graph.resize();
    triggerEvent(window, 'resize', () => {
      expect(graph.scale.y).not.toBeNull();
      expect(graph.scale.y).toEqual(jasmine.any(Function));
      done();
    });
  });
  it('Translates the canvas', (done) => {
    const canvasElement = fetchElementByClass(styles.canvas);
    graphContainer.setAttribute('style', 'width: 800px; height: 200px');
    graph.resize();
    triggerEvent(window, 'resize', () => {
      expect(toNumber(canvasElement.getAttribute('height'))).not.toBe(0);
      expect(
        toNumber(canvasElement.getAttribute('height')),
      ).toBeGreaterThan(0);
      expect(toNumber(canvasElement.getAttribute('width'))).toBe(790);
      done();
    });
  });
  it('Sets the content container width and height correctly', (done) => {
    graphContainer.setAttribute('style', 'width: 800px; height: 200px');
    graph.resize();
    triggerEvent(window, 'resize', () => {
      const contentContainer = fetchElementByClass(
        styles.contentContainer,
      );
      expect(toNumber(contentContainer.getAttribute('height'))).toBe(
        graph.config.height,
      );
      expect(toNumber(contentContainer.getAttribute('width'))).toBe(
        getXAxisWidth(graph.config),
      );
      done();
    });
  });
  it('Sets the throttle correctly, if undefined', () => {
    const throttledInput = utils.deepClone(getAxes(axisDefault));
    throttledInput.throttle = undefined;
    graph.destroy();
    graph = new Graph(throttledInput);
    expect(graph.config.throttle).toEqual(constants.RESIZE_THROTTLE);
  });
  it('Sets the throttle correctly', () => {
    const throttledInput = utils.deepClone(getAxes(axisDefault));
    throttledInput.throttle = 400;
    graph.destroy();
    graph = new Graph(throttledInput);
    expect(graph.config.throttle).toEqual(400);
    expect(graph.config.throttle).not.toEqual(constants.RESIZE_THROTTLE);
  });
  it('Throttles based on delay', (done) => {
    const rafSpy = spyOn(window, 'requestAnimationFrame');
    const throttledInput = utils.deepClone(getAxes(axisDefault));
    throttledInput.throttle = undefined;
    graph.destroy();
    graph = new Graph(throttledInput);
    graphContainer.setAttribute('style', 'width: 600px; height: 200px');
    graph.resize();
    triggerEvent(
      window,
      'resize',
      () => {
        expect(window.requestAnimationFrame).toHaveBeenCalled();
        rafSpy.calls.reset();
        done();
      },
      constants.RESIZE_THROTTLE,
    );
  });
  it('Throttles based on delay provided in the input', (done) => {
    const rafSpy = spyOn(window, 'requestAnimationFrame');
    const throttledInput = utils.deepClone(getAxes(axisDefault));
    throttledInput.throttle = 500;
    graph.destroy();
    graph = new Graph(throttledInput);
    graphContainer.setAttribute('style', 'width: 400px; height: 200px');
    graph.resize();
    triggerEvent(
      window,
      'resize',
      () => {
        expect(window.requestAnimationFrame).toHaveBeenCalled();
        rafSpy.calls.reset();
        done();
      },
      throttledInput.throttle,
    );
  });
  it('Translates label shape container when Y2 axis is provided', (done) => {
    graph.destroy();
    graph = new Graph(
      utils.deepClone(
        getAxes({
          x: axisDefault.x,
          y: axisDefault.y,
          y2: {
            show: true,
            lowerLimit: 0,
            upperLimit: 200,
            label: 'Some Y2 label',
          },
        }),
      ),
    );
    graphContainer.setAttribute('style', 'width: 400px; height: 200px');
    graph.resize();
    triggerEvent(window, 'resize', () => {
      const canvasElement = fetchElementByClass(styles.canvas);
      const yAxisShapeContainer = canvasElement.querySelector(
                `.${styles.axisLabelYShapeContainer}`,
      );
      const y2AxisShapeContainer = canvasElement.querySelector(
                `.${styles.axisLabelY2ShapeContainer}`,
      );
      expect(yAxisShapeContainer.getAttribute('transform')).toContain(
        'translate',
      );
      expect(yAxisShapeContainer.getAttribute('transform')).toContain(
        'rotate(-90)',
      );
      expect(y2AxisShapeContainer.getAttribute('transform')).toContain(
        'translate',
      );
      expect(y2AxisShapeContainer.getAttribute('transform')).toContain(
        'rotate(90)',
      );
      done();
    });
  });
  /**
     * BF12182018.01 - Verify the consumer has the option to provide custom padding for the graph-container.
     */
  describe('When custom padding is used', () => {
    it('Default padding is applied when no custom padding is used', () => {
      const axisData = utils.deepClone(getAxes(axisDefault));
      graph.destroy();
      graph = new Graph(axisData);
      const expectedOutput = {
        top: 10,
        bottom: 10,
        left: 30,
        right: 50,
        hasCustomPadding: false,
      };
      expect(graph.config.padding).toEqual(expectedOutput);
    });
    it('Default padding is applied when custom padding half filled', () => {
      const axisData = utils.deepClone(getAxes(axisDefault));
      axisData.padding = {
        top: 40,
      };
      graph.destroy();
      graph = new Graph(axisData);
      const expectedOutput = {
        top: 40,
        bottom: 10,
        left: 30,
        right: 50,
        hasCustomPadding: true,
      };
      expect(graph.config.padding).toEqual(expectedOutput);
    });
    it('Position of content container starts where canvas starts', (done) => {
      const axisData = utils.deepClone(getAxes(axisDefault));
      axisData.padding = {
        top: 0,
        left: -17,
        right: 0,
        bottom: 0,
      };
      graph.destroy();
      graph = new Graph(axisData);
      graphContainer.setAttribute('style', 'width: 800px; height: 200px');
      graph.resize();
      triggerEvent(window, 'resize', () => {
        const contentContainer = fetchElementByClass(
          styles.contentContainer,
        );
        expect(
          toNumber(contentContainer.getAttribute('x'), 10),
        ).toBeCloserTo(-16);
        expect(
          toNumber(contentContainer.getAttribute('y'), 10),
        ).toBeCloserTo(0);
        done();
      });
    });
    it('Position of content container shifts right, when left padding is applied', (done) => {
      const axisData = utils.deepClone(getAxes(axisDefault));
      axisData.padding = {
        top: 0,
        left: 20,
        right: 0,
        bottom: 0,
      };
      graph.destroy();
      graph = new Graph(axisData);
      graphContainer.setAttribute('style', 'width: 800px; height: 200px');
      graph.resize();
      triggerEvent(window, 'resize', () => {
        const contentContainer = fetchElementByClass(
          styles.contentContainer,
        );
        expect(
          toNumber(contentContainer.getAttribute('x')),
        ).toBeGreaterThan(0);
        expect(toNumber(contentContainer.getAttribute('y'))).toBe(0);
        done();
      });
    });
    it('Position of content container shifts right, when left padding is applied', (done) => {
      const axisData = utils.deepClone(getAxes(axisDefault));
      axisData.padding = {
        top: 0,
        left: 20,
        right: 0,
        bottom: 0,
      };
      graph.destroy();
      graph = new Graph(axisData);
      graphContainer.setAttribute('style', 'width: 800px; height: 200px');
      graph.resize();
      triggerEvent(window, 'resize', () => {
        const contentContainer = fetchElementByClass(
          styles.contentContainer,
        );
        expect(
          toNumber(contentContainer.getAttribute('x')),
        ).toBeGreaterThan(0);
        expect(toNumber(contentContainer.getAttribute('y'))).toBe(0);
        done();
      });
    });
    it('Position of content container shifts left, when right padding is applied', (done) => {
      const axisData = utils.deepClone(getAxes(axisDefault));
      axisData.padding = {
        top: 0,
        left: 0,
        right: 20,
        bottom: 0,
      };
      graph.destroy();
      graph = new Graph(axisData);
      graphContainer.setAttribute('style', 'width: 800px; height: 200px');
      graph.resize();
      triggerEvent(window, 'resize', () => {
        // height and width of the content container gets set when the resize event occurs, via translateContentContainer
        const contentContainer = d3.select(
                    `.${styles.contentContainer}`,
        );
        expect(
          toNumber(contentContainer.attr('width'), 10),
        ).toBeCloserTo(742);
        expect(toNumber(contentContainer.attr('height'))).toBeCloserTo(
          250,
        );
        done();
      });
    });
    it('Position of content container shifts top, when bottom padding is applied', (done) => {
      const axisData = utils.deepClone(getAxes(axisDefault));
      axisData.padding = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 20,
      };
      graph.destroy();
      graph = new Graph(axisData);
      graphContainer.setAttribute('style', 'width: 800px; height: 200px');
      graph.resize();
      triggerEvent(window, 'resize', () => {
        const contentContainer = fetchElementByClass(
          styles.contentContainer,
        );
        expect(
          toNumber(contentContainer.getAttribute('height')),
        ).toBeLessThan(
          toNumber(
            fetchElementByClass(styles.canvas).getAttribute(
              'height',
            ),
          ),
        );
        done();
      });
    });
    it('Position of content container shifts bottom, when top padding is applied', (done) => {
      const axisData = utils.deepClone(getAxes(axisDefault));
      axisData.padding = {
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
      };
      graph.destroy();
      graph = new Graph(axisData);
      graphContainer.setAttribute('style', 'width: 800px; height: 200px');
      graph.resize();
      triggerEvent(window, 'resize', () => {
        const contentContainer = fetchElementByClass(
          styles.contentContainer,
        );
        expect(
          toNumber(contentContainer.getAttribute('height')),
        ).toBeLessThan(
          toNumber(
            fetchElementByClass(styles.canvas).getAttribute(
              'height',
            ),
          ),
        );
        done();
      });
    });
  });
  describe('When removeContainerPadding is set to true', () => {
    it('Removes carbon graph container padding', () => {
      graph.destroy();
      graph = new Graph(
        ({
          removeContainerPadding: true,
          ...getAxes(axisDefault),
        }),
      );
      const contentContainer = fetchElementByClass(styles.container);
      expect(contentContainer.getAttribute('style')).toBe(
        'padding-top: 0px; padding-bottom: 0px;',
      );
    });
  });
  describe('When legendPadding is provided', () => {
    it('Sets the legend padding and removes legend margin of 8px', () => {
      graph.destroy();
      graph = new Graph(
        ({
          legendPadding: {
            left: 2.5,
            right: 2.5,
            top: 2.5,
            bottom: 2.5,
          },
          ...getAxes(axisDefault),
        }),
      );
      graph.loadContent(new Line(getData(valuesDefault)));
      const legendElement = fetchElementByClass(styles.legendItem);
      expect(legendElement.getAttribute('style')).toBe(
        'margin: 0px; padding: 2.5px;',
      );
    });
  });
  describe('When removeContainerPadding is set to true and legendPadding is provided', () => {
    it('Removes carbon graph container padding and sets the legend padding and removes legend margin of 8px', () => {
      graph.destroy();
      graph = new Graph(
        ({
          removeContainerPadding: true,
          legendPadding: {
            left: 5,
            right: 5,
            top: 4,
            bottom: 2.5,
          },
          ...getAxes(axisDefault),
        }),
      );
      graph.loadContent(new Line(getData(valuesDefault)));
      const contentContainer = fetchElementByClass(styles.container);
      const legendElement = fetchElementByClass(styles.legendItem);
      expect(contentContainer.getAttribute('style')).toBe(
        'padding-top: 0px; padding-bottom: 0px;',
      );
      expect(legendElement.getAttribute('style')).toBe(
        'margin: 0px; padding: 4px 5px 2.5px;',
      );
    });
  });
  describe('When removeContainerPadding is set to false and legendPadding is not provided', () => {
    it('Default Carbon graph container padding is applied and default legend padding is applied', () => {
      graph.destroy();
      graph = new Graph(
        ({
          removeContainerPadding: false,
          ...getAxes(axisDefault),
        }),
      );
      graph.loadContent(new Line(getData(valuesDefault)));
      const contentContainer = fetchElementByClass(styles.container);
      const legendElement = fetchElementByClass(styles.legendItem);
      // Default Carbon graph container padding is applied. Hence no new style attribute will be present to reset padding top and bottom to 0.
      expect(contentContainer.getAttribute('style')).toBeNull();
      expect(legendElement.getAttribute('style')).toBe(
        'padding: 4px 8px;',
      );
    });
  });
  describe('When x-axis show is set to true and showLabel is set to false and x-axis label is specified', () => {
    it('Sets canvas height correctly', () => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefaultWithoutXAxisLabel);
      axisObj.x.show = true;
      axisObj.x.label = 'Data';
      graph = new Graph(
        ({
          showLabel: false,
          ...getAxes(axisObj),
        }),
      );
      expect(graph.config.canvasHeight).toBe(270);
    });
  });
  describe('When x-axis show is set to true and showLabel is set to false and x-axis label is not specified', () => {
    it('Sets canvas height correctly', () => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefaultWithoutXAxisLabel);
      axisObj.x.show = true;
      graph = new Graph(
        ({
          showLabel: false,
          ...getAxes(axisObj),
        }),
      );
      expect(graph.config.canvasHeight).toBe(270);
    });
  });
  describe('When x-axis show is set to false and showLabel is set to true and x-axis label is specified', () => {
    it('Sets canvas height correctly', () => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefaultWithoutXAxisLabel);
      axisObj.x.show = false;
      axisObj.x.label = 'Data';
      graph = new Graph(
        ({
          showLabel: true,
          ...getAxes(axisObj),
        }),
      );
      expect(graph.config.canvasHeight).toBeCloserTo(306);
    });
  });
  describe('When x-axis show is set to false and showLabel is set to true and x-axis label is not specified', () => {
    it('Reduces the extra pixels added to canvas height', () => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefaultWithoutXAxisLabel);
      axisObj.x.show = false;
      graph = new Graph(
        ({
          showLabel: true,
          ...getAxes(axisObj),
        }),
      );
      expect(graph.config.canvasHeight).toBeCloserTo(250);
    });
  });
  describe('When both x-axis show and showLabel properties are set to true and x-axis label is specified', () => {
    it('Sets canvas height correctly', () => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefaultWithoutXAxisLabel);
      axisObj.x.show = true;
      axisObj.x.label = 'Data';
      graph = new Graph(
        ({
          showLabel: true,
          ...getAxes(axisObj),
        }),
      );
      expect(graph.config.canvasHeight).toBeCloserTo(306);
    });
  });
  describe('When both x-axis show and showLabel properties are set to true and x-axis label is not specified', () => {
    it('Sets canvas height correctly', () => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefaultWithoutXAxisLabel);
      axisObj.x.show = true;
      graph = new Graph(
        ({
          showLabel: true,
          ...getAxes(axisObj),
        }),
      );
      expect(graph.config.canvasHeight).toBeCloserTo(270);
    });
  });
  describe('When both x-axis show and showLabel properties are set to false and x-axis label is specified', () => {
    it('Reduces the extra pixels added to canvas height', () => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefaultWithoutXAxisLabel);
      axisObj.x.show = false;
      axisObj.x.label = 'Data';
      graph = new Graph(
        ({
          showLabel: false,
          ...getAxes(axisObj),
        }),
      );
      expect(graph.config.canvasHeight).toBe(250);
    });
  });
  describe('When both x-axis show and showLabel properties are set to false and x-axis label is not specified', () => {
    it('Reduces the extra pixels added to canvas height', () => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefaultWithoutXAxisLabel);
      axisObj.x.show = false;
      graph = new Graph(
        ({
          showLabel: false,
          ...getAxes(axisObj),
        }),
      );
      expect(graph.config.canvasHeight).toBe(250);
    });
  });
});
