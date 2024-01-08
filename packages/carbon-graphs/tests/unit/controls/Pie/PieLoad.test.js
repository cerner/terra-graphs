'use strict';

import sinon from 'sinon';
import * as d3 from '../../../../src/js/d3Modules';
import Carbon from '../../../../src/js/carbon';
import Pie from '../../../../src/js/controls/Pie';
import { getSlicePercentage } from '../../../../src/js/controls/Pie/helpers/translateHelpers';
import constants from '../../../../src/js/helpers/constants';
import errors from '../../../../src/js/helpers/errors';
import styles from '../../../../src/js/helpers/styles';
import utils from '../../../../src/js/helpers/utils';
import { toNumber, triggerEvent } from '../../helpers/commonHelpers';
import {
  dataPrimary,
  dataSecondary,
  dataTertiary,
  fetchElementByClass,
  inputDefault,
} from './helpers';

describe('Pie - Load', () => {
  let graphContainer;

  beforeEach(() => {
    graphContainer = document.createElement('div');
    graphContainer.id = 'testPie_carbon';
    graphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    graphContainer.setAttribute('class', 'carbon-test-class');
    document.body.appendChild(graphContainer);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('Throws error', () => {
    let pieInstance;
    let input;
    
    beforeEach(() => {
      input = inputDefault(graphContainer.id);
      pieInstance = new Pie(input);
    });
    afterEach(() => {
      pieInstance.destroy();
    });

    it('throws an error when no content is loaded', () => {
      expect(() => {
        pieInstance.loadContent({});
      }).toThrowError(errors.THROW_MSG_NO_DATA_LOADED);
    });
    it('throws an error when content is null', () => {
      expect(() => {
        pieInstance.loadContent(null);
      }).toThrowError(errors.THROW_MSG_NO_DATA_LOADED);
    });
    it('throws an error when no key is provided', () => {
      expect(() => {
        pieInstance.loadContent({
          label: { display: 'Orange' },
          color: Carbon.helpers.COLORS.GREEN,
          value: 50,
        });
      }).toThrowError(errors.THROW_MSG_UNIQUE_KEY_NOT_PROVIDED);
    });
    it('throws an error when no label is provided', () => {
      expect(() => {
        pieInstance.loadContent({
          key: 'uid_2',
          color: Carbon.helpers.COLORS.GREEN,
          values: [50, 25],
        });
      }).toThrowError(errors.THROW_MSG_UNIQUE_LABEL_NOT_PROVIDED);
    });
    it('throws an error when no label display is provided', () => {
      expect(() => {
        pieInstance.loadContent({
          label: {},
          key: 'uid_2',
          color: Carbon.helpers.COLORS.GREEN,
          values: [50, 25],
        });
      }).toThrowError(errors.THROW_MSG_UNIQUE_LABEL_NOT_PROVIDED);
    });
    it('throws an error when no values are provided', () => {
      expect(() => {
        pieInstance.loadContent({
          key: 'uid_2',
          label: { display: 'Orange' },
          color: Carbon.helpers.COLORS.GREEN,
        });
      }).toThrowError(errors.THROW_MSG_NO_DATA_POINTS);
    });
    it('throws an error when key is not unique', () => {
      expect(() => {
        pieInstance.loadContent({
          key: 'uid_1',
          label: { display: 'Orange' },
          color: Carbon.helpers.COLORS.GREEN,
          value: 50,
        });
        pieInstance.loadContent({
          key: 'uid_1',
          label: { display: 'Orange' },
          color: Carbon.helpers.COLORS.GREEN,
          value: 50,
        });
      }).toThrowError(errors.THROW_MSG_UNIQUE_KEY_NOT_PROVIDED);
    });
  });

  describe('On successful load', () => {
    let input;
    let pieInstance;
    beforeEach(() => {
      input = inputDefault(graphContainer.id);
      pieInstance = new Pie(input);
    });

    it('returns the instance', () => {
      const loadedPieInstance = pieInstance.loadContent(dataSecondary);
      expect(loadedPieInstance).toBeInstanceOf(Pie);
    });
    it('processes content data correctly', () => {
      pieInstance.loadContent(dataPrimary);
      expect(pieInstance.content[0]).toEqual(dataPrimary.key);
      expect(pieInstance.contentConfig[0].config.onClick).toEqual(dataPrimary.onClick);
      expect(pieInstance.contentConfig[0].config.color).toEqual(dataPrimary.color);
      expect(pieInstance.contentConfig[0].config.shape).toEqual(dataPrimary.shape);
      expect(pieInstance.contentConfig[0].config.label).toEqual(dataPrimary.label);
      expect(pieInstance.contentConfig[0].config.key).toEqual(dataPrimary.key);
    });
    it('processes content data correctly with multiple content', () => {
      const _input = [dataPrimary, dataSecondary];
      pieInstance.loadContent(_input);
      pieInstance.content.forEach((c, i) => { expect(c).toEqual(_input[i].key); });
      pieInstance.contentConfig.forEach((c, i) => {
        expect(c.config.onClick).toEqual(_input[i].onClick);
        expect(c.config.color).toEqual(_input[i].color);
        expect(c.config.shape).toEqual(_input[i].shape);
        expect(c.config.label).toEqual(_input[i].label);
        expect(c.config.key).toEqual(_input[i].key);
      });
    });
    it('generates the graph correctly', () => {
      pieInstance.loadContent(dataPrimary);
      const pieContentGroupElement = fetchElementByClass(styles.pieContentGroup);
      expect(pieContentGroupElement.nodeName).toBe('g');
      expect(pieContentGroupElement.getAttribute('aria-labelledby')).toBe(dataPrimary.label.display);
      expect(pieContentGroupElement.getAttribute('aria-describedby')).toBe(dataPrimary.key);
      expect(pieContentGroupElement.getAttribute('aria-disabled')).toBe('false');
      expect(pieContentGroupElement.getAttribute('aria-selected')).toBe('false');
      expect(pieContentGroupElement.getAttribute('transform')).toBeDefined();
    });
    it('creates slice with default color if none provided', () => {
      const _input = utils.deepClone(dataPrimary);
      _input.color = null;
      pieInstance.loadContent(_input);
      const legendItemSVGElement = fetchElementByClass(`${styles.pieLegendItem} svg`);
      const pieGroupElementData = d3.select(fetchElementByClass(styles.pieContentGroup)).datum();
      expect(pieGroupElementData.color).toBe(constants.DEFAULT_PIE_COLOR);
      expect(legendItemSVGElement.getAttribute('style')).toContain(constants.DEFAULT_PIE_COLOR);
    });
    it('generates slice with click disabled when onClick is not provided', () => {
      const _input = utils.deepClone(dataPrimary);
      _input.onClick = null;
      pieInstance.loadContent(_input);
      const pieContentGroupElement = fetchElementByClass(styles.pieContentGroup);
      expect(pieContentGroupElement.getAttribute('aria-disabled')).toBe('true');
    });
    it('generates slice with data embedded within', () => {
      pieInstance.loadContent(dataPrimary);
      const pieContentGroupElement = fetchElementByClass(styles.pieContentGroup);
      const storedData = d3.select(pieContentGroupElement).datum();
      expect(storedData.key).toEqual(dataPrimary.key);
      expect(storedData.label).toEqual(dataPrimary.label);
      expect(storedData.color).toEqual(dataPrimary.color);
      expect(storedData.shape).toEqual(constants.DEFAULT_PIE_LEGEND_SHAPE);
      expect(storedData.value).toEqual(dataPrimary.value);
    });
    it('stores the content correctly', () => {
      pieInstance.loadContent(dataPrimary);
      expect(pieInstance.content.length).toBe(1);
      expect(pieInstance.content[0]).toEqual(dataPrimary.key);
      pieInstance.loadContent(dataTertiary);
      expect(pieInstance.content.length).toBe(2);
      expect(pieInstance.content[1]).toEqual(dataTertiary.key);
    });
    it('creates legend item correctly', () => {
      pieInstance.loadContent(dataPrimary);
      const legendContainer = fetchElementByClass(styles.legend);
      expect(legendContainer.childNodes.length).toBe(1);
    });
    it('creates multiple legend item correctly', () => {
      pieInstance.loadContent([dataPrimary, dataSecondary]);
      const legendContainer = fetchElementByClass(styles.legend);
      expect(legendContainer.childNodes.length).toBe(2);
    });
    it('loads multiple content correctly', () => {
      pieInstance.loadContent([dataSecondary, dataTertiary]);
      const pieContentGroupElement = fetchElementByClass(styles.pieChartContent);
      expect(pieInstance.content.length).toBe(2);
      expect(pieInstance.contentConfig.length).toBe(2);
      expect(pieContentGroupElement.childNodes.length).toBe(2);
    });
    it('does not throw error when multiple content is provided', () => {
      expect(() => {
        pieInstance.loadContent([dataSecondary, dataTertiary]);
      }).not.toThrowError();
    });
    it('does not throw error when valid input', () => {
      expect(() => {
        pieInstance.loadContent({
          key: 'uid_2',
          label: { display: 'Orange' },
          color: Carbon.helpers.COLORS.ORANGE,
          value: 125,
        });
      }).not.toThrowError();
    });
    it('uses the default height if not provided in input', () => {
      pieInstance.destroy();
      input.dimension = undefined;
      pieInstance = new Pie(input);
      const pieSVGElement = fetchElementByClass(styles.pieChartCanvas);
      expect(pieSVGElement.nodeName).toBe('svg');
      expect(pieSVGElement.getAttribute('role')).toBe('img');
      expect(toNumber(pieSVGElement.getAttribute('height'))).toBeCloseTo(constants.PIE_CHART_DEFAULT_HEIGHT);
      expect(toNumber(pieSVGElement.getAttribute('width'))).toBeCloseTo(constants.PIE_CHART_DEFAULT_HEIGHT);
    });
    it('creates slices correctly', () => {
      pieInstance.loadContent(dataPrimary);
      const sliceElementGroup = document.querySelectorAll(`.${styles.pieContentSlice}`);
      expect(sliceElementGroup.length).toBe(1);
      expect(sliceElementGroup[0].childNodes[0].nodeName).toBe('path');
      expect(sliceElementGroup[0].childNodes[0].getAttribute('fill')).toBe(dataPrimary.color);
      expect(sliceElementGroup[0].childNodes[0].getAttribute('d')).toBeDefined();
    });
    it('creates slices correctly for multiple slices', () => {
      pieInstance.loadContent([dataPrimary, dataSecondary, dataTertiary]);
      const sliceElementGroup = document.querySelectorAll(`.${styles.pieContentSlice}`);
      expect(sliceElementGroup.length).toBe(3);
      // We are comparing colors since we cannot compare the attr d between themselves
      expect(sliceElementGroup[0].firstChild.getAttribute('fill')).toBe(dataPrimary.color);
      expect(sliceElementGroup[1].firstChild.getAttribute('fill')).toBe(dataSecondary.color);
      expect(sliceElementGroup[2].firstChild.getAttribute('fill')).toBe(dataTertiary.color);
    });
    it('creates the first slice from top center', () => {
      pieInstance.loadContent([dataPrimary, dataSecondary, dataTertiary]);
      const sliceElementGroup = document.querySelectorAll(
            `.${styles.pieContentSlice}`,
      );
      const sliceOneDatum = d3.select(sliceElementGroup[0]).datum();
      const sliceTwoDatum = d3.select(sliceElementGroup[1]).datum();
      const sliceThreeDatum = d3.select(sliceElementGroup[2]).datum();
      expect(sliceOneDatum.value).toBe(dataPrimary.value);
      expect(sliceOneDatum.startAngle).toBe(0);
      expect(sliceTwoDatum.startAngle).not.toBe(0);
      expect(sliceThreeDatum.startAngle).not.toBe(0);
    });
    it('slices total to 100%', () => {
      pieInstance.loadContent([dataPrimary, dataSecondary, dataTertiary]);
      const sliceElementGroup = document.querySelectorAll(
            `.${styles.pieContentSlice}`,
      );
      const sliceOneDatum = d3.select(sliceElementGroup[0]).datum();
      const sliceTwoDatum = d3.select(sliceElementGroup[1]).datum();
      const sliceThreeDatum = d3.select(sliceElementGroup[2]).datum();
      expect(
        getSlicePercentage(sliceOneDatum.startAngle, sliceOneDatum.endAngle)
                + getSlicePercentage(sliceTwoDatum.startAngle, sliceTwoDatum.endAngle)
                + getSlicePercentage(sliceThreeDatum.startAngle, sliceThreeDatum.endAngle),
      ).toBeCloseTo(100);
    });
    it('sorts slices in descending order based on value', () => {
      pieInstance.loadContent([dataPrimary, dataSecondary, dataTertiary]);
      const sliceElementGroup = document.querySelectorAll(`.${styles.pieContentSlice}`);
      const sliceOneDatum = d3.select(sliceElementGroup[0]).datum();
      const sliceTwoDatum = d3.select(sliceElementGroup[1]).datum();
      const sliceThreeDatum = d3.select(sliceElementGroup[2]).datum();
      // The slices should be loaded in the order -> dataPrimary, dataTertiary, dataSecondary
      // Values are 100, 25, 5
      // dataPrimary & 100
      expect(sliceOneDatum.startAngle).toBe(0);
      expect(sliceOneDatum.value).toBe(100);
      // dataTertiary & 25
      expect(sliceThreeDatum.startAngle).toBeGreaterThan(sliceOneDatum.startAngle);
      expect(sliceThreeDatum.startAngle).toBeLessThanOrEqual(sliceTwoDatum.startAngle);
      expect(sliceThreeDatum.value).toBe(25);
      // dataSecondary & 5
      expect(sliceTwoDatum.startAngle).toBeGreaterThanOrEqual(sliceThreeDatum.endAngle);
      expect(sliceTwoDatum.value).toBe(5);
    });
  });

  describe('On hover action', () => {
    let pieInstance;
    let input;
    beforeEach(() => {
      input = inputDefault(graphContainer.id);
      pieInstance = new Pie(input);
      pieInstance.loadContent([dataPrimary, dataSecondary, dataTertiary]);
    });
    afterEach(() => {
      pieInstance.destroy();
    });

    it('blurs other slices', () => {
      // Hover over the first slice
      triggerEvent(
        fetchElementByClass(styles.pieContentGroup),
        'mouseenter',
        () => {
          expect(
            document.querySelector(`g[aria-describedby="${dataPrimary.key}"]`)
              .classList.contains(styles.blur),
          ).toBeFalsy();
          expect(
            document.querySelector(`g[aria-describedby="${dataSecondary.key}"]`)
              .classList.contains(styles.blur),
          ).toBeTruthy();
          expect(
            document.querySelector(`g[aria-describedby="${dataTertiary.key}"]`)
              .classList.contains(styles.blur),
          ).toBeTruthy();
        },
      );
    });
    it('highlights corresponding legend item', () => {
      // Legend item of first slice
      const pieLegendItem = fetchElementByClass(styles.pieLegendItem);
      triggerEvent(
        fetchElementByClass(styles.pieContentGroup),
        'mouseenter',
        () => {
          expect(pieLegendItem.classList.contains(styles.pieLegendItemSliceHover)).toBeTruthy();
        },
      );
    });
    it('un-blurs all slices on mouseleave', () => {
      const firstSliceElement = fetchElementByClass(styles.pieContentGroup);

      triggerEvent(firstSliceElement, 'mouseenter', () => {
        triggerEvent(firstSliceElement, 'mouseleave', () => {
          expect(
            document.querySelector(`g[aria-describedby="${dataTertiary.key}"]`)
              .classList.contains(styles.blur),
          ).toBeFalsy();
        });
      });
    });
    it('un-highlights legend item on mouseleave', () => {
      const pieLegendItem = fetchElementByClass(styles.pieLegendItem);
      const firstSliceElement = fetchElementByClass(styles.pieContentGroup);

      triggerEvent(firstSliceElement, 'mouseenter', () => {
        triggerEvent(firstSliceElement, 'mouseleave', () => {
          expect(
            pieLegendItem.classList.contains(styles.pieLegendItemSliceHover),
          ).toBeFalsy();
        });
      });
    });
  });

  describe('On click', () => {
    let pieInstance;
    let input;
    beforeEach(() => {
      input = inputDefault(graphContainer.id);
      pieInstance = new Pie(input);
    });
    afterEach(() => {
      pieInstance.destroy();
    });

    it('calls consumer provided callback', () => {
      const onClickFunctionMock = jest.fn();
      const _input = utils.deepClone(dataPrimary);
      _input.onClick = onClickFunctionMock;
      pieInstance.loadContent([_input, dataSecondary, dataTertiary]);
      const firstSliceElement = fetchElementByClass(styles.pieContentGroup);
      triggerEvent(firstSliceElement, 'click', () => {
        expect(firstSliceElement.getAttribute('aria-selected')).toBeTruthy();
        expect(onClickFunctionMock).toBeCalled();
      });
    });
    it('resets selection on re-clicking', () => {
      const _input = utils.deepClone(dataPrimary);
      _input.onClick = (cb) => cb();
      pieInstance.loadContent([_input, dataSecondary, dataTertiary]);
      const firstSliceElement = fetchElementByClass(styles.pieContentGroup);
      triggerEvent(firstSliceElement, 'click', () => {
        triggerEvent(firstSliceElement, 'click', () => {
          expect(firstSliceElement.getAttribute('aria-selected')).toBe('false');
        });
      });
    });
    it('doesn\'t enable selection if no click function is provided', () => {
      const _input = utils.deepClone(dataPrimary);
      _input.onClick = null;
      pieInstance.loadContent([_input, dataSecondary, dataTertiary]);
      const firstSliceElement = fetchElementByClass(
        styles.pieContentGroup,
      );
      triggerEvent(firstSliceElement, 'click', () => {
        triggerEvent(firstSliceElement, 'click', () => {
          expect(firstSliceElement.getAttribute('aria-selected')).toBe('false');
        });
      });
    });
    it('maintains blur on other slices even if clicked on a slice', () => {
      pieInstance.loadContent([dataPrimary, dataSecondary, dataTertiary]);
      const firstSliceElement = fetchElementByClass(styles.pieContentGroup);
      triggerEvent(firstSliceElement, 'mouseenter', () => {
        triggerEvent(firstSliceElement, 'click', () => {
          triggerEvent(firstSliceElement, 'mouseleave', () => {
            expect(
              document.querySelector(`g[aria-describedby="${dataTertiary.key}"]`)
                .classList.contains(styles.blur),
            ).toBeTruthy();
          });
        });
      });
    });
  });
});
