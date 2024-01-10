'use strict';

import Graph from '../../../../src/js/controls/Graph/Graph';
import { getShapeForTarget } from '../../../../src/js/controls/Graph/helpers/helpers';
import Scatter from '../../../../src/js/controls/Scatter';
import { Shape } from '../../../../src/js/core';
import styles from '../../../../src/js/helpers/styles';
import {
  getCurrentTransform,
  getSVGAnimatedTransformList,
  getTransformScale,
  round2Decimals,
} from '../../../../src/js/helpers/transformUtils';
import utils from '../../../../src/js/helpers/utils';
import { triggerEvent } from '../../helpers/commonHelpers';
import {
  axisDefault,
  fetchElementByClass,
  getAxes,
  getInput,
  inputSecondary,
  valuesDefault,
} from './helpers';

// TODO: fix failing tests
describe.skip('Scatter - Criticality', () => {
  let scatterGraphContainer;

  beforeEach(() => {
    scatterGraphContainer = document.createElement('div');
    scatterGraphContainer.id = 'testScatter_carbon';
    scatterGraphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    document.body.appendChild(scatterGraphContainer);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('On load', () => {
    let graphDefault;
    let inputPrimary;
    let scatterPrimary;
    let scatterSecondary;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));

      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated, false, false);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
      graphDefault.unloadContent(scatterPrimary);
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('Does not add indicator if data point is not critical', () => {
      const valuesMutated = utils.deepClone(valuesDefault);
      scatterPrimary = new Scatter(getInput(valuesMutated));
      graphDefault.loadContent(scatterPrimary);
      const criticalOuterElement = fetchElementByClass(scatterGraphContainer, styles.criticalityOuterPoint);
      const criticalInnerElement = fetchElementByClass(scatterGraphContainer, styles.criticalityInnerPoint);
      expect(criticalOuterElement).toBeNull();
      expect(criticalInnerElement).toBeNull();
    });
    it('Does not add indicator if data point is critical false', () => {
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = false;
      scatterPrimary = new Scatter(getInput(valuesMutated));
      graphDefault.loadContent(scatterPrimary);
      const criticalOuterElement = fetchElementByClass(scatterGraphContainer, styles.criticalityOuterPoint);
      const criticalInnerElement = fetchElementByClass(scatterGraphContainer, styles.criticalityInnerPoint);
      expect(criticalOuterElement).toBeNull();
      expect(criticalInnerElement).toBeNull();
    });
    it('Adds outer indicator - Red', () => {
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
      const criticalOuterElement = fetchElementByClass(scatterGraphContainer, styles.criticalityOuterPoint);
      expect(criticalOuterElement).not.toBeNull();
      expect(criticalOuterElement.nodeName).toBe('svg');
      expect(criticalOuterElement.classList).toContain(styles.point);
      expect(criticalOuterElement.classList).toContain(styles.criticalityOuterPoint);
      expect(criticalOuterElement.getAttribute('aria-hidden')).toBe('false');
      expect(criticalOuterElement.getAttribute('aria-describedby')).toBe(inputPrimary.key);
    });
    it('Adds inner indicator - White', () => {
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
      const criticalInnerElement = fetchElementByClass(scatterGraphContainer, styles.criticalityInnerPoint);
      expect(criticalInnerElement).not.toBeNull();
      expect(criticalInnerElement.nodeName).toBe('svg');
      expect(criticalInnerElement.classList).toContain(styles.point);
      expect(criticalInnerElement.classList).toContain(styles.criticalityInnerPoint);
      expect(criticalInnerElement.getAttribute('aria-hidden')).toBe('false');
      expect(criticalInnerElement.getAttribute('aria-describedby')).toBe(inputPrimary.key);
    });
    it('Adds indicators inner and outer with same shape', () => {
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated, false, false);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);

      const criticalOuterElement = fetchElementByClass(scatterGraphContainer, styles.criticalityOuterPoint);
      const criticalInnerElement = fetchElementByClass(scatterGraphContainer, styles.criticalityInnerPoint);
      const currentShape = new Shape(getShapeForTarget(inputPrimary)).getShapeElement();
      expect(criticalOuterElement.nodeName).toBe(currentShape.nodeName);
      expect(criticalInnerElement.nodeName).toBe(currentShape.nodeName);
      expect(criticalOuterElement.firstChild.firstChild.getAttribute('d')).toBe(currentShape.firstChild.firstChild.getAttribute('d'));
      expect(criticalInnerElement.firstChild.firstChild.getAttribute('d')).toBe(currentShape.firstChild.firstChild.getAttribute('d'));
    });
    it('Translates properly', () => {
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated, false, false);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
      const criticalOuterElementPath = fetchElementByClass(scatterGraphContainer, styles.criticalityOuterPoint).firstChild;
      const criticalInnerElementPath = fetchElementByClass(scatterGraphContainer, styles.criticalityInnerPoint).firstChild;

      expect(criticalOuterElementPath.getAttribute('transform')).not.toBeNull();
      expect(criticalInnerElementPath.getAttribute('transform')).not.toBeNull();
      expect(
        getSVGAnimatedTransformList(
          getCurrentTransform(criticalOuterElementPath),
        ).translate[0],
      ).not.toBeNull();
      expect(
        getSVGAnimatedTransformList(
          getCurrentTransform(criticalOuterElementPath),
        ).translate[1],
      ).not.toBeNull();
      expect(
        getSVGAnimatedTransformList(
          getCurrentTransform(criticalInnerElementPath),
        ).translate[0],
      ).not.toBeNull();
      expect(
        getSVGAnimatedTransformList(
          getCurrentTransform(criticalInnerElementPath),
        ).translate[1],
      ).not.toBeNull();
    });
    it('Scales properly', () => {
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated, false, false);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
      const criticalOuterElementPath = fetchElementByClass(scatterGraphContainer, styles.criticalityOuterPoint).firstChild;
      const criticalInnerElementPath = fetchElementByClass(scatterGraphContainer, styles.criticalityInnerPoint).firstChild;
      expect(getTransformScale(criticalOuterElementPath)[0]).toBe(round2Decimals(getShapeForTarget(inputPrimary).options.scale));
      expect(getTransformScale(criticalInnerElementPath)[0]).toBe(round2Decimals(getShapeForTarget(inputPrimary).options.scale));
    });
    it('Shows even on multiple data-set', () => {
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated, false, false);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
      scatterSecondary = new Scatter(inputSecondary);
      graphDefault.loadContent(scatterSecondary);
      const criticalOuterElement = fetchElementByClass(scatterGraphContainer, styles.criticalityOuterPoint);
      const criticalInnerElement = fetchElementByClass(scatterGraphContainer, styles.criticalityInnerPoint);
      expect(criticalOuterElement).not.toBeNull();
      expect(criticalOuterElement.nodeName).toBe('svg');
      expect(criticalOuterElement.classList).toContain(styles.point);
      expect(criticalOuterElement.classList).toContain(styles.criticalityOuterPoint);
      expect(criticalOuterElement.getAttribute('aria-hidden')).toBe('false');
      expect(criticalInnerElement).not.toBeNull();
      expect(criticalInnerElement.nodeName).toBe('svg');
      expect(criticalInnerElement.classList).toContain(styles.point);
      expect(criticalInnerElement.classList).toContain(styles.criticalityInnerPoint);
      expect(criticalInnerElement.getAttribute('aria-hidden')).toBe('false');
    });
    it('Selects data point when clicked on outer indicator', () => {
      const criticalOuterPointMock = jest.fn();
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated);
      inputPrimary.onClick = criticalOuterPointMock;
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
      const point = fetchElementByClass(scatterGraphContainer, styles.criticalityOuterPoint);
      triggerEvent(point, 'click', () => {
        expect(criticalOuterPointMock).toBeCalled();
      });
    });
    it('Emits correct parameters when clicked on outer indicator', () => {
      let args = {};
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[1].isCritical = true;
      inputPrimary = getInput(valuesMutated);
      inputPrimary.onClick = (cb, key, index, val, target) => {
        args = {
          cb,
          key,
          index,
          val,
          target,
        };
      };
      graphDefault.loadContent(new Scatter(inputPrimary));
      const point = scatterGraphContainer.querySelector(`.${styles.criticalityOuterPoint}`);
      triggerEvent(point, 'click', () => {
        expect(args).not.toBeNull();
        expect(typeof args.cb).toEqual('function');
        expect(args.key).toBe('uid_1');
        expect(args.index).toBe(1);
        expect(args.val).not.toBeNull();
        expect(args.val.x).toBe(inputPrimary.values[1].x);
        expect(args.val.y).toBe(inputPrimary.values[1].y);
        expect(args.target).not.toBeNull();
      });
    });
    it('Selects data point when clicked on inner indicator', () => {
      const criticalInnerPointMock = jest.fn();
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated);
      inputPrimary.onClick = criticalInnerPointMock;
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
      const point = fetchElementByClass(scatterGraphContainer, styles.criticalityInnerPoint);
      triggerEvent(point, 'click', () => {
        expect(criticalInnerPointMock).toBeCalled();
      });
    });
    it('Emits correct parameters when clicked on inner point', () => {
      let args = {};
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[1].isCritical = true;
      inputPrimary = getInput(valuesMutated);
      inputPrimary.onClick = (cb, key, index, val, target) => {
        args = {
          cb,
          key,
          index,
          val,
          target,
        };
      };
      graphDefault.loadContent(new Scatter(inputPrimary));
      const point = scatterGraphContainer.querySelector(`.${styles.criticalityInnerPoint}`);
      triggerEvent(point, 'click', () => {
        expect(args).not.toBeNull();
        expect(typeof args.cb).toEqual('function');
        expect(args.key).toBe('uid_1');
        expect(args.index).toBe(1);
        expect(args.val).not.toBeNull();
        expect(args.val.x).toBe(inputPrimary.values[1].x);
        expect(args.val.y).toBe(inputPrimary.values[1].y);
        expect(args.target).not.toBeNull();
      });
    });
  });
  describe('On unload', () => {
    let graphDefault;
    let inputPrimary;
    let scatterPrimary;
    let scatterSecondary;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));

      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated, false, false);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
      graphDefault.unloadContent(scatterPrimary);
    });
    it('Removes outer indicator', () => {
      const criticalOuterElement = fetchElementByClass(
        scatterGraphContainer,
        styles.criticalityOuterPoint,
      );
      expect(criticalOuterElement).toBeNull();
    });
    it('Removes inner indicator', () => {
      const criticalInnerElement = fetchElementByClass(
        scatterGraphContainer,
        styles.criticalityInnerPoint,
      );
      expect(criticalInnerElement).toBeNull();
    });
  });
  describe('On legend item hover with single data-set', () => {
    let graphDefault;
    let inputPrimary;
    let scatterPrimary;
    let scatterSecondary;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated, false, false);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('Highlights the indicators on mouse-enter', () => {
      const legendItem = fetchElementByClass(scatterGraphContainer, styles.legendItem);
      triggerEvent(legendItem, 'mouseenter', () => {
        const criticalOuterElement = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${inputPrimary.key}"]`);
        const criticalInnerElement = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${inputPrimary.key}"]`);
        expect(criticalOuterElement.getAttribute('aria-hidden')).toBe('false');
        expect(criticalOuterElement.classList).toContain(styles.highlight);
        expect(criticalInnerElement.getAttribute('aria-hidden')).toBe('false');
        expect(criticalInnerElement.classList).toContain(styles.highlight);
      });
    });
    it('Removes highlights for indicators on mouse-leave', () => {
      const legendItem = fetchElementByClass(scatterGraphContainer, styles.legendItem);
      triggerEvent(legendItem, 'mouseenter', () => {
        triggerEvent(legendItem, 'mouseleave', () => {
          const criticalOuterElement = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${inputPrimary.key}"]`);
          const criticalInnerElement = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${inputPrimary.key}"]`);
          expect(criticalOuterElement.getAttribute('aria-hidden')).toBe('false');
          expect(criticalOuterElement.classList).not.toContain(styles.highlight);
          expect(criticalInnerElement.getAttribute('aria-hidden')).toBe('false');
          expect(criticalInnerElement.classList).not.toContain(styles.highlight);
        });
      });
    });
  });

  describe('On legend item hover with multiple data-set', () => {
    let graphDefault;
    let inputPrimary;
    let scatterPrimary;
    let scatterSecondary;

    const secondaryInput = {
      key: 'uid_2',
      label: {
        display: 'Data Label B',
      },
    };

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));

      const valuesMutated = utils.deepClone(valuesDefault);
      const valuesMutatedAlt = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      valuesMutatedAlt[1].isCritical = true;
      inputPrimary = getInput(valuesMutated);
      secondaryInput.values = utils.deepClone(valuesMutatedAlt);
      scatterPrimary = new Scatter(inputPrimary);
      scatterSecondary = new Scatter(secondaryInput);
      graphDefault.loadContent(scatterPrimary);
      graphDefault.loadContent(scatterSecondary);
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('Highlights the current indicator', () => {
      const legendItem = fetchElementByClass(scatterGraphContainer, styles.legendItem);
      triggerEvent(legendItem, 'mouseenter', () => {
        const criticalOuterElement = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${inputPrimary.key}"]`);
        const criticalInnerElement = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${inputPrimary.key}"]`);
        expect(criticalOuterElement.getAttribute('aria-hidden')).toBe('false');
        expect(criticalInnerElement.getAttribute('aria-hidden')).toBe('false');
        expect(criticalOuterElement.classList).toContain(styles.highlight);
        expect(criticalInnerElement.classList).toContain(styles.highlight);
      });
    });
    it('Blurs other indicators', () => {
      const legendItem = scatterGraphContainer.querySelector(`.${styles.legendItem}[aria-describedby="${secondaryInput.key}"]`);
      triggerEvent(legendItem, 'mouseenter', () => {
        const criticalOuterElement = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${inputPrimary.key}"]`);
        expect(criticalOuterElement.classList).not.toContain(styles.highlight);

        const criticalInnerElement = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${inputPrimary.key}"]`);
        expect(criticalInnerElement.classList).not.toContain(styles.highlight);

        const criticalOuterElementAlt = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${secondaryInput.key}"]`);
        expect(criticalOuterElementAlt.classList).toContain(styles.highlight);

        const criticalInnerElementAlt = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${secondaryInput.key}"]`);
        expect(criticalInnerElementAlt.classList).toContain(styles.highlight);
      });
    });
    it('Removes highlights on mouse-leave', () => {
      const legendItem = scatterGraphContainer.querySelector(`.${styles.legendItem}[aria-describedby="${inputPrimary.key}"]`);
      triggerEvent(legendItem, 'mouseenter', () => {
        triggerEvent(legendItem, 'mouseleave', () => {
          const criticalOuterElement = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${inputPrimary.key}"]`);
          const criticalInnerElement = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${inputPrimary.key}"]`);
          expect(criticalOuterElement.classList).not.toContain(styles.highlight);
          expect(criticalInnerElement.classList).not.toContain(styles.highlight);
        });
      });
    });
    it('Removes blur for other data points on mouse-leave', () => {
      const legendItem = scatterGraphContainer.querySelector(`.${styles.legendItem}[aria-describedby="${secondaryInput.key}"]`);
      triggerEvent(legendItem, 'mouseenter', () => {
        triggerEvent(legendItem, 'mouseleave', () => {
          const criticalOuterElement = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${inputPrimary.key}"]`);
          const criticalInnerElement = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${inputPrimary.key}"]`);
          const criticalOuterElementAlt = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${secondaryInput.key}"]`);
          const criticalInnerElementAlt = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${secondaryInput.key}"]`);
          expect(criticalOuterElement.classList).not.toContain(styles.highlight);
          expect(criticalInnerElement.classList).not.toContain(styles.highlight);
          expect(criticalOuterElementAlt.classList).not.toContain(styles.highlight);
          expect(criticalInnerElementAlt.classList).not.toContain(styles.highlight);
        });
      });
    });
  });

  describe('On legend item click with single data-set', () => {
    let graphDefault;
    let inputPrimary;
    let scatterPrimary;
    let scatterSecondary;

    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));

      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;
      inputPrimary = getInput(valuesMutated);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('Hides indicators on toggle', () => {
      const legendItem = scatterGraphContainer.querySelector(`.${styles.legendItem}[aria-describedby="${inputPrimary.key}"]`);
      triggerEvent(legendItem, 'click', () => {
        const criticalOuterElement = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${inputPrimary.key}"]`);
        const criticalInnerElement = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${inputPrimary.key}"]`);
        expect(criticalOuterElement.getAttribute('aria-hidden')).toBe('true');
        expect(criticalInnerElement.getAttribute('aria-hidden')).toBe('true');
      });
    });
    it('Shows indicators on re-toggle', () => {
      const legendItem = scatterGraphContainer.querySelector(`.${styles.legendItem}[aria-describedby="${inputPrimary.key}"]`);
      triggerEvent(legendItem, 'click', () => {
        triggerEvent(
          legendItem,
          'click',
          () => {
            const criticalOuterElement = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${inputPrimary.key}"]`);
            const criticalInnerElement = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${inputPrimary.key}"]`);
            expect(criticalOuterElement.getAttribute('aria-hidden')).toBe('false');
            expect(criticalInnerElement.getAttribute('aria-hidden')).toBe('false');
          },
          200,
        );
      });
    });
  });
  describe('On legend item click with multiple data-set', () => {
    let graphDefault;
    let inputPrimary;
    let scatterPrimary;
    let scatterSecondary;
    const secondaryInput = {
      key: 'uid_2',
      label: {
        display: 'Data Label B',
      },
    };
    beforeEach(() => {
      graphDefault = new Graph(getAxes(axisDefault));
      const valuesMutated = utils.deepClone(valuesDefault);
      valuesMutated[0].isCritical = true;

      inputPrimary = getInput(valuesMutated);
      scatterPrimary = new Scatter(inputPrimary);
      graphDefault.loadContent(scatterPrimary);
    });
    afterEach(() => {
      graphDefault.destroy();
    });

    it('Shows when data-sets shown === 1', () => {
      const valuesMutatedAlt = utils.deepClone(valuesDefault);
      valuesMutatedAlt[1].isCritical = true;
      secondaryInput.values = utils.deepClone(valuesMutatedAlt);
      scatterSecondary = new Scatter(secondaryInput);
      graphDefault.loadContent(scatterSecondary);
      const legendItem = scatterGraphContainer.querySelector(`.${styles.legendItem}[aria-describedby="${secondaryInput.key}"]`);
      triggerEvent(legendItem, 'click', () => {
        const criticalOuterElement = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${inputPrimary.key}"]`);
        const criticalInnerElement = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${inputPrimary.key}"]`);
        const criticalOuterElementAlt = document.querySelector(`.${styles.criticalityOuterPoint}[aria-describedby="${secondaryInput.key}"]`);
        const criticalInnerElementAlt = document.querySelector(`.${styles.criticalityInnerPoint}[aria-describedby="${secondaryInput.key}"]`);
        expect(criticalOuterElement.getAttribute('aria-hidden')).toBe('false');
        expect(criticalInnerElement.getAttribute('aria-hidden')).toBe('false');
        expect(criticalOuterElementAlt.getAttribute('aria-hidden')).toBe('true');
        expect(criticalInnerElementAlt.getAttribute('aria-hidden')).toBe('true');
        graphDefault.unloadContent(scatterSecondary);
      });
    });
  });
});
