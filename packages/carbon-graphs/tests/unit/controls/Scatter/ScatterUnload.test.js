'use strict';

import Graph from '../../../../src/js/controls/Graph/Graph';
import Scatter from '../../../../src/js/controls/Scatter';
import constants from '../../../../src/js/helpers/constants';
import styles from '../../../../src/js/helpers/styles';
import {
  axisDefault,
  fetchElementByClass,
  getAxes,
  getInput,
  inputSecondary,
  valuesDefault,
} from './helpers';

const modules = {
  Graph,
  Scatter,
  constants,
  styles,
  axisDefault,
  fetchElementByClass,
  getAxes,
  getInput,
  inputSecondary,
  valuesDefault,
}


describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });
});

describe('Scatter - Unload', () => {
  let graphDefault;
  let scatterGraphContainer;
  beforeAll(async () => {
    await page.goto('http://localhost:3000/packages/carbon-graphs/tests/unit/helpers/testPage.html');
//    await page.addScriptTag({content: modules})
    await page.addScriptTag({content: Graph})
//    await page.addScriptTag({path: 'packages/carbon-graphs/src/js/controls/Graph/Graph.js'})
    //    await page.addScriptTag({content: Scatter})
//    await page.addScriptTag({content: constants})
//    await page.addScriptTag({content: {
//      axisDefault,
//      fetchElementByClass,
//      getAxes,
//      getInput,
//      inputSecondary,
//      valuesDefault,
//    }})
  });

  beforeEach(async () => {

//    let graph = new Graph();

//    console.log(await page.title());
    const x = await page.evaluate( function() {
      let graph = 3;
      //      scatterGraphContainer = document.createElement('div');
      //      scatterGraphContainer.id = 'testScatter_carbon';
      //      scatterGraphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
      //          document.body.appendChild(scatterGraphContainer);


      console.log(window.Graph);

//      graph = new Graph();
//      return Graph;
      return window;
    });

    console.log(x);
  });
  afterEach(() => {
    //    document.body.innerHTML = '';
  });

  it.only('returns the scatter instance', async () => {
    const getPTag = await page.waitForSelector('#unit-test-graph-container');
//    console.log(getPTag);

        await page.evaluate(() => {
//          scatterGraphContainer = document.createElement('div');
//          scatterGraphContainer.id = 'testScatter_carbon';
//          scatterGraphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
//          document.body.appendChild(scatterGraphContainer);
//          graphDefault = new Graph(getAxes(axisDefault));
//          const scatter = new Scatter(getInput(valuesDefault, false, false));
//          graphDefault.loadContent(scatter);
//          const unloadedScatter = scatter.unload(graphDefault);
//          expect(unloadedScatter).toBeInstanceOf(Scatter);
        });

    //
    //    const scatter = new Scatter(getInput(valuesDefault, false, false));
    //    graphDefault.loadContent(scatter);
    //    const unloadedScatter = scatter.unload(graphDefault);
    //    expect(unloadedScatter instanceof Scatter);
  });
  it('clears the graph', () => {
    const scatter = new Scatter(getInput(valuesDefault, false, false));
    graphDefault.loadContent(scatter);
    scatter.unload(graphDefault);
    const scatterContentContainer = fetchElementByClass(
      scatterGraphContainer,
      styles.scatterGraphContent,
    );
    expect(scatterContentContainer).toBeNull();
  });
  it('removes the legend from graph', () => {
    const graphLegend = fetchElementByClass(
      scatterGraphContainer,
      styles.legend,
    );
    const scatterLegendItem = fetchElementByClass(
      scatterGraphContainer,
      styles.legendItem,
    );
    expect(graphLegend).not.toBeNull();
    expect(scatterLegendItem).toBeNull();
  });
  it('resets the scatter graph instance properties', () => {
    const scatter = new Scatter(getInput(valuesDefault, false, false));
    graphDefault.loadContent(scatter);
    scatter.unload(graphDefault);
    expect(scatter.dataTarget).toEqual({});
    expect(scatter.config).toEqual({});
  });
  describe('Removes label shape from label container', () => {
    let graph;
    let scatterPrimary;
    let scatterSecondary;
    beforeEach(() => {
      graphDefault.destroy();
      graph = new Graph(getAxes(axisDefault));
      scatterPrimary = new Scatter(
        getInput(valuesDefault, true, true, true),
      );
      scatterSecondary = new Scatter(inputSecondary);
      graph.loadContent(scatterPrimary);
      graph.loadContent(scatterSecondary);
    });
    it('Verifies content is present', () => {
      expect(
        graph.axesLabelShapeGroup[constants.Y_AXIS],
      ).not.toBeUndefined();
      expect(
        graph.axesLabelShapeGroup[constants.Y2_AXIS],
      ).not.toBeUndefined();
    });
    it('For Y axis', () => {
      graph.unloadContent(scatterSecondary);
      const labelShapeContainer = fetchElementByClass(
        scatterGraphContainer,
        styles.axisLabelYShapeContainer,
      );
      expect(labelShapeContainer.children.length).toBe(0);
    });
    it('For Y axis with multiple data set', () => {
      graph.loadContent(
        new Scatter({
          key: 'uid_3',
          label: {
            display: 'Data Label B',
          },
          values: valuesDefault,
        }),
      );
      graph.unloadContent(scatterSecondary);
      const labelShapeContainer = fetchElementByClass(
        scatterGraphContainer,
        styles.axisLabelYShapeContainer,
      );
      expect(labelShapeContainer.children.length).toBe(1);
      expect(labelShapeContainer.children[0].tagName).toBe('svg');
      expect(labelShapeContainer.children[0].getAttribute('x')).toBe('0');
      expect(
        labelShapeContainer.children[0].getAttribute('aria-describedby'),
      ).toBe('uid_3');
    });
    it('For Y2 axis', () => {
      graph.unloadContent(scatterPrimary);
      const labelShapeContainer = fetchElementByClass(
        scatterGraphContainer,
        styles.axisLabelY2ShapeContainer,
      );
      expect(labelShapeContainer.children.length).toBe(0);
    });
    it('For Y2 axis with multiple data set', () => {
      graph.loadContent(
        new Scatter({
          key: 'uid_4',
          label: {
            display: 'Data Label C',
          },
          yAxis: 'y2',
          values: valuesDefault,
        }),
      );
      graph.unloadContent(scatterPrimary);
      const labelShapeContainer = fetchElementByClass(
        scatterGraphContainer,
        styles.axisLabelY2ShapeContainer,
      );
      expect(labelShapeContainer.children.length).toBe(1);
      expect(labelShapeContainer.children[0].tagName).toBe('svg');
      expect(labelShapeContainer.children[0].getAttribute('x')).toBe('0');
      expect(
        labelShapeContainer.children[0].getAttribute('aria-describedby'),
      ).toBe('uid_4');
    });
  });
});
