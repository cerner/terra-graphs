'use strict';

import sinon from 'sinon';
import * as d3 from 'd3';
import Graph from '../../../../src/js/controls/Graph/index';
import Line from '../../../../src/js/controls/Line/Line';
import constants, {
  AXES_ORIENTATION,
} from '../../../../src/js/helpers/constants';
import styles from '../../../../src/js/helpers/styles';
import { getCurrentTransform, getSVGAnimatedTransformList } from '../../../../src/js/helpers/transformUtils';
import utils from '../../../../src/js/helpers/utils';
import LOCALE from '../../../../src/js/locale/index';
import {
  loadCustomJasmineMatcher,
  triggerEvent,
} from '../../helpers/commonHelpers';
import {
  axisDefault,
  axisTimeSeries,
  dimension,
  fetchElementByClass,
  getAxes,
  getData,
} from './helpers';
import {
  generateYAxesTickValues,
  getTicksCountFromRange,
  getAverageTicksCount,
} from '../../../../src/js/helpers/axis';

describe('Graph - Axes', () => {
  let graph = null;
  let graphContainer;
  const largeLabel = 'Project long display value which is only for testing, Project long display value which is only for testing '
        + 'Project long display value which is only for testing, Project long display value which is only for testing';
  const smallLabel = 'hello!';
  beforeAll(() => {
    loadCustomJasmineMatcher();
  });
  beforeEach(() => {
    graphContainer = document.createElement('div');
    graphContainer.id = 'testGraph_carbon';
    graphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    graphContainer.setAttribute('class', 'carbon-test-class');
    document.body.appendChild(graphContainer);
  });
  afterEach(() => {
    if(graph!==null){
      graph.destroy();
    }
    document.body.innerHTML = '';
  });
  it('Creates the x axis markup', () => {
    graph = new Graph(getAxes(axisDefault));
    const xAxisElement = fetchElementByClass(styles.axisX);
    expect(xAxisElement.getAttribute('class')).toBe(
            `${styles.axis} ${styles.axisX}`,
    );
  });
  it('Creates the y axis markup', () => {
    graph = new Graph(getAxes(axisDefault));
    const yAxisElement = fetchElementByClass(styles.axisY);
    expect(yAxisElement.getAttribute('class')).toBe(
            `${styles.axis} ${styles.axisY}`,
    );
  });
  it('Creates the y axis reference line markup', () => {
    graph = new Graph(getAxes(axisDefault));
    const referenceElement = fetchElementByClass(styles.axisReferenceLine);
    expect(referenceElement.classList.contains(styles.axis)).toBeTruthy();
    expect(
      referenceElement.classList.contains(styles.axisReferenceLine),
    ).toBeTruthy();
    expect(referenceElement.classList.contains(styles.axisY)).toBeTruthy();
    expect(referenceElement.getAttribute('aria-hidden')).toBe('true');
    expect(referenceElement.getAttribute('d')).not.toBeNull();
  });
  it('Creates the y2 axis reference line markup', () => {
    graph = new Graph(
      getAxes({
        x: axisDefault.x,
        y: axisDefault.y,
        y2: {
          show: true,
          label: 'Some Y2 label',
          lowerLimit: 0,
          upperLimit: 200,
          padDomain: true,
        },
      }),
    );
    const referenceElement = document.querySelector(
            `.${styles.axisReferenceLine}.${styles.axisY2}`,
    );
    expect(referenceElement.classList.contains(styles.axis)).toBeTruthy();
    expect(
      referenceElement.classList.contains(styles.axisReferenceLine),
    ).toBeTruthy();
    expect(referenceElement.classList.contains(styles.axisY2)).toBeTruthy();
    expect(referenceElement.getAttribute('aria-hidden')).toBe('true');
    expect(referenceElement.getAttribute('d')).not.toBeNull();
  });
  it('Does not create the y axis reference line markup when 0 to -ve', () => {
    graph = new Graph(
      getAxes({
        x: axisDefault.x,
        y: {
          padDomain: false,
          label: 'Some Y Label',
          lowerLimit: 0,
          upperLimit: -20,
        },
      }),
    );
    const referenceElement = document.querySelector(
            `.${styles.axisReferenceLine}.${styles.axisY}`,
    );
    expect(
      referenceElement.classList.contains(styles.axisReferenceLine),
    ).toBeTruthy();
    expect(referenceElement.getAttribute('aria-hidden')).toBe('true');
  });
  it('Does not create the y axis reference line markup when -ve to -ve', () => {
    graph = new Graph(
      getAxes({
        x: axisDefault.x,
        y: {
          padDomain: false,
          label: 'Some Y Label',
          lowerLimit: -10,
          upperLimit: -20,
        },
      }),
    );
    const referenceElement = document.querySelector(
            `.${styles.axisReferenceLine}.${styles.axisY}`,
    );
    expect(
      referenceElement.classList.contains(styles.axisReferenceLine),
    ).toBeTruthy();
    expect(referenceElement.getAttribute('aria-hidden')).toBe('true');
  });
  it('Creates the y axis reference line markup when in range +ve to -ve', () => {
    graph = new Graph(
      getAxes({
        x: axisDefault.x,
        y: {
          padDomain: false,
          label: 'Some Y Label',
          lowerLimit: 20,
          upperLimit: -20,
        },
      }),
    );
    const referenceElement = document.querySelector(
            `.${styles.axisReferenceLine}.${styles.axisY}`,
    );
    expect(
      referenceElement.classList.contains(styles.axisReferenceLine),
    ).toBeTruthy();
    expect(referenceElement.getAttribute('aria-hidden')).toBe('false');
  });
  it('Does not create the y axis reference line markup when in range 0 to +ve', () => {
    graph = new Graph(
      getAxes({
        x: axisDefault.x,
        y: {
          padDomain: false,
          label: 'Some Y Label',
          lowerLimit: 0,
          upperLimit: 20,
        },
      }),
    );
    const referenceElement = document.querySelector(
            `.${styles.axisReferenceLine}.${styles.axisY}`,
    );
    expect(
      referenceElement.classList.contains(styles.axisReferenceLine),
    ).toBeTruthy();
    expect(referenceElement.getAttribute('aria-hidden')).toBe('true');
  });
  it('Does not create the y axis reference line markup when in range +ve to +ve', () => {
    graph = new Graph(
      getAxes({
        x: axisDefault.x,
        y: {
          padDomain: false,
          label: 'Some Y Label',
          lowerLimit: 10,
          upperLimit: 20,
        },
      }),
    );
    const referenceElement = document.querySelector(
            `.${styles.axisReferenceLine}.${styles.axisY}`,
    );
    expect(
      referenceElement.classList.contains(styles.axisReferenceLine),
    ).toBeTruthy();
    expect(referenceElement.getAttribute('aria-hidden')).toBe('true');
  });
  it('Sets y2 axis start from 0 when padDomain is false', () => {
    graph = new Graph(
      getAxes({
        x: axisDefault.x,
        y: axisDefault.y,
        y2: {
          show: true,
          label: 'Some Y2 label',
          lowerLimit: 0,
          upperLimit: 200,
          padDomain: false,
        },
      }),
    );
    const y2AxisElement = document.querySelectorAll(`.${styles.axisY2}`);
    // The first child element is the domain itself, and second child onwards denote the ticks
    expect(
      y2AxisElement[0].childNodes[1].querySelector('text').textContent,
    ).toBe('0');
  });
  it('Sets x axis orientation to bottom', () => {
    const xAxisBottomOrientation = utils.deepClone(axisDefault);
    xAxisBottomOrientation.x.orientation = AXES_ORIENTATION.X.BOTTOM;
    const input = getAxes(xAxisBottomOrientation);
    graph = new Graph(input);
    expect(graph.config.axis.x.orientation).toEqual(
      AXES_ORIENTATION.X.BOTTOM,
    );
  });
  it('Hides x axis when not enabled', () => {
    const hiddenAxisObj = utils.deepClone(axisTimeSeries);
    hiddenAxisObj.x.show = false;
    graph = new Graph(getAxes(hiddenAxisObj));
    const xAxisElement = fetchElementByClass(styles.axisX);
    expect(xAxisElement.getAttribute('class')).toBe(
            `${styles.axis} ${styles.axisX}`,
    );
    expect(xAxisElement.getAttribute('aria-hidden')).toBe('true');
  });
  it('Hides y axis when not enabled', () => {
    const hiddenAxisObj = utils.deepClone(axisTimeSeries);
    hiddenAxisObj.y.show = false;
    graph = new Graph(getAxes(hiddenAxisObj));
    const yAxisElement = fetchElementByClass(styles.axisY);
    expect(yAxisElement.getAttribute('class')).toBe(
            `${styles.axis} ${styles.axisY}`,
    );
    expect(yAxisElement.getAttribute('aria-hidden')).toBe('true');
  });
  it('sets x-axis clamping to false when axis.x.allowCalibration is undefined', () => {
    graph = new Graph(getAxes(axisDefault));
    expect(graph.scale.x.clamp()).toEqual(false);
  });
  it('Sets axis info row orientation to top when x axis orientation is bottom', () => {
    const xAxisBottomOrientation = utils.deepClone(axisDefault);
    xAxisBottomOrientation.x.orientation = AXES_ORIENTATION.X.BOTTOM;
    const input = getAxes(xAxisBottomOrientation);
    graph = new Graph(input);
    expect(graph.config.axis.x.orientation).not.toEqual(
      AXES_ORIENTATION.X.TOP,
    );
    expect(
      getSVGAnimatedTransformList(
        fetchElementByClass(styles.axisInfoRow).getAttribute(
          'transform',
        ),
      ).translate[1],
    ).toBeLessThan(
      getSVGAnimatedTransformList(
        fetchElementByClass(styles.axisX).getAttribute('transform'),
      ).translate[1],
    );
  });
  it('Sets axis info row orientation to bottom when x axis orientation is top', () => {
    const xAxisBottomOrientation = utils.deepClone(axisDefault);
    xAxisBottomOrientation.x.orientation = AXES_ORIENTATION.X.TOP;
    const input = getAxes(xAxisBottomOrientation);
    graph = new Graph(input);
    expect(graph.config.axis.x.orientation).not.toEqual(
      AXES_ORIENTATION.X.BOTTOM,
    );
    expect(
      getSVGAnimatedTransformList(
        fetchElementByClass(styles.axisInfoRow).getAttribute(
          'transform',
        ),
      ).translate[1],
    ).toBeGreaterThan(
      getSVGAnimatedTransformList(
        fetchElementByClass(styles.axisX).getAttribute('transform'),
      ).translate[1],
    );
  });
  it('Creates the y axis reference line markup even when hidden', () => {
    const hiddenAxisObj = utils.deepClone(axisTimeSeries);
    hiddenAxisObj.y.show = false;
    graph = new Graph(getAxes(hiddenAxisObj));
    const referenceElement = fetchElementByClass(styles.axisReferenceLine);
    expect(referenceElement.getAttribute('aria-hidden')).toBe('true');
  });
  it('Hides x and y axis when not enabled', () => {
    const hiddenAxisObj = utils.deepClone(axisTimeSeries);
    hiddenAxisObj.x.show = false;
    hiddenAxisObj.y.show = false;
    graph = new Graph(getAxes(hiddenAxisObj));
    expect(fetchElementByClass(styles.axisY).getAttribute('class')).toBe(
            `${styles.axis} ${styles.axisY}`,
    );
    expect(fetchElementByClass(styles.axisX).getAttribute('class')).toBe(
            `${styles.axis} ${styles.axisX}`,
    );
    expect(
      fetchElementByClass(styles.axisY).getAttribute('aria-hidden'),
    ).toBe('true');
    expect(
      fetchElementByClass(styles.axisX).getAttribute('aria-hidden'),
    ).toBe('true');
  });

  describe('Axes ticks processing', () => {
    it('Has correct output if ticksCount = TICKSCOUNT_MAXLIMIT', () => {
      const lowerLimit = 0;
      const upperLimit = 10;
      const ticksCount = constants.TICKSCOUNT_MAXLIMIT;
      expect(
        generateYAxesTickValues(lowerLimit, upperLimit, ticksCount)
          .length,
      ).toEqual(ticksCount + 2);
    });
    it('Has correct output if ticksCount < TICKSCOUNT_MAXLIMIT - 1', () => {
      const lowerLimit = 0;
      const upperLimit = 10;
      const ticksCount = constants.TICKSCOUNT_MAXLIMIT - 1;
      expect(
        generateYAxesTickValues(lowerLimit, upperLimit, ticksCount)
          .length,
      ).toEqual(ticksCount + 2);
    });
    it('Has correct output if ticksCount = 0', () => {
      const lowerLimit = 0;
      const upperLimit = 10;
      const ticksCount = 0;
      expect(
        generateYAxesTickValues(lowerLimit, upperLimit, ticksCount)
          .length,
      ).toEqual(ticksCount + 2);
    });
    it('Uses absolute value if ticksCount is negative', () => {
      const lowerLimit = 0;
      const upperLimit = 10;
      const ticksCount = -5;
      expect(
        generateYAxesTickValues(lowerLimit, upperLimit, ticksCount)
          .length,
      ).toEqual(Math.abs(ticksCount) + 2);
    });
    it('Returns correct value for AXISRANGE_ONE', () => {
      const boundary = constants.AXISRANGE_ONE;
      expect(getTicksCountFromRange(boundary - 1)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 4,
      );
      expect(getTicksCountFromRange(boundary)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 4,
      );
      expect(getTicksCountFromRange(boundary + 1)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 3,
      );
    });
    it('Returns correct value for AXISRANGE_TWO', () => {
      const boundary = constants.AXISRANGE_TWO;
      expect(getTicksCountFromRange(boundary - 1)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 3,
      );
      expect(getTicksCountFromRange(boundary)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 3,
      );
      expect(getTicksCountFromRange(boundary + 1)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 2,
      );
    });
    it('Returns correct value for AXISRANGE_THREE', () => {
      const boundary = constants.AXISRANGE_THREE;
      expect(getTicksCountFromRange(boundary - 1)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 2,
      );
      expect(getTicksCountFromRange(boundary)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 2,
      );
      expect(getTicksCountFromRange(boundary + 1)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 1,
      );
    });
    it('Returns correct value for AXISRANGE_FOUR', () => {
      const boundary = constants.AXISRANGE_FOUR;
      expect(getTicksCountFromRange(boundary - 1)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 1,
      );
      expect(getTicksCountFromRange(boundary)).toEqual(
        constants.DEFAULT_TICKSCOUNT - 1,
      );
      expect(getTicksCountFromRange(boundary + 1)).toEqual(
        constants.DEFAULT_TICKSCOUNT,
      );
    });
    it('Calculates the correct value when given Y and Y2 ranges', () => {
      const rangeY = 32;
      const rangeY2 = 250;
      expect(getAverageTicksCount(rangeY, rangeY2)).toEqual(5);
    });
  });

  describe('When there is a chance of getting multiple zeros on Y axis', () => {
    let localeAxisObj = {};
    localeAxisObj = utils.deepClone(axisDefault);
    localeAxisObj.y2 = {
      show: true,
      label: 'y2 axis',
      lowerLimit: 0,
      upperLimit: 11,
    };
    describe('When ticks consists of value between -0.5 to 0.5 and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y = {
          label: 'y axis',
          lowerLimit: -4,
          upperLimit: 2,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should create correct format, When consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.1f');
      });
      it('Should take consumer provided format, When consumer provides format', () => {
        localeAxisObj.y.ticks = {
          format: '.2f',
        };
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.2f');
      });
      it('Should create correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.1~f');
      });
    });
    describe('When ticks consists of value between -0.05 to 0.05  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y = {
          label: 'y axis',
          lowerLimit: -0.4,
          upperLimit: 0.2,
        };
      });
      beforeEach(() => {
        graph.destroy();
      });
      it('Should create correct format, When consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.2f');
      });
      it('Should take consumer provided format, When consumer provides format', () => {
        localeAxisObj.y.ticks = {
          format: '.3f',
        };
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.3f');
      });
      it('Should create correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.2~f');
      });
    });
    describe('When ticks consists of value between -0.005 to 0.005  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y = {
          label: 'y axis',
          lowerLimit: -0.04,
          upperLimit: 0.02,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should create correct format, When consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.3f');
      });
      it('Should take consumer provided format, When consumer provides format', () => {
        localeAxisObj.y.ticks = {
          format: '.2f',
        };
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.2f');
      });
      it('Should create correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.3~f');
      });
    });
    describe('When ticks consists of value between -0.0005 to 0.0005  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y = {
          label: 'y axis',
          lowerLimit: -0.004,
          upperLimit: 0.002,
        };
      });
      beforeEach(() => {
        graph.destroy();
      });
      it('Should create correct format, When consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.4f');
      });
      it('Should take consumer provided format, When consumer provides format', () => {
        localeAxisObj.y.ticks = {
          format: '.2f',
        };
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.2f');
      });
      it('Should create correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.4~f');
      });
    });
    describe('When ticks consists of value between -0.00005 to 0.00005  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y = {
          label: 'y axis',
          lowerLimit: -0.0004,
          upperLimit: 0.0002,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should create correct format, When consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.5f');
      });
      it('Should take consumer provided format, When consumer provides format', () => {
        localeAxisObj.y.ticks = {
          format: '.2f',
        };
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.2f');
      });
      it('Should create correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.5~f');
      });
    });
  });
  describe('When there is a chance of getting multiple zeros on Y2 axis', () => {
    let localeAxisObj = {};
    localeAxisObj = utils.deepClone(axisDefault);
    localeAxisObj.y = {
      label: 'y axis',
      lowerLimit: 0,
      upperLimit: 11,
    };
    describe('When ticks consists of value between -0.5 to 0.5  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: -4,
          upperLimit: 2,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should create correct format, When consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.1f');
      });
      it('Should take consumer provided format, When consumer provides format', () => {
        localeAxisObj.y2.ticks = {
          format: '.2f',
        };
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.2f');
      });
      it('Should create correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y2.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.1~f');
      });
    });
    describe('When ticks consists of value between -0.05 to 0.05  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: -0.4,
          upperLimit: 0.2,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should create correct format, When consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.2f');
      });
      it('Should take consumer provided format, When consumer provides format', () => {
        localeAxisObj.y2.ticks = {
          format: '.3f',
        };
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.3f');
      });
      it('Should create correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y2.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.2~f');
      });
    });
    describe('When ticks consists of value between -0.005 to 0.005  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: -0.04,
          upperLimit: 0.02,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should create correct format, When consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.3f');
      });
      it('Should take consumer provided format, When consumer provides format', () => {
        localeAxisObj.y2.ticks = {
          format: '.2f',
        };
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.2f');
      });
      it('Should create correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y2.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.3~f');
      });
    });
    describe('When ticks consists of value between -0.0005 to 0.0005  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: -0.004,
          upperLimit: 0.002,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should create correct format, When consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.4f');
      });
      it('Should take consumer provided format, When consumer provides format', () => {
        localeAxisObj.y2.ticks = {
          format: '.2f',
        };
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.2f');
      });
      it('Should create correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y2.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.4~f');
      });
    });
    describe('When ticks consists of value between -0.00005 to 0.00005  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: -0.0004,
          upperLimit: 0.0002,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should create correct format, When consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.5f');
      });
      it('Should take consumer provided format, When consumer provides format', () => {
        localeAxisObj.y2.ticks = {
          format: '.2f',
        };
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.2f');
      });
      it('Should create correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y2.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.5~f');
      });
    });
  });

  describe('When there is a chance of getting multiple zeros on Y axis', () => {
    let localeAxisObj = {};
    localeAxisObj = utils.deepClone(axisDefault);
    localeAxisObj.y2 = {
      show: true,
      label: 'y2 axis',
      lowerLimit: -5,
      upperLimit: 60,
    };
    describe('When ticks consists of value between -0.1 to 0.1  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y = {
          label: 'y axis',
          lowerLimit: -4.5,
          upperLimit: 1,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should use correct format, when consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.2f');
      });
      it('Should use correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.2~f');
      });
    });
    describe('When ticks consists of value between -0.01 to 0.01  and not 0', () => {
      beforeEach(() => {
        graph.destroy();
        localeAxisObj.y = {
          label: 'y axis',
          lowerLimit: -0.45,
          upperLimit: 0.1,
        };
      });
      it('Should use correct format, when consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.3f');
      });
      it('Should use correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y.ticks.format,
        ).toBe('.3~f');
      });
    });
  });
  describe('When there is a chance of getting multiple zeros on Y2 axis', () => {
    let localeAxisObj = {};
    localeAxisObj = utils.deepClone(axisDefault);
    localeAxisObj.y = {
      label: 'y axis',
      lowerLimit: -5,
      upperLimit: 60,
    };
    describe('When ticks consists of value between -0.1 to 0.1  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: -4.5,
          upperLimit: 1,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should use correct format, when consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.2f');
      });
      it('Should use correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y2.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.2~f');
      });
    });
    describe('When ticks consists of value between -0.01 to 0.01  and not 0', () => {
      beforeEach(() => {
        localeAxisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: -0.45,
          upperLimit: 0.1,
        };
      });
      afterEach(() => {
        graph.destroy();
      });
      it('Should use correct format, when consumer does not provide format', () => {
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.3f');
      });
      it('Should use correct format, when suppress trailing zeros is set to true', () => {
        localeAxisObj.y2.suppressTrailingZeros = true;
        graph = new Graph(
          ({
            ...getAxes(localeAxisObj),
          }),
        );
        expect(
          graph.config.axis.y2.ticks.format,
        ).toBe('.3~f');
      });
    });
  });

  describe('when Y-2 axis is present', () => {
    afterEach(() => {
      graph.destroy();
    });
    it('uses custom tick values when axis.y.ticks.values is set and ignores ticksCount', () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y = {
        label: 'y axis - custom ticks',
        lowerLimit: 0,
        upperLimit: 10,
        ticks: {
          values: [2, 4, 6, 8],
        },
      };
      graph = new Graph(
        ({
          ticksCount: 2,
          ...getAxes(localeAxisObj),
        }),
      );
      const allYAxisElements = document.querySelectorAll(
                `.${styles.axisY}`,
      );
      const NumberOfTicks = allYAxisElements[0].childNodes.length;
      expect(
        allYAxisElements[0].childNodes[1].querySelector('text')
          .textContent,
      ).toBe('2');
      expect(
        allYAxisElements[0].childNodes[NumberOfTicks - 1].querySelector(
          'text',
        ).textContent,
      ).toBe('8');
    });

    it('uses ticksCount values when axis.y.ticks.values is undefined and ticksCount is set', () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y = {
        label: 'y axis - ticksCount ticks',
        lowerLimit: 0,
        upperLimit: 10,
      };
      graph = new Graph(
        ({
          ticksCount: 2,
          ...getAxes(localeAxisObj),
        }),
      );
      const allYAxisElements = document.querySelectorAll(
                `.${styles.axisY}`,
      );

      const yTicks = [];
      // The first child element is the domain itself, and second child onwards denote the ticks
      for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
        yTicks.push(parseInt(allYAxisElements[0].childNodes[i].querySelector('text').textContent, 10));
      }
      expect(yTicks).toEqual([0, 3, 7, 10]);
    });
    describe('if Y and Y2 ranges are multiples of each other', () => {
      it('factors the larger range by the smaller one and uses that as the interval size', () => {
        const localeAxisObj = utils.deepClone(axisDefault);
        localeAxisObj.allowCallibration = false;
        localeAxisObj.y = {
          label: 'y axis',
          lowerLimit: 0,
          upperLimit: 50,
        };
        localeAxisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: 0,
          upperLimit: 250,
        };
        graph = new Graph({ ...getAxes(localeAxisObj) });
        graph.allowCallibration = false;

        const allYAxisElements = document.querySelectorAll(
          `.${styles.axisY}`,
        );

        const yTicks = [];
        const expectedYTicks = [0, 10, 20, 30, 40, 50];

        for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
          yTicks.push(parseInt(allYAxisElements[0].childNodes[i].querySelector('text').textContent, 10));
        }

        expect(yTicks).toEqual(expectedYTicks);
      });
      it('does not use this method if factor < 3', () => {
        const localeAxisObj = utils.deepClone(axisDefault);
        localeAxisObj.allowCallibration = false;
        localeAxisObj.y = {
          label: 'y axis',
          lowerLimit: 0,
          upperLimit: 50,
        };
        localeAxisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: 0,
          upperLimit: 100,
        };
        graph = new Graph({ ...getAxes(localeAxisObj) });
        graph.allowCallibration = false;

        const allYAxisElements = document.querySelectorAll(`.${styles.axisY}`);

        const yTicks = [];
        const expectedYTicks = [0, 10, 20, 30, 40, 50];

        for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
          yTicks.push(parseInt(allYAxisElements[0].childNodes[i].querySelector('text').textContent, 10));
        }

        const allY2AxisElements = document.querySelectorAll(`.${styles.axisY2}`);

        const y2Ticks = [];
        const expectedY2Ticks = [0, 20, 40, 60, 80, 100];

        for (let i = 1; i < allY2AxisElements[0].childNodes.length; i += 1) {
          y2Ticks.push(parseInt(allY2AxisElements[0].childNodes[i].querySelector('text').textContent, 10));
        }
        expect(yTicks).toEqual(expectedYTicks);
        expect(y2Ticks).toEqual(expectedY2Ticks);
      });
    });

    it('finds a common denominator if it exists between > 3 and  < 9 ', () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.allowCallibration = false;
      localeAxisObj.y = {
        label: 'y axis',
        lowerLimit: 0,
        upperLimit: 30,
      };
      localeAxisObj.y2 = {
        show: true,
        label: 'y2 axis',
        lowerLimit: 0,
        upperLimit: 120,
      };
      graph = new Graph({ ...getAxes(localeAxisObj) });

      const allYAxisElements = document.querySelectorAll(`.${styles.axisY}`);
      const allY2AxisElements = document.querySelectorAll(`.${styles.axisY2}`);

      const yTicks = [];
      const expectedYTicks = [0, 5, 10, 15, 20, 25, 30];
      const y2Ticks = [];
      const expectedY2Ticks = [0, 20, 40, 60, 80, 100, 120];

      for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
        yTicks.push(parseInt(allYAxisElements[0].childNodes[i].querySelector('text').textContent, 10));
      }
      for (let i = 1; i < allY2AxisElements[0].childNodes.length; i += 1) {
        y2Ticks.push(parseInt(allY2AxisElements[0].childNodes[i].querySelector('text').textContent, 10));
      }

      expect(yTicks).toEqual(expectedYTicks);
      expect(y2Ticks).toEqual(expectedY2Ticks);
    });
    it('uses default method for Y ans Y2 tick values when custom ticks and ticksCount are not provided', () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y = {
        label: 'y axis - default method',
        lowerLimit: 0,
        upperLimit: 11,
      };
      localeAxisObj.y2 = {
        label: 'y axis - default method',
        lowerLimit: 0,
        upperLimit: 23,
      };
      graph = new Graph({ ...getAxes(localeAxisObj) });
      const allYAxisElements = document.querySelectorAll(
                `.${styles.axisY}`,
      );

      const yTicks = [];
      for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
        yTicks.push(parseInt(allYAxisElements[0].childNodes[i].querySelector('text').textContent, 10));
      }
      console.log(yTicks);
    });
    describe('when space is passed as label', () => {
      beforeEach(() => {
        graph.destroy();
      });
      it('check transform position of y-axis when y2-axis is true', () => {
        const axisObj = utils.deepClone(axisDefault);
        axisObj.y.label = ' ';
        axisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: 11,
          upperLimit: 25,
        };
        graph = new Graph({ ...getAxes(axisObj) });
        expect(
          getSVGAnimatedTransformList(
            fetchElementByClass(styles.axisY).getAttribute(
              'transform',
            ),
          ).translate[0],
        ).toBe(67.125);
      });
      it('check transform position of y-axis when y2-axis is false', () => {
        const axisObj = utils.deepClone(axisDefault);
        axisObj.y.label = ' ';
        axisObj.y2 = {
          show: false,
          label: 'y2 axis',
          lowerLimit: 11,
          upperLimit: 25,
        };
        graph = new Graph({ ...getAxes(axisObj) });
        expect(
          getSVGAnimatedTransformList(
            fetchElementByClass(styles.axisY).getAttribute(
              'transform',
            ),
          ).translate[0],
        ).toBe(67.125);
      });
    });
  });

  describe('when only Y axis is present', () => {
    beforeEach(() => {
      graph.destroy();
    });
    it('uses custom values for Y when custom ticks are provided', () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y = {
        label: 'y axis - custom tick values',
        lowerLimit: 0,
        upperLimit: 10,
        ticks: {
          values: [2, 4, 6, 8],
        },
      };
      localeAxisObj.y2 = {
        show: true,
        label: 'y2 axis - custom tick values',
        lowerLimit: 11,
        upperLimit: 25,
        ticks: {
          values: [12, 14, 16, 18],
        },
      };
      graph = new Graph(
        ({
          ticksCount: 2,
          ...getAxes(localeAxisObj),
        }),
      );
      const allYAxisElements = document.querySelectorAll(
                `.${styles.axisY}`,
      );
      const allY2AxisElements = document.querySelectorAll(
                `.${styles.axisY2}`,
      );
      const NumberOfTicks = allYAxisElements[0].childNodes.length;
      expect(
        allYAxisElements[0].childNodes[1].querySelector('text')
          .textContent,
      ).toBe('2');
      expect(
        allYAxisElements[0].childNodes[NumberOfTicks - 1].querySelector(
          'text',
        ).textContent,
      ).toBe('8');
      expect(
        allY2AxisElements[0].childNodes[1].querySelector('text')
          .textContent,
      ).toBe('12');
      expect(
        allY2AxisElements[0].childNodes[
          NumberOfTicks - 1
        ].querySelector('text').textContent,
      ).toBe('18');
    });

    it('uses ticksCount for Y and Y2 tick values when given ticksCount and custom ticks are undefined', () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y = {
        label: 'y axis - ticksCount',
        lowerLimit: 0,
        upperLimit: 10,
      };
      localeAxisObj.y2 = {
        show: true,
        label: 'y2 axis - ticksCount',
        lowerLimit: 11,
        upperLimit: 25,
      };
      graph = new Graph(
        ({
          ticksCount: 2,
          ...getAxes(localeAxisObj),
        }),
      );
      const allYAxisElements = document.querySelectorAll(
                `.${styles.axisY}`,
      );
      const allY2AxisElements = document.querySelectorAll(
                `.${styles.axisY2}`,
      );

      const yTicks = [];
      for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
        yTicks.push(parseFloat(allYAxisElements[0].childNodes[i].querySelector('text').textContent, 10));
      }
      const y2Ticks = [];
      for (let i = 1; i < allY2AxisElements[0].childNodes.length; i += 1) {
        y2Ticks.push(parseFloat(allY2AxisElements[0].childNodes[i].querySelector('text').textContent, 10));
      }

      expect(yTicks).toEqual([0, 3, 7, 10]);
      expect(y2Ticks).toEqual([11, 16, 20, 25]);
    });
    it('uses default methods for Y and Y2 tick values when custom ticks and ticksCount are undefined', () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y = {
        label: 'y axis - default ticks',
        lowerLimit: 0,
        upperLimit: 10,
      };
      localeAxisObj.y2 = {
        show: true,
        label: 'y2 axis - default ticks',
        lowerLimit: 11,
        upperLimit: 25,
      };
      graph = new Graph({ ...getAxes(localeAxisObj) });
      const allYAxisElements = document.querySelectorAll(
                `.${styles.axisY}`,
      );
      const allY2AxisElements = document.querySelectorAll(
                `.${styles.axisY2}`,
      );

      const expectedYTicks = [0, 3, 5, 8, 10];
      const yTicks = [];
      for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
        yTicks.push(parseInt(allYAxisElements[0].childNodes[i].querySelector('text').textContent, 10));
      }

      const expectedY2Ticks = [11, 15, 18, 22, 25];
      const y2Ticks = [];
      for (let i = 1; i < allY2AxisElements[0].childNodes.length; i += 1) {
        y2Ticks.push(parseInt(allY2AxisElements[0].childNodes[i].querySelector('text').textContent, 10));
      }

      expect(yTicks).toEqual(expectedYTicks);
      expect(y2Ticks).toEqual(expectedY2Ticks);
    });
  });
  describe('For timeseries type', () => {
    beforeEach(() => {
      graph.destroy();
    });
    it('Creates x axis with ticks in default locale', () => {
      const localeAxisObj = utils.deepClone(axisTimeSeries);
      localeAxisObj.x.ticks = {
        format: '%b %Y',
      };
      graph = new Graph(getAxes(localeAxisObj));

      const xAxisElement = fetchElementByClass(styles.axisX);
      const tick = xAxisElement
        .querySelector('.tick')
        .querySelector('text');
      expect(tick.textContent).toBe('Jan 2016');
    });
    it('Creates x axis with ticks in provided locale - DE', () => {
      const localeAxisObj = utils.deepClone(axisTimeSeries);
      localeAxisObj.x.ticks = {
        format: '%b %Y',
      };
      graph = new Graph(
        ({ locale: LOCALE.de_DE, ...getAxes(localeAxisObj) }),
      );

      const xAxisElement = fetchElementByClass(styles.axisX);
      const tick = xAxisElement
        .querySelector('.tick')
        .querySelector('text');
      expect(tick.textContent).toBe('Jan 2016');
    });
    it('Creates x axis with ticks in provided locale - FR', () => {
      const localeAxisObj = utils.deepClone(axisTimeSeries);
      localeAxisObj.x.ticks = {
        format: '%b %Y',
      };
      graph = new Graph(
        ({ locale: LOCALE.fr_FR, ...getAxes(localeAxisObj) }),
      );

      const xAxisElement = fetchElementByClass(styles.axisX);
      const tick = xAxisElement
        .querySelector('.tick')
        .querySelector('text');
      expect(tick.textContent).toBe('janv. 2016');
    });
    it('Creates x axis with ticks in provided locale - ES', () => {
      const localeAxisObj = utils.deepClone(axisTimeSeries);
      localeAxisObj.x.ticks = {
        format: '%b %Y',
      };
      graph = new Graph(
        ({ locale: LOCALE.es_ES, ...getAxes(localeAxisObj) }),
      );

      const xAxisElement = fetchElementByClass(styles.axisX);
      const tick = xAxisElement
        .querySelector('.tick')
        .querySelector('text');
      expect(tick.textContent).toBe('ene. 2016');
    });
    it('Creates x axis with ticks in provided locale - PT_BR', () => {
      const localeAxisObj = utils.deepClone(axisTimeSeries);
      localeAxisObj.x.ticks = {
        format: '%b %Y',
      };
      graph = new Graph(
        ({ locale: LOCALE.pt_BR, ...getAxes(localeAxisObj) }),
      );

      const xAxisElement = fetchElementByClass(styles.axisX);
      const tick = xAxisElement
        .querySelector('.tick')
        .querySelector('text');
      expect(tick.textContent).toBe('jan 2016');
    });
    describe('When format is provided', () => {
      describe('should display date as input format', () => {
        let axisData = {};
        beforeEach(() => {
          graph.destroy();
          axisData = utils.deepClone(axisTimeSeries);
          axisData.x.ticks = {
            format: '%b',
          };
        });
        it('for locale nl_NL', () => {
          graph = new Graph(({ locale: LOCALE.nl_NL, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('jan');
        });
        it('for locale fr_FR', () => {
          graph = new Graph(({ locale: LOCALE.fr_FR, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('janv.');
        });
        it('For locale sv_SE', () => {
          graph = new Graph(({ locale: LOCALE.sv_SE, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('jan');
        });
        it('For locale es_ES', () => {
          graph = new Graph(({ locale: LOCALE.es_ES, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('ene.');
        });
        it('For locale pt_BR', () => {
          graph = new Graph(({ locale: LOCALE.pt_BR, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('jan');
        });
        it('For locale de_DE', () => {
          graph = new Graph(({ locale: LOCALE.de_DE, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('Jan');
        });
      });
    });
    describe('When blank is provided as format', () => {
      describe('should hide x axis tick labels ', () => {
        let axisData = {};
        beforeEach(() => {
          graph.destroy();
          axisData = utils.deepClone(axisTimeSeries);
          axisData.x.ticks = {
            format: '',
          };
          axisData.x.upperLimit = new Date(2016, 2, 0, 0).toISOString();
        });
        it(' for locale nl_NL', () => {
          graph = new Graph(({ locale: LOCALE.nl_NL, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('text');
          xAxisTickTexts.forEach((textElement) => {
            expect(textElement.innerHTML).toBe('');
          });
        });
        it('for locale fr_FR', () => {
          graph = new Graph(({ locale: LOCALE.fr_FR, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('text');
          xAxisTickTexts.forEach((textElement) => {
            expect(textElement.innerHTML).toBe('');
          });
        });
        it('For locale sv_SE', () => {
          graph = new Graph(({ locale: LOCALE.sv_SE, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('text');
          xAxisTickTexts.forEach((textElement) => {
            expect(textElement.innerHTML).toBe('');
          });
        });
        it('For locale es_ES', () => {
          graph = new Graph(({ locale: LOCALE.es_ES, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('text');
          xAxisTickTexts.forEach((textElement) => {
            expect(textElement.innerHTML).toBe('');
          });
        });
        it('For locale pt_BR', () => {
          graph = new Graph(({ locale: LOCALE.pt_BR, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('text');
          xAxisTickTexts.forEach((textElement) => {
            expect(textElement.innerHTML).toBe('');
          });
        });
        it('For locale de_DE', () => {
          graph = new Graph(({ locale: LOCALE.de_DE, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('text');
          xAxisTickTexts.forEach((textElement) => {
            expect(textElement.innerHTML).toBe('');
          });
        });
      });
    });
    describe('When input format is not provided', () => {
      describe('should display correct month format on x axis ticks as per upper and lower limits provided by consumer', () => {
        let axisData = {};
        beforeEach(() => {
          graph.destroy();
          axisData = utils.deepClone(axisTimeSeries);
          axisData.x.upperLimit = new Date(2016, 2, 0, 0).toISOString();
        });
        it('for locale nl_NL', () => {
          graph = new Graph(({ locale: LOCALE.nl_NL, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('27 dec');
        });
        it('for locale fr_FR', () => {
          graph = new Graph(({ locale: LOCALE.fr_FR, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('27 déc.');
        });
        it('For locale sv_SE', () => {
          graph = new Graph(({ locale: LOCALE.sv_SE, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('27 dec');
        });
        it('For locale es_ES', () => {
          graph = new Graph(({ locale: LOCALE.es_ES, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('27 dic.');
        });
        it('For locale pt_BR', () => {
          graph = new Graph(({ locale: LOCALE.pt_BR, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('27 dez');
        });
        it('For locale de_DE', () => {
          graph = new Graph(({ locale: LOCALE.de_DE, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTick = xAxisElement.querySelector('.tick');
          expect(xAxisTick.textContent)
            .toBe('27. Dez');
        });
      });
      describe('should display correct week format on x axis ticks as per upper and lower limits provided by consumer', () => {
        let axisData = {};
        beforeEach(() => {
          graph.destroy();
          axisData = utils.deepClone(axisTimeSeries);
          axisData.x.upperLimit = new Date(2016, 0, 15, 0).toISOString();
        });
        it('for locale nl_NL', () => {
          graph = new Graph(({ locale: LOCALE.nl_NL, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('.tick text');
          expect(xAxisTickTexts[2].textContent)
            .toBe('di 05');
        });
        it('for locale fr_FR', () => {
          graph = new Graph(({ locale: LOCALE.fr_FR, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('.tick text');
          expect(xAxisTickTexts[2].textContent)
            .toBe('mar.  5');
        });
        it('For locale sv_SE', () => {
          graph = new Graph(({ locale: LOCALE.sv_SE, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('.tick text');
          expect(xAxisTickTexts[2].textContent)
            .toBe('Tis  5');
        });
        it('For locale es_ES', () => {
          graph = new Graph(({ locale: LOCALE.es_ES, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('.tick text');
          expect(xAxisTickTexts[2].textContent)
            .toBe('mar. 05');
        });
        it('For locale pt_BR', () => {
          graph = new Graph(({ locale: LOCALE.pt_BR, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('.tick text');
          expect(xAxisTickTexts[2].textContent)
            .toBe('ter 05');
        });
        it('For locale de_DE', () => {
          graph = new Graph(({ locale: LOCALE.de_DE, ...getAxes(axisData) }));
          const xAxisElement = fetchElementByClass(styles.axisX);
          const xAxisTickTexts = xAxisElement.querySelectorAll('.tick text');
          expect(xAxisTickTexts[2].textContent)
            .toBe('Di, 05.');
        });
      });
    });
    describe('Ticks with number should have no padding', () => {
      let axisData = {};
      beforeEach(() => {
        graph.destroy();
        axisData = utils.deepClone(axisTimeSeries);
        axisData.x.upperLimit = new Date(2016, 0, 15, 0).toISOString();
      });
      it('for locale fr_FR', () => {
        graph = new Graph(({ locale: LOCALE.fr_FR, ...getAxes(axisData) }));
        const xAxisElement = fetchElementByClass(styles.axisX);
        const xAxisTickTexts = xAxisElement.querySelectorAll('.tick text');
        expect(xAxisTickTexts[2].textContent)
          .toBe('mar.  5');
      });
      it('For locale sv_SE', () => {
        graph = new Graph(({ locale: LOCALE.sv_SE, ...getAxes(axisData) }));
        const xAxisElement = fetchElementByClass(styles.axisX);
        const xAxisTickTexts = xAxisElement.querySelectorAll('.tick text');
        expect(xAxisTickTexts[1].textContent)
          .toBe(' 3 jan');
        expect(xAxisTickTexts[2].textContent)
          .toBe('Tis  5');
      });
    });

    it('Hides x axis tick labels when format is blank', () => {
      graph.destroy();
      const axisData = utils.deepClone(axisTimeSeries);
      axisData.x.ticks = {
        format: '',
      };
      graph = new Graph(getAxes(axisData));
      const xAxisElement = fetchElementByClass(styles.axisX);
      const xAxisTickTexts = xAxisElement.querySelectorAll('text');
      xAxisTickTexts.forEach((textElement) => {
        expect(textElement.innerHTML).toBe('');
      });
    });
    it('Creates x axis with LowerTickValues', () => {
      const localeAxisObj = utils.deepClone(axisTimeSeries);
      localeAxisObj.x = {
        type: 'timeseries',
        label: 'Some X Label',
        lowerLimit: new Date(2017, 0).toISOString(),
        upperLimit: new Date(2017, 6).toISOString(),
      };
      localeAxisObj.x.ticks = {
        format: '%b %Y',
        lowerStepTickValues: [
          new Date(2017, 1).toISOString(),
          new Date(2017, 3).toISOString(),
          new Date(2017, 5).toISOString(),
        ],
      };
      graph = new Graph(getAxes(localeAxisObj));
      const allXAxisElements = document.querySelectorAll(
                `.${styles.axisX}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      expect(
        allXAxisElements[0].childNodes[1].querySelector('text')
          .textContent,
      ).toBe('Feb 2017');
      expect(
        allXAxisElements[0].childNodes[2].querySelector('text')
          .textContent,
      ).toBe('Apr 2017');
      expect(
        allXAxisElements[0].childNodes[3].querySelector('text')
          .textContent,
      ).toBe('Jun 2017');
      const gridLowerStepElement = fetchElementByClass(
        styles.gridLowerStep,
      );
      expect(gridLowerStepElement.querySelectorAll('.tick').length).toBe(
        3,
      );
    });
    it('Creates x axis with UpperTickValues', () => {
      const localeAxisObj = utils.deepClone(axisTimeSeries);
      localeAxisObj.x = {
        type: 'timeseries',
        label: 'Some X Label',
        lowerLimit: new Date(2016, 11).toISOString(),
        upperLimit: new Date(2017, 6).toISOString(),
      };
      localeAxisObj.x.ticks = {
        format: '%b %Y',
        show: true,
        upperStepTickValues: [
          new Date(2016, 11).toISOString(),
          new Date(2018, 1).toISOString(),
        ],
      };
      graph = new Graph(getAxes(localeAxisObj));
      const allXAxisElements = document.querySelectorAll(
                `.${styles.axisX}`,
      );
      const start = allXAxisElements[0].childNodes[1].querySelector(
        'text',
      );
      const end = allXAxisElements[0].childNodes[2].querySelector('text');
      expect(start.textContent).toBe('Dec 2016');
      expect(end.textContent).toBe('Feb 2018');
      const gridUpperStepElement = fetchElementByClass(
        styles.gridUpperStep,
      );
      expect(gridUpperStepElement.querySelectorAll('.tick').length).toBe(
        2,
      );
    });
    it('Creates x axis with LowerTickValues, UpperTickValues and values in default locale', () => {
      const localeAxisObj = utils.deepClone(axisTimeSeries);
      localeAxisObj.x = {
        type: 'timeseries',
        label: 'Some X Label',
        lowerLimit: new Date(2016, 11).toISOString(),
        upperLimit: new Date(2018, 2).toISOString(),
      };
      localeAxisObj.x.ticks = {
        format: '%b %Y',
        show: true,
        lowerStepTickValues: [
          new Date(2017, 1).toISOString(),
          new Date(2017, 5).toISOString(),
          new Date(2017, 9).toISOString(),
        ],
        midpointTickValues: [
          new Date(2017, 3).toISOString(),
          new Date(2017, 7).toISOString(),
          new Date(2017, 11).toISOString(),
        ],
        upperStepTickValues: [
          new Date(2016, 11).toISOString(),
          new Date(2018, 1).toISOString(),
        ],
      };
      graph = new Graph(getAxes(localeAxisObj));

      const allXAxisElements = document.querySelectorAll(
                `.${styles.axisX}`,
      );
      const lowerAxis = allXAxisElements[0].childNodes[1].querySelector(
        'text',
      );
      const upperAxis = allXAxisElements[0].childNodes[4].querySelector(
        'text',
      );
      expect(lowerAxis.textContent).toBe('Feb 2017');
      expect(upperAxis.textContent).toBe('Dec 2016');
    });
  });
  describe('For default type', () => {
    it('Creates x axis with ticks in default locale', () => {
      graph.destroy();
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.x.lowerLimit = 1000;
      localeAxisObj.x.upperLimit = 20000;
      graph = new Graph(getAxes(localeAxisObj));
      graph.loadContent(
        new Line(
          getData([
            {
              x: 3500,
              y: 4,
            },
            {
              x: 15000,
              y: 7,
            },
          ]),
        ),
      );
      const xAxisElement = fetchElementByClass(styles.axisX);
      const tick = xAxisElement.querySelectorAll('.tick');
      expect(
        tick[tick.length - 1].querySelector('text').textContent,
      ).toBe('20,000');
    });
    it('Creates x axis with ticks in provided locale - DE', () => {
      graph.destroy();
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.x.lowerLimit = 1000;
      localeAxisObj.x.upperLimit = 20000;
      localeAxisObj.x.ticks = {
        format: 'n',
      };
      graph = new Graph(
        ({ locale: LOCALE.de_DE, ...getAxes(localeAxisObj) }),
      );
      graph.loadContent(
        new Line(
          getData([
            {
              x: 3500,
              y: 4,
            },
            {
              x: 15000,
              y: 7,
            },
          ]),
        ),
      );
      const xAxisElement = fetchElementByClass(styles.axisX);
      const tick = xAxisElement.querySelectorAll('.tick');
      expect(
        tick[tick.length - 1].querySelector('text').textContent,
      ).toContain('20.000');
    });
    it('Hides x axis tick labels when format is blank', () => {
      graph.destroy();
      const axisData = utils.deepClone(axisDefault);
      axisData.x.ticks = {
        format: '',
      };
      graph = new Graph(getAxes(axisData));
      const xAxisElement = fetchElementByClass(styles.axisX);
      const xAxisTickTexts = xAxisElement.querySelectorAll('text');
      xAxisTickTexts.forEach((textElement) => {
        expect(textElement.innerHTML).toBe('');
      });
    });
  });
  describe('When default d3 tick formatting for x axis is used and suppressTrailingZeros for x axis is set to true', () => {
    it("should suppress x axis tick values's trailing zeros", () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.x = {
        label: 'Some X Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        suppressTrailingZeros: true,
        ticks: {
          values: [0.0, 0.5, 1.0, 1.5, 2.0],
        },
      };
      graph = new Graph(
        ({
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allXAxisElements = document.querySelectorAll(`.${styles.axisX}`);

      // The first child element is the domain itself, and second child onwards denote the ticks
      const xTicks = [];
      for (let i = 1; i < allXAxisElements[0].childNodes.length; i += 1) {
        xTicks.push(parseFloat(allXAxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      xTicks.sort((a, b) => a - b);

      expect(xTicks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe('When default d3 tick formatting is used for x axis and suppressTrailingZeros for x axis is set to false', () => {
    it("should not suppress x axis tick values's trailing zeros", () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.x = {
        label: 'Some X Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        suppressTrailingZeros: false,
        ticks: {
          values: [0.0, 0.5, 1.0, 1.5, 2.0],
        },
      };
      graph = new Graph(
        ({
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );

      const allXAxisElements = document.querySelectorAll(`.${styles.axisX}`);
      const xTicks = [];

      // The first child element is the domain itself, and second child onwards denote the ticks
      for (let i = 1; i < allXAxisElements[0].childNodes.length; i += 1) {
        xTicks.push(parseFloat(allXAxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      xTicks.sort((a, b) => a - b);

      expect(xTicks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe("When default d3 tick formatting is not used for x axis and consumer specifies '~' in tick format", () => {
    it("should suppress x axis tick values's trailing zeros", () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.x = {
        label: 'Some X Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        ticks: {
          values: [0.0, 0.5, 1.0, 1.5, 2.0],
          format: '.1~f',
        },
      };
      graph = new Graph(
        ({
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allXAxisElements = document.querySelectorAll(
                `.${styles.axisX}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      const xTicks = [];
      for (let i = 1; i < allXAxisElements[0].childNodes.length; i += 1) {
        xTicks.push(parseFloat(allXAxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      xTicks.sort((a, b) => a - b);

      expect(xTicks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe("When default d3 tick formatting is not used for x axis and consumer does not specify '~' in tick format", () => {
    it("should not suppress x axis tick values's trailing zeros", () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.x = {
        label: 'Some X Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        ticks: {
          values: [0.0, 0.5, 1.0, 1.5, 2.0],
          format: '.1f',
        },
      };
      graph = new Graph(
        ({
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allXAxisElements = document.querySelectorAll(
                `.${styles.axisX}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      const xTicks = [];
      for (let i = 1; i < allXAxisElements[0].childNodes.length; i += 1) {
        xTicks.push(parseFloat(allXAxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      xTicks.sort((a, b) => a - b);

      expect(xTicks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe('When default d3 tick formatting for y axis is used and suppressTrailingZeros for y axis is set to true', () => {
    it("should suppress y axis tick values's trailing zeros", () => {
      graph.destroy();
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y = {
        label: 'Some Y Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        suppressTrailingZeros: true,
      };
      graph = new Graph(
        ({
          ticksCount: 3,
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allYAxisElements = document.querySelectorAll(
                `.${styles.axisY}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      const yTicks = [];
      for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
        yTicks.push(parseFloat(allYAxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      yTicks.sort((a, b) => a - b);

      expect(yTicks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe('When default d3 tick formatting is used for y axis and suppressTrailingZeros for y axis is set to false', () => {
    it("should not suppress y axis tick values's trailing zeros", () => {
      graph.destroy();
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y = {
        label: 'Some Y Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        suppressTrailingZeros: false,
      };
      graph = new Graph(
        ({
          ticksCount: 3,
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allYAxisElements = document.querySelectorAll(
                `.${styles.axisY}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      const yTicks = [];
      for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
        yTicks.push(parseFloat(allYAxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      yTicks.sort((a, b) => a - b);

      expect(yTicks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe("When default d3 tick formatting is not used for y axis and consumer specifies '~' in tick format", () => {
    it("should suppress y axis tick values's trailing zeros", () => {
      graph.destroy();
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y = {
        label: 'Some Y Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        ticks: {
          format: '.1~f',
        },
      };
      graph = new Graph(
        ({
          ticksCount: 3,
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allYAxisElements = document.querySelectorAll(
                `.${styles.axisY}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      const yTicks = [];
      for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
        yTicks.push(parseFloat(allYAxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      yTicks.sort((a, b) => a - b);

      expect(yTicks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe("When default d3 tick formatting is not used for y axis and consumer does not specify '~' in tick format", () => {
    it("should not suppress y axis tick values's trailing zeros", () => {
      graph.destroy();
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y = {
        label: 'Some Y Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        ticks: {
          format: '.1f',
        },
      };
      graph = new Graph(
        ({
          ticksCount: 3,
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allYAxisElements = document.querySelectorAll(
                `.${styles.axisY}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      const yTicks = [];
      for (let i = 1; i < allYAxisElements[0].childNodes.length; i += 1) {
        yTicks.push(parseFloat(allYAxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      yTicks.sort((a, b) => a - b);

      expect(yTicks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe('When default d3 tick formatting for y2 axis is used and suppressTrailingZeros for y2 is set to true', () => {
    it("should suppress y2 axis tick values's trailing zeros", () => {
      graph.destroy();
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y2 = {
        show: true,
        label: 'Some Y2 Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        suppressTrailingZeros: true,
      };
      graph = new Graph(
        ({
          ticksCount: 3,
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allY2AxisElements = document.querySelectorAll(
                `.${styles.axisY2}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      const y2Ticks = [];
      for (let i = 1; i < allY2AxisElements[0].childNodes.length; i += 1) {
        y2Ticks.push(parseFloat(allY2AxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      y2Ticks.sort((a, b) => a - b);

      expect(y2Ticks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe('When default d3 tick formatting is used for y2 axis and suppressTrailingZeros for y2 is set to false', () => {
    it("should not suppress y2 axis tick values's trailing zeros", () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y2 = {
        show: true,
        label: 'Some Y2 Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        suppressTrailingZeros: false,
      };
      graph = new Graph(
        ({
          ticksCount: 3,
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allY2AxisElements = document.querySelectorAll(
                `.${styles.axisY2}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      const y2Ticks = [];
      for (let i = 1; i < allY2AxisElements[0].childNodes.length; i += 1) {
        y2Ticks.push(parseFloat(allY2AxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      y2Ticks.sort((a, b) => a - b);

      expect(y2Ticks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe("When default d3 tick formatting is not used for y2 axis and consumer specifies '~' in tick format", () => {
    it("should suppress y2 axis tick values's trailing zeros", () => {
      graph.destroy();
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y2 = {
        show: true,
        label: 'Some Y2 Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        ticks: {
          format: '.1~f',
        },
      };
      graph = new Graph(
        ({
          ticksCount: 3,
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allY2AxisElements = document.querySelectorAll(
                `.${styles.axisY2}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      const y2Ticks = [];
      for (let i = 1; i < allY2AxisElements[0].childNodes.length; i += 1) {
        y2Ticks.push(parseFloat(allY2AxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      y2Ticks.sort((a, b) => a - b);

      expect(y2Ticks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe("When default d3 tick formatting is not used for y2 axis and consumer does not specify '~' in tick format", () => {
    it("should not suppress y2 axis tick values's trailing zeros", () => {
      const localeAxisObj = utils.deepClone(axisDefault);
      localeAxisObj.y2 = {
        show: true,
        label: 'Some Y2 Label',
        lowerLimit: 0.0,
        upperLimit: 2.0,
        ticks: {
          format: '.1f',
        },
      };
      graph = new Graph(
        ({
          ticksCount: 3,
          allowCalibration: false,
          ...getAxes(localeAxisObj),
        }),
      );
      const allY2AxisElements = document.querySelectorAll(
                `.${styles.axisY2}`,
      );
      // The first child element is the domain itself, and second child onwards denote the ticks
      const y2Ticks = [];
      for (let i = 1; i < allY2AxisElements[0].childNodes.length; i += 1) {
        y2Ticks.push(parseFloat(allY2AxisElements[0].childNodes[i].querySelector('text').textContent));
      }

      y2Ticks.sort((a, b) => a - b);

      expect(y2Ticks).toEqual([0.0, 0.5, 1.0, 1.5, 2.0]);
    });
  });
  describe('If axes width is 1024px and height is 230px', () => {
    beforeEach(() => {
      graph.destroy();
      axisDefault.y2 = {
        show: true,
        label: 'Some Y2 Label',
        lowerLimit: 0,
        upperLimit: 20,
      };
    });
    afterEach(() => {
      axisDefault.y2 = '';
    });
    it('Truncates if too long', (done) => {
      const labelAxisObj = utils.deepClone(axisDefault);
      labelAxisObj.y.label = largeLabel;
      labelAxisObj.y2.label = largeLabel;
      labelAxisObj.x.label = largeLabel;
      graph = new Graph(getAxes(labelAxisObj));
      expect(
        fetchElementByClass(styles.axisLabelX).querySelector('text')
          .textContent,
      ).toBe(
        'Project long display value which is only for testing, Project long display value which is only for testing Project lon...',
      );
      expect(
        fetchElementByClass(styles.axisLabelY).querySelector('text')
          .textContent,
      ).toBe('Project long display value w...');
      expect(
        fetchElementByClass(styles.axisLabelY2).querySelector('text')
          .textContent,
      ).toBe('Project long display value w...');
      done();
    });
    it('Does not truncate if not long', (done) => {
      graph = new Graph(getAxes(axisDefault));
      expect(
        fetchElementByClass(styles.axisLabelY).querySelector('text')
          .textContent,
      ).toBe('Some Y Label');
      expect(
        fetchElementByClass(styles.axisLabelX).querySelector('text')
          .textContent,
      ).toBe('Some X Label');
      expect(
        fetchElementByClass(styles.axisLabelY2).querySelector('text')
          .textContent,
      ).toBe('Some Y2 Label');
      done();
    });
  });
  describe('If axes width is 50px and height is 50px', () => {
    beforeEach(() => {
      graph.destroy();
      graphContainer.setAttribute('style', 'width: 50px; height: 50px');
      dimension.height = 50;
      axisDefault.y2 = {
        show: true,
        label: 'Some Y2 Label',
        lowerLimit: 0,
        upperLimit: 20,
      };
    });
    afterEach(() => {
      axisDefault.y2 = '';
    });
    it('Truncates if too long', (done) => {
      const labelAxisObj = utils.deepClone(axisDefault);
      labelAxisObj.y.label = largeLabel;
      labelAxisObj.y2.label = largeLabel;
      labelAxisObj.x.label = largeLabel;
      graph = new Graph(
        ({ dimension, ...getAxes(labelAxisObj), ...dimension }),
      );
      expect(
        fetchElementByClass(styles.axisLabelX).querySelector('text')
          .textContent,
      ).toBe('Project long d...');
      expect(
        fetchElementByClass(styles.axisLabelY).querySelector('text')
          .textContent,
      ).toBe('Projec...');
      expect(
        fetchElementByClass(styles.axisLabelY2).querySelector('text')
          .textContent,
      ).toBe('Projec...');
      done();
    });
    it('Does not truncate if not long', (done) => {
      const labelAxisObj = utils.deepClone(axisDefault);
      labelAxisObj.y.label = smallLabel;
      labelAxisObj.y2.label = smallLabel;
      labelAxisObj.x.label = smallLabel;
      graph = new Graph(
        ({ dimension, ...getAxes(labelAxisObj), ...dimension }),
      );
      expect(
        fetchElementByClass(styles.axisLabelX).querySelector('text')
          .textContent,
      ).toBe('hello!');
      expect(
        fetchElementByClass(styles.axisLabelY).querySelector('text')
          .textContent,
      ).toBe('hello!');
      expect(
        fetchElementByClass(styles.axisLabelY2).querySelector('text')
          .textContent,
      ).toBe('hello!');
      done();
    });
  });
  describe('If axes width is 400px and height is 400px', () => {
    beforeEach(() => {
      graph.destroy();
      graphContainer.setAttribute('style', 'width: 400px; height: 400px');
      dimension.height = 400;
      axisDefault.y2 = {
        show: true,
        label: 'Some Y2 Label',
        lowerLimit: 0,
        upperLimit: 20,
      };
    });
    afterEach(() => {
      axisDefault.y2 = '';
    });
    it('Truncates if too long', (done) => {
      const labelAxisObj = utils.deepClone(axisDefault);
      labelAxisObj.y.label = largeLabel;
      labelAxisObj.y2.label = largeLabel;
      labelAxisObj.x.label = largeLabel;
      graph = new Graph(
        ({ dimension, ...getAxes(labelAxisObj), ...dimension }),
      );
      expect(
        fetchElementByClass(styles.axisLabelX).querySelector('text')
          .textContent,
      ).toBe('Project long display value which ...');
      expect(
        fetchElementByClass(styles.axisLabelY).querySelector('text')
          .textContent,
      ).toBe('Project long display value which is only for testi...');
      expect(
        fetchElementByClass(styles.axisLabelY2).querySelector('text')
          .textContent,
      ).toBe('Project long display value which is only for testi...');
      done();
    });
    it('Does not truncate if not long', (done) => {
      graph = new Graph(getAxes(axisDefault));
      expect(
        fetchElementByClass(styles.axisLabelX).querySelector('text')
          .textContent,
      ).toBe('Some X Label');
      expect(
        fetchElementByClass(styles.axisLabelY).querySelector('text')
          .textContent,
      ).toBe('Some Y Label');
      expect(
        fetchElementByClass(styles.axisLabelY2).querySelector('text')
          .textContent,
      ).toBe('Some Y2 Label');
      done();
    });
  });
  describe('If axes width is 800px and height is 800px', () => {
    beforeEach(() => {
      graphContainer.setAttribute('style', 'width: 800px; height: 800px');
      dimension.height = 800;
      axisDefault.y2 = {
        show: true,
        label: 'Some Y2 Label',
        lowerLimit: 0,
        upperLimit: 20,
      };
    });
    afterEach(() => {
      axisDefault.y2 = '';
      graph.destroy();
    });
    it('Truncates if too long', (done) => {
      const labelAxisObj = utils.deepClone(axisDefault);
      labelAxisObj.y.label = largeLabel;
      labelAxisObj.y2.label = largeLabel;
      labelAxisObj.x.label = largeLabel;
      graph = new Graph(
        ({ dimension, ...getAxes(labelAxisObj), ...dimension }),
      );
      expect(
        fetchElementByClass(styles.axisLabelX).querySelector('text')
          .textContent,
      ).toBe(
        'Project long display value which is only for testing, Project long display value which ...',
      );
      expect(
        fetchElementByClass(styles.axisLabelY).querySelector('text')
          .textContent,
      ).toBe(
        'Project long display value which is only for testing, Project long display value which is only for t...',
      );
      expect(
        fetchElementByClass(styles.axisLabelY2).querySelector('text')
          .textContent,
      ).toBe(
        'Project long display value which is only for testing, Project long display value which is only for t...',
      );
      done();
    });
    it('Does not truncate if not long', (done) => {
      graph = new Graph(getAxes(axisDefault));
      expect(
        fetchElementByClass(styles.axisLabelY).querySelector('text')
          .textContent,
      ).toBe('Some Y Label');
      expect(
        fetchElementByClass(styles.axisLabelX).querySelector('text')
          .textContent,
      ).toBe('Some X Label');
      expect(
        fetchElementByClass(styles.axisLabelY2).querySelector('text')
          .textContent,
      ).toBe('Some Y2 Label');
      done();
    });
  });
  describe('If axes width is 1400px and height is 1400px', () => {
    beforeEach(() => {
      graphContainer.setAttribute(
        'style',
        'width: 1400px; height: 1400px',
      );
      dimension.height = 1400;
      axisDefault.y2 = {
        show: true,
        label: 'Some Y2 Label',
        lowerLimit: 0,
        upperLimit: 20,
      };
    });
    afterEach(() => {
      graph.destroy();
      axisDefault.y2 = '';
    });
    it('Truncates if too long', (done) => {
      const labelAxisObj = utils.deepClone(axisDefault);
      labelAxisObj.y.label = largeLabel;
      labelAxisObj.y2.label = largeLabel;
      labelAxisObj.x.label = largeLabel;
      graph = new Graph(
        ({ dimension, ...getAxes(labelAxisObj), ...dimension }),
      );
      expect(
        fetchElementByClass(styles.axisLabelX).querySelector('text')
          .textContent,
      ).toBe(
        'Project long display value which is only for testing, Project long display value which is only for testing Project long display value which is only for testing, Project ...',
      );
      expect(
        fetchElementByClass(styles.axisLabelY).querySelector('text')
          .textContent,
      ).toBe(
        'Project long display value which is only for testing, Project long display value which is only for testing Project long display value which is only for testing, Project long d...',
      );
      expect(
        fetchElementByClass(styles.axisLabelY2).querySelector('text')
          .textContent,
      ).toBe(
        'Project long display value which is only for testing, Project long display value which is only for testing Project long display value which is only for testing, Project long d...',
      );
      done();
    });
    it('Does not truncate if not long', (done) => {
      graph = new Graph(getAxes(axisDefault));
      expect(
        fetchElementByClass(styles.axisLabelX).querySelector('text')
          .textContent,
      ).toBe('Some X Label');
      expect(
        fetchElementByClass(styles.axisLabelY).querySelector('text')
          .textContent,
      ).toBe('Some Y Label');
      expect(
        fetchElementByClass(styles.axisLabelY2).querySelector('text')
          .textContent,
      ).toBe('Some Y2 Label');
      done();
    });
  });
  describe('Adds clickHandler for Label', () => {
    beforeEach(() => {
      graph.destroy();
      axisDefault.y2 = {
        show: true,
        label: 'Some Y2 Label',
        lowerLimit: 0,
        upperLimit: 20,
      };
    });
    afterEach(() => {
      axisDefault.y2 = '';
    });
    describe('when small label is provided and onLabelClick function is not provided', () => {
      it('should disable click functionality for label', (done) => {
        const onClickPrimaryFunctionSpy = sinon.spy();
        graph = new Graph(getAxes(axisDefault));
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelX} text`),
          'click',
          () => {
            expect(
              onClickPrimaryFunctionSpy.calledOnce,
            ).toBeFalsy();
            done();
          },
        );
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelY} text`),
          'click',
          () => {
            expect(
              onClickPrimaryFunctionSpy.calledOnce,
            ).toBeFalsy();
            done();
          },
        );
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelY2} text`),
          'click',
          () => {
            expect(
              onClickPrimaryFunctionSpy.calledOnce,
            ).toBeFalsy();
            done();
          },
        );
      });
    });
    describe('when small label and onLabelClick function is provided', () => {
      it('should disable click functionality for label', (done) => {
        const onClickPrimaryFunctionSpy = sinon.spy();
        const onClickSecondaryFunctionSpy = sinon.spy();
        const onClickThirdFunctionSpy = sinon.spy();
        graph.destroy();
        const labelAxisObj = utils.deepClone(axisDefault);
        labelAxisObj.x.onLabelClick = onClickPrimaryFunctionSpy;
        labelAxisObj.y.onLabelClick = onClickSecondaryFunctionSpy;
        labelAxisObj.y2.onLabelClick = onClickThirdFunctionSpy;
        graph = new Graph(getAxes(labelAxisObj));
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelX} text`),
          'click',
          () => {
            expect(
              onClickPrimaryFunctionSpy.calledOnce,
            ).toBeFalsy();
            done();
          },
        );
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelY} text`),
          'click',
          () => {
            expect(
              onClickPrimaryFunctionSpy.calledOnce,
            ).toBeFalsy();
            done();
          },
        );
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelY2} text`),
          'click',
          () => {
            expect(
              onClickPrimaryFunctionSpy.calledOnce,
            ).toBeFalsy();
            done();
          },
        );
      });
    });
    describe('when large label and onLabelClick function is provided', () => {
      it('should enable click functionality for truncated label', (done) => {
        const onClickSecondaryFunctionSpy = sinon.spy();
        const onClickThirdFunctionSpy = sinon.spy();
        const onClickFourthFunctionSpy = sinon.spy();
        graph.destroy();
        const labelAxisObj = utils.deepClone(axisDefault);
        labelAxisObj.y.label = largeLabel;
        labelAxisObj.x.label = largeLabel;
        labelAxisObj.y2.label = largeLabel;
        labelAxisObj.x.onLabelClick = onClickSecondaryFunctionSpy;
        labelAxisObj.y.onLabelClick = onClickFourthFunctionSpy;
        labelAxisObj.y2.onLabelClick = onClickThirdFunctionSpy;
        graph = new Graph(getAxes(labelAxisObj));
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelX} text`),
          'click',
          () => {
            expect(
              onClickSecondaryFunctionSpy.calledOnce,
            ).toBeTruthy();
            expect(
              onClickSecondaryFunctionSpy.getCall(0).args[0],
            ).toBe(largeLabel);
            done();
          },
        );
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelY} text`),
          'click',
          () => {
            expect(
              onClickFourthFunctionSpy.calledOnce,
            ).toBeTruthy();
            expect(
              onClickFourthFunctionSpy.getCall(0).args[0],
            ).toBe(largeLabel);
            done();
          },
        );
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelY2} text`),
          'click',
          () => {
            expect(onClickThirdFunctionSpy.calledOnce).toBeTruthy();
            expect(onClickThirdFunctionSpy.getCall(0).args[0]).toBe(
              largeLabel,
            );
            done();
          },
        );
      });
    });
    describe('when large label is provided and onLabelClick function is not provided', () => {
      it('should enable click functionality for truncated label', (done) => {
        const onClickSecondaryFunctionSpy = sinon.spy();
        const onClickThirdFunctionSpy = sinon.spy();
        const onClickFourthFunctionSpy = sinon.spy();
        graph.destroy();
        const labelAxisObj = utils.deepClone(axisDefault);
        labelAxisObj.y.label = largeLabel;
        labelAxisObj.x.label = largeLabel;
        labelAxisObj.y2.label = largeLabel;
        graph = new Graph(getAxes(labelAxisObj));
        d3.select(fetchElementByClass(`${styles.axisLabelX} text`)).on(
          'click',
          onClickSecondaryFunctionSpy(labelAxisObj.x.label, 'x'),
        );
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelX} text`),
          'click',
          () => {
            expect(
              onClickSecondaryFunctionSpy.calledOnce,
            ).toBeTruthy();
            expect(
              onClickSecondaryFunctionSpy.getCall(0).args[0],
            ).toBe(largeLabel);
            done();
          },
        );
        d3.select(fetchElementByClass(`${styles.axisLabelY} text`)).on(
          'click',
          onClickThirdFunctionSpy(labelAxisObj.y.label, 'y'),
        );
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelY} text`),
          'click',
          () => {
            expect(
              onClickSecondaryFunctionSpy.calledOnce,
            ).toBeTruthy();
            expect(
              onClickSecondaryFunctionSpy.getCall(0).args[0],
            ).toBe(largeLabel);
            done();
          },
        );
        d3.select(fetchElementByClass(`${styles.axisLabelY2} text`)).on(
          'click',
          onClickFourthFunctionSpy(labelAxisObj.y2.label, 'y2'),
        );
        triggerEvent(
          fetchElementByClass(`${styles.axisLabelY2} text`),
          'click',
          () => {
            expect(
              onClickSecondaryFunctionSpy.calledOnce,
            ).toBeTruthy();
            expect(
              onClickSecondaryFunctionSpy.getCall(0).args[0],
            ).toBe(largeLabel);
            done();
          },
        );
      });
    });
  });
  describe('when graph is loaded', () => {
    it('should add div element with display as none for the popup tooltip', () => {
      graph = new Graph(getAxes(axisDefault));
      const tooltipElement = fetchElementByClass(
        styles.labelPopupTooltip,
      );
      expect(tooltipElement.style.display).toBe('none');
    });
    it('should add div element for the popup tooltip', () => {
      graph = new Graph(getAxes(axisDefault));
      expect(
        fetchElementByClass(styles.labelPopupTooltip),
      ).not.toBeNull();
    });
    describe('when y2Axis is true', () => {
      beforeEach(() => {
        const axisObj = utils.deepClone(axisDefault);
        axisObj.y2 = {
          show: true,
          label: 'y2 axis',
          lowerLimit: 11,
          upperLimit: 25,
        };
        graph = new Graph({ ...getAxes(axisObj) });
      });
      afterEach(() => {
        graph.destroy();
      });
      it('should add the correct transform point to y-axis label shape container', () => {
        expect(
          getSVGAnimatedTransformList(
            getCurrentTransform(fetchElementByClass(styles.axisLabelYShapeContainer)),
          ).translate[0],
        ).toBe(25.5);
        expect(
          getSVGAnimatedTransformList(
            getCurrentTransform(fetchElementByClass(styles.axisLabelYShapeContainer)),
          ).translate[1],
        ).toBe(117.5);
      });
      it('should add the correct transform point to y2-axis label shape container', () => {
        expect(
          getSVGAnimatedTransformList(
            getCurrentTransform(fetchElementByClass(styles.axisLabelY2ShapeContainer)),
          ).translate[0],
        ).toBe(991.375);
        expect(
          getSVGAnimatedTransformList(
            getCurrentTransform(fetchElementByClass(styles.axisLabelY2ShapeContainer)),
          ).translate[1],
        ).toBe(117.5);
      });
    });
  });
  describe('when graph is destroyed', () => {
    it('should remove div element for the popup tooltip', () => {
      graph.destroy();
      expect(fetchElementByClass(styles.labelPopupTooltip)).toBeNull();
    });
  });
});
