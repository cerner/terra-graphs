'use strict';

import Bar from '../../../../src/js/controls/Bar/Bar';
import Graph from '../../../../src/js/controls/Graph/Graph';
import styles from '../../../../src/js/helpers/styles';
import constants from '../../../../src/js/helpers/constants';
import {
  axisDefault,
  fetchElementByClass,
  getAxes,
  getInput,
  valuesDefault,
} from './helpers';

describe('Bar - unload', () => {
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

  describe('When graph is unloaded off input', () => {
    let graphDefault;
    let bar;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));
      bar = new Bar(getInput(valuesDefault, false, false));
      graphDefault.loadContent(bar);
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });

    it('returns the bar instance', () => {
      const unloadedBar = bar.unload(graphDefault);
      expect(unloadedBar).toBeInstanceOf(Bar);
    });
    it('clears the graph', () => {
      graphDefault.unloadContent(bar);
      const barContentContainer = fetchElementByClass(barGraphContainer, styles.barGraphContent);
      expect(barContentContainer).toBeNull();
    });
    it('removes the legend from graph', () => {
      graphDefault.unloadContent(bar);
      const graphLegend = fetchElementByClass(barGraphContainer, styles.legend);
      const barLegendItem = fetchElementByClass(barGraphContainer, styles.legendItem);
      expect(graphLegend).not.toBeNull();
      expect(barLegendItem).toBeNull();
    });
    it('resets the bar graph instance properties', () => {
      graphDefault.unloadContent(bar);
      expect(bar.dataTarget).toEqual({});
      expect(bar.config).toEqual({});
    });
  });

  describe('Removing label shape from label container', () => {
    let graph;
    let barPrimary;
    let barSecondary;
    let graphDefault;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));
      graph = new Graph(getAxes(axisDefault));
      barPrimary = new Bar(getInput(valuesDefault, true, true, true));
      barSecondary = new Bar(getInput(valuesDefault, true, true, false, 'uid_2'));
      graph.loadContent(barPrimary);
      graph.loadContent(barSecondary);
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('verifies content is present', () => {
      expect(graph.axesLabelShapeGroup[constants.Y_AXIS]).not.toBeUndefined();
      expect(graph.axesLabelShapeGroup[constants.Y2_AXIS]).not.toBeUndefined();
    });
    it('removes label shape for Y axis', () => {
      graph.unloadContent(barSecondary);
      const labelShapeContainer = fetchElementByClass(barGraphContainer, styles.axisLabelYShapeContainer);
      expect(labelShapeContainer.children.length).toBe(0);
    });

    // TODO: fix failing test
    it.skip('removes label shape for Y axis with multiple data sets', () => {
      graph.loadContent(
        new Bar(getInput(valuesDefault, true, true, false, 'uid_3')),
      );
      graph.unloadContent(barSecondary);
      const labelShapeContainer = fetchElementByClass(barGraphContainer, styles.axisLabelYShapeContainer);
      expect(labelShapeContainer.children.length).toBe(1);
      expect(labelShapeContainer.children[0].tagName).toBe('svg');
      expect(labelShapeContainer.children[0].getAttribute('x')).toBe('0');
      expect(
        labelShapeContainer.children[0].getAttribute('aria-describedby'),
      ).toBe('uid_3');
    });
    it('removes label shape for Y2 axis', () => {
      graph.unloadContent(barPrimary);
      const labelShapeContainer = fetchElementByClass(barGraphContainer, styles.axisLabelY2ShapeContainer);
      expect(labelShapeContainer.children.length).toBe(0);
    });

    // TODO: fix failing test
    it.skip('removes label shape for Y2 axis with multiple data sets', () => {
      graph.loadContent(new Bar(getInput(valuesDefault, true, true, true, 'uid_4')));
      graph.unloadContent(barPrimary);
      const labelShapeContainer = fetchElementByClass(barGraphContainer, styles.axisLabelY2ShapeContainer);
      expect(labelShapeContainer.children.length).toBe(1);
      expect(labelShapeContainer.children[0].tagName).toBe('svg');
      expect(labelShapeContainer.children[0].getAttribute('x')).toBe('0');
      expect(labelShapeContainer.children[0].getAttribute('aria-describedby')).toBe('uid_4');
    });
  });
});
