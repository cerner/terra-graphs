/* eslint-disable no-unused-expressions */

'use strict';

import Bar from '../../../../src/js/controls/Bar/Bar';
import Graph from '../../../../src/js/controls/Graph/Graph';
import styles from '../../../../src/js/helpers/styles';
import {
  getCurrentTransform,
  getSVGAnimatedTransformList,
  round2Decimals,
} from '../../../../src/js/helpers/transformUtils';
import utils from '../../../../src/js/helpers/utils';
import { toNumber, triggerEvent } from '../../helpers/commonHelpers';
import {
  axisDefault,
  axisInfoRowDefault,
  axisTimeSeries,
  fetchAllElementsByClass,
  fetchElementByClass,
  getAxes,
  getInput,
  regionsDefault,
  valuesDefault,
  valuesNegativeDefault,
  valuesOutliers,
  valuesTimeSeries,
} from './helpers';

describe('Stacked Bar', () => {
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

  describe('when graph is loaded with 2 inputs with group is unique key', () => {
    let bar1;
    let bar2;
    let graphDefault;
    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));
      bar1 = new Bar(getInput(valuesDefault, false, false));

      let graphContent = graphDefault.loadContent(bar1);
      bar1.redraw(graphContent);

      const input = utils.deepClone(getInput(valuesDefault, false, false, false, 'uid_2'));
      input.group = 'uid_1';

      bar2 = new Bar(input);

      graphContent = graphDefault.loadContent(bar2);

      bar2.redraw(graphContent);
      bar1.redraw(graphContent);
    });
    afterEach(() => {
      graphDefault.destroy();
    });
    it('Both inputs are loaded', () => {
      const barContentContainer = fetchAllElementsByClass(barGraphContainer, styles.barGraphContent);
      expect(barContentContainer).not.toBeNull();
      expect(barContentContainer[0].getAttribute('aria-describedby')).toBe('uid_2');
      expect(barContentContainer[1].getAttribute('aria-describedby')).toBe('uid_1');
    });

    it('first input gets stacked on top of second input', () => {
      let barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      const yInput2 = toNumber(barsContainer[0].getAttribute('y'));
      graphDefault.resize();
      barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      const heightInput1 = toNumber(
        barsContainer[0].getAttribute('height'),
      );
      // y Range of first input should be hRange of second input - height of first input (offset)
      expect(toNumber(barsContainer[3].getAttribute('y'))).toBe(yInput2 - heightInput1);
      // x range of both inputs should be equal
      expect(toNumber(barsContainer[0].getAttribute('x'))).toEqual(toNumber(barsContainer[3].getAttribute('x')));
      expect(toNumber(barsContainer[0].getAttribute('height'))).toBe(heightInput1);
    });

    it('when graph is unloaded off input1, unloads first content from graph', () => {
      graphDefault.unloadContent(bar1);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(3);
    });

    it('when graph is unloaded off input2, unloads second content from graph', () => {
      graphDefault.unloadContent(bar2);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(3);
    });

    it('when graph is unloaded off both inputs, unloads both content from graph', () => {
      graphDefault.unloadContent(bar1);
      graphDefault.unloadContent(bar2);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(0);
    });
    it('Hides Bar content on single click', () => {
      const legendItem = fetchAllElementsByClass(barGraphContainer, styles.legendItem);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.barGraphContent);
      triggerEvent(legendItem[0], 'click', () => {
        barsContainer;
        expect(
          barsContainer[1]
            .querySelector(`.${styles.taskBar}`)
            .getAttribute('aria-hidden'),
        ).toBe('true');
      });
      triggerEvent(legendItem[1], 'click', () => {
        barsContainer;
        expect(barsContainer[0].getAttribute('aria-hidden')).toBe('true');
      });
    });
    it('Displays Bar content on double click', () => {
      const legendItem = fetchAllElementsByClass(barGraphContainer, styles.legendItem);
      triggerEvent(legendItem[0], 'click', () => {
        triggerEvent(legendItem[0], 'click', () => {
          const barsContainer = fetchAllElementsByClass(
            barGraphContainer,
            styles.barGraphContent,
          );
          expect(
            barsContainer[1]
              .querySelector(`.${styles.taskBar}`)
              .getAttribute('aria-hidden'),
          ).toBe('false');
        });
      });
    });
  });
  describe('when timeseries content is loaded', () => {
    let bar1;
    let bar2;
    let graphDefault;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisTimeSeries));
      bar1 = new Bar(getInput(valuesTimeSeries, false, false));

      let graphContent = graphDefault.loadContent(bar1);
      bar1.redraw(graphContent);

      const input = utils.deepClone(getInput(valuesTimeSeries, false, false, false, 'uid_2'));
      input.group = 'uid_1';

      bar2 = new Bar(input);
      graphContent = graphDefault.loadContent(bar2);

      bar1.redraw(graphContent);
      bar2.redraw(graphContent);
    });
    afterEach(() => {
      graphDefault.destroy();
    });
    it('Both inputs are loaded', () => {
      const barContentContainer = fetchAllElementsByClass(barGraphContainer, styles.barGraphContent);
      expect(barContentContainer).not.toBeNull();
      expect(barContentContainer[0].getAttribute('aria-describedby')).toBe('uid_1');
      expect(barContentContainer[1].getAttribute('aria-describedby')).toBe('uid_2');
    });

    it('first input gets stacked on top of second input', () => {
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      const yInput2 = toNumber(barsContainer[0].getAttribute('y'));
      const heightInput1 = toNumber(barsContainer[0].getAttribute('height'));
      // y Range of second input should be yRange of first input + height of first input
      expect(Math.round(toNumber(barsContainer[3].getAttribute('y')))).toBe(Math.round(yInput2 + heightInput1));
      // x range of both inputs should be equal
      expect(toNumber(barsContainer[0].getAttribute('x'))).toEqual(toNumber(barsContainer[3].getAttribute('x')));
    });

    it('when graph is unloaded off input1, unloads first content from graph', () => {
      graphDefault.unloadContent(bar1);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(3);
    });

    it('when graph is unloaded off input2, unloads second content from graph', () => {
      graphDefault.unloadContent(bar2);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(3);
    });

    it('when graph is unloaded off both inputs, unloads both content from graph', () => {
      graphDefault.unloadContent(bar1);
      graphDefault.unloadContent(bar2);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(0);
    });
  });
  describe('when graph is loaded with 2 inputs with negative values', () => {
    let bar1;
    let bar2;
    let graphDefault;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));

      bar1 = new Bar(getInput(valuesNegativeDefault, false, false));

      let graphContent = graphDefault.loadContent(bar1);
      bar1.redraw(graphContent);

      const input = utils.deepClone(getInput(valuesNegativeDefault, false, false, false, 'uid_2'));
      input.group = 'uid_1';

      bar2 = new Bar(input);

      graphContent = graphDefault.loadContent(bar2);

      bar2.redraw(graphContent);
      bar1.redraw(graphContent);
    });
    afterEach(() => {
      graphDefault.destroy();
    });
    it('loads both inputs', () => {
      const barContentContainer = fetchAllElementsByClass(barGraphContainer, styles.barGraphContent);
      expect(barContentContainer).not.toBeNull();
      expect(barContentContainer[0].getAttribute('aria-describedby')).toBe('uid_2');
      expect(barContentContainer[1].getAttribute('aria-describedby')).toBe('uid_1');
    });

    it('stacks the first input below the second input', () => {
      let barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      const yInput2 = toNumber(barsContainer[0].getAttribute('y'));
      graphDefault.resize();
      barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      const heightInput2 = toNumber(barsContainer[0].getAttribute('height'));

      // y Range of first input should be hRange of second input - height of first input (offset)
      expect(toNumber(barsContainer[3].getAttribute('y'))).toBe(yInput2 + heightInput2);

      // x range of both inputs should be equal
      expect(toNumber(barsContainer[0].getAttribute('x'))).toEqual(toNumber(barsContainer[3].getAttribute('x')));
      expect(toNumber(barsContainer[0].getAttribute('height'))).toBe(heightInput2);
    });

    it('unloads unloads first content from graph when it is unloaded off input1', () => {
      graphDefault.unloadContent(bar1);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(3);
    });

    it('unloads unloads second content from graph when it is unloaded off input2', () => {
      graphDefault.unloadContent(bar2);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(3);
    });

    it('unloads both content from graph when it is unloaded off of both inputs', () => {
      graphDefault.unloadContent(bar1);
      graphDefault.unloadContent(bar2);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(0);
    });
  });
  describe('when graph is loaded with 2 inputs where group is not a unique key', () => {
    let bar1;
    let bar2;
    let graphDefault;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));

      bar1 = new Bar(getInput(valuesDefault, false, false));

      let graphContent = graphDefault.loadContent(bar1);
      bar1.redraw(graphContent);

      const input = utils.deepClone(getInput(valuesDefault, false, false, false, 'uid_2'));
      input.group = 'uid_11';

      bar2 = new Bar(input);

      graphContent = graphDefault.loadContent(bar2);

      bar2.redraw(graphContent);
      bar1.redraw(graphContent);
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('loads both inputs', () => {
      const barContentContainer = fetchAllElementsByClass(barGraphContainer, styles.barGraphContent);
      expect(barContentContainer).not.toBeNull();
      expect(barContentContainer[0].getAttribute('aria-describedby')).toBe('uid_2');
      expect(barContentContainer[1].getAttribute('aria-describedby')).toBe('uid_1');
    });

    // TODO: fix failing test
    it.skip('does not stack second input and groups it with the first content', () => {
      let barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      const yInput2 = toNumber(barsContainer[0].getAttribute('y'));
      graphDefault.resize();
      barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      const heightInput1 = toNumber(barsContainer[0].getAttribute('height'));

      // y Range of first input should be equal to yRange of second input (because both have same y values)
      expect(toNumber(barsContainer[3].getAttribute('y'))).toBe(yInput2);

      // x range of both inputs should not be equal
      expect(toNumber(barsContainer[0].getAttribute('x')))
        .not.toEqual(toNumber(barsContainer[3].getAttribute('x')));
      expect(toNumber(barsContainer[0].getAttribute('height')))
        .toBe(heightInput1);
    });

    it('when graph is unloaded off input1, unloads first content from graph', () => {
      graphDefault.unloadContent(bar1);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(3);
    });

    it('when graph is unloaded off input2, unloads second content from graph', () => {
      graphDefault.unloadContent(bar2);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(3);
    });

    it('when graph is unloaded off both inputs, unloads both content from graph', () => {
      graphDefault.unloadContent(bar1);
      graphDefault.unloadContent(bar2);
      const barsContainer = fetchAllElementsByClass(barGraphContainer, styles.taskBar);
      expect(barsContainer.length).toEqual(0);
    });
  });
  describe('when graph is loaded with outlier values', () => {
    let bar1;
    let bar2;
    let graphDefault;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));
      bar1 = new Bar(getInput(valuesOutliers, false, false));

      const graph = graphDefault.loadContent(bar1);
      bar1.redraw(graph);
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('y-axis label position stays the same', () => {
      const yLabel1 = fetchElementByClass(barGraphContainer, styles.axisLabelY).getAttribute('transform');

      const input = utils.deepClone(getInput(valuesDefault, false, false, false, 'uid_2'));
      input.group = 'uid_1';

      bar2 = new Bar(input);
      const graph = graphDefault.loadContent(bar2);

      bar2.redraw(graph);
      bar1.redraw(graph);

      const yLabel2 = fetchElementByClass(barGraphContainer, styles.axisLabelY);
      expect(yLabel1).toEqual(yLabel2.getAttribute('transform'));
    });
  });
  describe('Region - on load', () => {
    let bar1;
    let bar2;
    let graphDefault;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));

      const input1 = getInput(valuesNegativeDefault, false, false);
      input1.regions = regionsDefault;

      bar1 = new Bar(input1);
      let graphContent = graphDefault.loadContent(bar1);
      bar1.redraw(graphContent);

      const input2 = utils.deepClone(
        getInput(
          valuesNegativeDefault,
          false,
          false,
          false,
          'uid_2',
        ),
      );
      input2.group = 'uid_1';
      input2.regions = regionsDefault;
      bar2 = new Bar(input2);

      graphContent = graphDefault.loadContent(bar2);

      bar2.redraw(graphContent);
      bar1.redraw(graphContent);
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('Translates region correctly', () => {
      const regionElement = fetchAllElementsByClass(barGraphContainer, styles.region);

      expect(regionElement[0].getAttribute('x')).toBe(regionElement[2].getAttribute('x'));
      expect(regionElement[0].getAttribute('y')).toBe(regionElement[2].getAttribute('y'));
    });
  });
  describe('Axis Info Row - on load', () => {
    let bar1;
    let bar2;
    let graphDefault;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));

      const input1 = getInput(valuesDefault, false, false);
      input1.axisInfoRow = axisInfoRowDefault;

      bar1 = new Bar(input1);
      let graph = graphDefault.loadContent(bar1);
      bar1.redraw(graph);

      const input2 = utils.deepClone(getInput(valuesDefault, false, false, false, 'uid_2'));
      input2.group = 'uid_1';

      bar2 = new Bar(input2);
      graph = graphDefault.loadContent(bar2);

      bar2.redraw(graph);
      bar1.redraw(graph);
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    // TODO: fix failing tests
    it.skip('translates axis info row labels correctly', () => {
      const axisInfoRowElement = fetchAllElementsByClass(barGraphContainer, styles.axisInfoRowItem);
      expect(axisInfoRowElement.length).toBe(3);
      expect(
        toNumber(
          getSVGAnimatedTransformList(
            getCurrentTransform(axisInfoRowElement[0]),
          ).translate[0],
          10,
        ),
      ).toBeCloserTo(140);
      expect(
        round2Decimals(
          getSVGAnimatedTransformList(
            getCurrentTransform(axisInfoRowElement[0]),
          ).translate[1],
        ),
      ).toBeCloserTo(-10);
      expect(
        toNumber(
          getSVGAnimatedTransformList(
            getCurrentTransform(axisInfoRowElement[1]),
          ).translate[0],
          10,
        ),
      ).toBeCloserTo(282);
      expect(
        round2Decimals(
          getSVGAnimatedTransformList(
            getCurrentTransform(axisInfoRowElement[1]),
          ).translate[1],
        ),
      ).toBeCloserTo(-10);
      expect(
        toNumber(
          getSVGAnimatedTransformList(
            getCurrentTransform(axisInfoRowElement[2]),
          ).translate[0],
          10,
        ),
      ).toBeCloserTo(425);
    });
  });
});
