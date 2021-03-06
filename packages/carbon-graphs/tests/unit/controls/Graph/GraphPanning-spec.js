'use strict';

import * as d3 from 'd3';
import Graph from '../../../../src/js/controls/Graph/index';
import styles from '../../../../src/js/helpers/styles';
import {
  getSVGAnimatedTransformList,
} from '../../../../src/js/helpers/transformUtils';
import {
  delay,
  loadCustomJasmineMatcher,
  PADDING_BOTTOM,
  toNumber,
  triggerEvent,
} from '../../helpers/commonHelpers';
import {
  axisDefault,
  axisTimeseriesWithDateline,
  axisDefaultWithPanning,
  axisDefaultWithoutPanning,
  axisTimeseriesWithEventline,
  fetchElementByClass,
  getAxes,
} from './helpers';
import {
  COLORS,
} from '../../../../src/js/helpers/constants';
import utils from '../../../../src/js/helpers/utils';

describe('Graph - Panning', () => {
  let graph = null;
  let graphContainer;
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
    graphContainer = document.createElement('div');
    graphContainer.id = 'testGraph_carbon';
    graphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    graphContainer.setAttribute('class', 'carbon-test-class');
    document.body.appendChild(graphContainer);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('When enabled', () => {
    beforeEach(() => {
      graph = new Graph(axisDefaultWithPanning);
    });
    it('Check if clamp is false if pan is enabled', () => {
      expect(graph.scale.x.clamp()).toEqual(false);
    });
    it('Check if different clipPath for dateline is created', () => {
      const defsElement = fetchElementByClass(styles.canvas).firstChild;
      expect(defsElement.childElementCount).toBe(2);
      expect(defsElement.nodeName).toBe('defs');
      expect(defsElement.lastChild.nodeName).toBe('clipPath');
      expect(defsElement.lastChild.firstChild.nodeName).toBe('rect');
      expect(defsElement.lastChild.id).toContain('-dateline-clip');
    });
    it('Check the height for dateline defs is proper', () => {
      const defsElement = fetchElementByClass(styles.canvas).firstChild;
      const shapeHeightArr = [];
      d3.selectAll(`.${styles.datelinePoint}`).each(function () {
        const shapeHeight = this.getBBox().height;
        shapeHeightArr.push(shapeHeight);
      });
      const datelineIndicatorHeight = Math.max(...shapeHeightArr);
      const datelineDefsHeight = graph.config.height + Math.floor(datelineIndicatorHeight / 2);
      expect(
        defsElement.lastChild.firstChild.getAttribute('height'),
      ).toBe(datelineDefsHeight.toString());
    });
    it('DatelineGroup translates properly when panning is enabled', (done) => {
      const datelineGroup = fetchElementByClass(styles.datelineGroup);
      delay(() => {
        const {
          translate,
        } = getSVGAnimatedTransformList(
          datelineGroup.getAttribute('transform'),
        );
        expect(toNumber(translate[0], 10)).toBeCloserTo(72);
        expect(toNumber(translate[1], 10)).toBeCloseTo(PADDING_BOTTOM);
        done();
      });
    });
    it('EventlineGroup translates properly when panning is enabled', (done) => {
      if (graph) {
        graph.destroy();
      }
      graph = new Graph(axisTimeseriesWithEventline);
      const eventlineGroup = fetchElementByClass(styles.eventlineGroup);
      delay(() => {
        const {
          translate,
        } = getSVGAnimatedTransformList(
          eventlineGroup.getAttribute('transform'),
        );
        expect(toNumber(translate[0], 10)).toBeCloserTo(72);
        expect(toNumber(translate[1], 10)).toBeCloseTo(PADDING_BOTTOM);
        done();
      });
    });
    it('should transform x-axis to the appropriate position', (done) => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefault);
      axisObj.x.label = ' ';
      graph = new Graph({
        ...getAxes(axisObj),
      });
      expect(
        getSVGAnimatedTransformList(
          fetchElementByClass(styles.axisX).getAttribute(
            'transform',
          ),
        ).translate[0],
      ).toBeCloserTo(60);
      const panData = {
        key: 'uid_1',
        values: [{
          x: '2016-03-03T12:00:00Z',
          y: 2,
        },
        {
          x: '2016-04-03T12:00:00Z',
          y: 20,
        },
        ],
        xLabel: 'updated xLabel',
      };
      axisObj.x.label = ' ';
      graph.reflow(panData);
      graph.resize();
      triggerEvent(window, 'resize', () => {
        expect(
          getSVGAnimatedTransformList(
            fetchElementByClass(styles.axisX).getAttribute(
              'transform',
            ),
          ).translate[0],
        ).toBeCloserTo(60);
        done();
      });
    });
    it('should transform y-axis to the appropriate position', (done) => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefault);
      axisObj.y.label = ' ';
      graph = new Graph({
        ...getAxes(axisObj),
      });
      expect(
        getSVGAnimatedTransformList(
          fetchElementByClass(styles.axisY).getAttribute(
            'transform',
          ),
        ).translate[0],
      ).toBeCloserTo(68);
      const panData = {
        key: 'uid_1',
        values: [{
          x: '2016-03-03T12:00:00Z',
          y: 2,
        },
        {
          x: '2016-04-03T12:00:00Z',
          y: 20,
        },
        ],
        yLabel: 'updated yLabel',
      };
      graph.reflow(panData);
      graph.resize();
      triggerEvent(window, 'resize', () => {
        expect(
          getSVGAnimatedTransformList(
            fetchElementByClass(styles.axisY).getAttribute(
              'transform',
            ),
          ).translate[0],
        ).toBeCloserTo(68);
        done();
      });
    });
    it('should transform y2-axis to the appropriate position', (done) => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefault);
      axisObj.y2 = {
        show: true,
        label: ' ',
        lowerLimit: 11,
        upperLimit: 25,
      };
      graph = new Graph({
        ...getAxes(axisObj),
      });
      expect(
        getSVGAnimatedTransformList(
          fetchElementByClass(styles.axisY2).getAttribute(
            'transform',
          ),
        ).translate[0],
      ).toBeCloserTo(930);
      const panData = {
        key: 'uid_1',
        values: [{
          x: '2016-03-03T12:00:00Z',
          y: 2,
        },
        {
          x: '2016-04-03T12:00:00Z',
          y: 20,
        },
        ],
        y2Label: 'updated y2Label',
      };
      graph.reflow(panData);
      graph.resize();
      triggerEvent(window, 'resize', () => {
        expect(
          getSVGAnimatedTransformList(
            fetchElementByClass(styles.axisY2).getAttribute(
              'transform',
            ),
          ).translate[0],
        ).toBeCloserTo(930);
        done();
      });
    });
    it('should update height after x label is added', (done) => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefault);
      axisObj.x.label = ' ';
      graph = new Graph({
        ...getAxes(axisObj),
      });
      const initialHeight = +fetchElementByClass(styles.canvas).getAttribute('height');
      expect(initialHeight).toEqual(
        parseInt(graph.config.canvasHeight, 10),
      );
      const panData = {
        key: 'uid_1',
        values: [{
          x: '2016-03-03T12:00:00Z',
          y: 2,
        },
        {
          x: '2016-04-03T12:00:00Z',
          y: 20,
        },
        ],
        xLabel: 'updated xLabel',
      };
      graph.reflow(panData);
      graph.resize();
      const newHeight = +fetchElementByClass(styles.canvas).getAttribute('height');
      triggerEvent(window, 'resize', () => {
        expect(newHeight)
          .toBeGreaterThan(initialHeight);
        done();
      });
    });
    it('should update contentContainer after y label is added', (done) => {
      graph.destroy();
      const axisObj = utils.deepClone(axisDefault);
      axisObj.y.label = ' ';
      graph = new Graph({
        ...getAxes(axisObj),
      });
      const containerX = fetchElementByClass(styles.contentContainer).getAttribute('x');
      expect(parseInt(containerX, 10))
        .toBeCloserTo(graph.config.axisSizes.y + graph.config.axisLabelWidths.y);
      const panData = {
        key: 'uid_1',
        values: [{
          x: '2016-03-03T12:00:00Z',
          y: 2,
        },
        {
          x: '2016-04-03T12:00:00Z',
          y: 20,
        },
        ],
        yLabel: 'updated yLabel',
      };
      graph.reflow(panData);
      const regionElementAfterPanning = fetchElementByClass(styles.contentContainer);
      triggerEvent(window, 'resize', () => {
        expect(regionElementAfterPanning.getAttribute('x'))
          .toEqual(containerX);
        done();
      });
    });
    describe('should update the eventline', () => {
      beforeEach(() => {
        if (graph) {
          graph.destroy();
        }
        graph = new Graph(axisTimeseriesWithEventline);
      });
      it('When eventline is passed, when creating the graph', () => {
        let eventlines = document.querySelectorAll(`.${styles.eventline}`);
        expect(eventlines.length).toBe(1);
        const panData = {
          eventline: [{
            color: COLORS.GREY,
            style: {
              strokeDashArray: '4,4',
            },
            value: new Date(2016, 9, 28).toISOString(),
          },
          {
            color: COLORS.GREY,
            style: {
              strokeDashArray: '4,4',
            },
            value: new Date(2016, 10, 28).toISOString(),
          },
          ],
        };
        graph.reflow(panData);
        eventlines = document.querySelectorAll(`.${styles.eventline}`);
        expect(eventlines.length).toBe(2);
      });
      it('Removes the eventline when empty dataset is passed', () => {
        let eventlines = document.querySelectorAll(`.${styles.eventline}`);
        expect(eventlines.length).toBe(1);
        const panData = {
          eventline: [],
        };
        graph.reflow(panData);
        eventlines = document.querySelectorAll(`.${styles.eventline}`);
        expect(eventlines.length).toBe(0);
      });
    });
    describe('should not update the eventline', () => {
      beforeEach(() => {
        if (graph) {
          graph.destroy();
        }
      });
      it('When eventline attribute is not passed or passed as null to reflow data', () => {
        graph = new Graph(axisTimeseriesWithEventline);
        let eventlines = document.querySelectorAll(`.${styles.eventline}`);
        expect(eventlines.length).toBe(1);
        const panData = {
          eventline: null,
        };
        graph.reflow(panData);
        eventlines = document.querySelectorAll(`.${styles.eventline}`);
        expect(eventlines.length).toBe(1);
      });
      it('When eventline is not passed while creating the graph', () => {
        graph = new Graph(axisTimeseriesWithDateline);
        let eventlines = document.querySelectorAll(`.${styles.eventline}`);
        expect(eventlines.length).toBe(0);
        const panData = {
          eventline: [{
            color: COLORS.GREY,
            style: {
              strokeDashArray: '4,4',
            },
            value: new Date(2016, 9, 28).toISOString(),
          },
          {
            color: COLORS.GREY,
            style: {
              strokeDashArray: '4,4',
            },
            value: new Date(2016, 10, 28).toISOString(),
          },
          ],
        };
        graph.reflow(panData);
        eventlines = document.querySelectorAll(`.${styles.eventline}`);
        expect(eventlines.length).toBe(0);
      });
    });
  });
  describe('When disabled', () => {
    beforeEach(() => {
      graph = new Graph(axisDefaultWithoutPanning);
    });
    it('Check if clamp is true if pan is disabled', () => {
      expect(graph.scale.x.clamp()).toEqual(true);
    });
    it('Check if different clipPath for dateline is not created', () => {
      const defsElement = fetchElementByClass(styles.canvas).firstChild;
      expect(defsElement.childElementCount).toBe(1);
      expect(defsElement.nodeName).toBe('defs');
      expect(defsElement.lastChild.nodeName).toBe('clipPath');
      expect(defsElement.lastChild.firstChild.nodeName).toBe('rect');
    });
    it('Dateline group translates properly when pan is disabled', (done) => {
      const datelineGroup = fetchElementByClass(styles.datelineGroup);
      delay(() => {
        const {
          translate,
        } = getSVGAnimatedTransformList(
          datelineGroup.getAttribute('transform'),
        );
        expect(toNumber(translate[0], 10)).toBeCloserTo(72);
        expect(toNumber(translate[1], 10)).toBeCloseTo(PADDING_BOTTOM);
        done();
      });
    });
  });
  describe('When undefined', () => {
    beforeEach(() => {
      graph = new Graph(axisTimeseriesWithDateline);
    });
    it('Check if clamp is true if pan is undefined', () => {
      expect(graph.scale.x.clamp()).toEqual(true);
    });
    it('Check if different clipPath for dateline is not created', () => {
      const defsElement = fetchElementByClass(styles.canvas).firstChild;
      expect(defsElement.childElementCount).toBe(1);
      expect(defsElement.nodeName).toBe('defs');
      expect(defsElement.lastChild.nodeName).toBe('clipPath');
      expect(defsElement.lastChild.firstChild.nodeName).toBe('rect');
    });
    it('Dateline group translates properly when pan is undefined', (done) => {
      const datelineGroup = fetchElementByClass(styles.datelineGroup);
      delay(() => {
        const {
          translate,
        } = getSVGAnimatedTransformList(
          datelineGroup.getAttribute('transform'),
        );
        expect(toNumber(translate[0], 10)).toBeCloserTo(72);
        expect(toNumber(translate[1], 10)).toBeCloseTo(PADDING_BOTTOM);
        done();
      });
    });
  });
});
