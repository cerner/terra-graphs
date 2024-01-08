'use strict';

import * as d3 from '../../../../src/js/d3Modules';
import Pie from '../../../../src/js/controls/Pie';
import errors from '../../../../src/js/helpers/errors';
import styles from '../../../../src/js/helpers/styles';
import { loadCustomJasmineMatcher } from '../../helpers/commonHelpers';
import {
  dataPrimary,
  dataSecondary,
  fetchElementByClass,
  inputDefault,
} from './helpers';

describe('Pie - Unload', () => {
  let pieInstance;
  let unloadedPieInstance;
  let input;
  let graphContainer;

  beforeEach(() => {
    graphContainer = document.createElement('div');
    graphContainer.id = 'testPie_carbon';
    graphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    graphContainer.setAttribute('class', 'carbon-test-class');
    document.body.appendChild(graphContainer);

    unloadedPieInstance = null;
    input = inputDefault(graphContainer.id);
    pieInstance = new Pie(input);
    pieInstance.loadContent(dataPrimary);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('throws error if key is not of a loaded content', () => {
    expect(() => {
      pieInstance.unloadContent({
        key: 'uid_2',
      });
    }).toThrowError(errors.THROW_MSG_INVALID_OBJECT_PROVIDED);
  });
  it('throws error if key is invalid', () => {
    expect(() => {
      pieInstance.unloadContent({
        key: null,
      });
    }).toThrowError(errors.THROW_MSG_INVALID_OBJECT_PROVIDED);
  });
  it('returns the instance', () => {
    unloadedPieInstance = pieInstance.unloadContent({
      key: 'uid_1',
      label: dataPrimary.label,
    });
    expect(unloadedPieInstance instanceof Pie).toBeTruthy();
  });
  it('generates the graph correctly', () => {
    pieInstance.unloadContent({
      key: 'uid_1',
      label: dataPrimary.label,
    });
    const graphElement = fetchElementByClass(styles.container);
    expect(graphElement.childNodes.length).toBe(2);
    expect(graphElement.firstChild.nodeName).toBe('svg');
    expect(fetchElementByClass(styles.pieChartContent).childNodes.length).toBe(0);
  });
  it('calls unload correctly', () => {
    pieInstance.loadContent(dataSecondary);
    pieInstance.unloadContent({
      key: 'uid_2',
    });
    const pieContentElement = fetchElementByClass(styles.pieChartContent);
    const pieGroupElementData = d3
      .select(fetchElementByClass(styles.pieContentGroup))
      .datum();
    expect(pieContentElement.childNodes.length).toBe(1);
    expect(pieGroupElementData.key).toBe(dataPrimary.key);
  });
  it('updates content correctly when called out of order', () => {
    pieInstance.loadContent(dataSecondary);
    expect(pieInstance.content.length).toBe(2);
    expect(pieInstance.content).toEqual([
      dataPrimary.key,
      dataSecondary.key,
    ]);
    pieInstance.unloadContent({
      key: 'uid_2',
    });
    expect(pieInstance.content.length).toBe(1);
    expect(pieInstance.content).toEqual([dataPrimary.key]);
    pieInstance.unloadContent({
      key: 'uid_1',
    });
    expect(pieInstance.content.length).toBe(0);
    expect(pieInstance.content).toEqual([]);
  });
  it('updates content correctly when called in order', () => {
    pieInstance.loadContent(dataSecondary);
    expect(pieInstance.content.length).toBe(2);
    expect(pieInstance.content).toEqual([
      dataPrimary.key,
      dataSecondary.key,
    ]);
    pieInstance.unloadContent({
      key: 'uid_1',
    });
    expect(pieInstance.content.length).toBe(1);
    expect(pieInstance.content).toEqual([dataSecondary.key]);
    pieInstance.unloadContent({
      key: 'uid_2',
    });
    expect(pieInstance.content.length).toBe(0);
    expect(pieInstance.content).toEqual([]);
  });
  it('does not throw error when valid input', () => {
    expect(() => {
      pieInstance.unloadContent({
        key: 'uid_1',
        label: dataPrimary.label,
      });
    }).not.toThrowError();
  });
  it('removed legend item correctly', () => {
    pieInstance.unloadContent({
      key: 'uid_1',
      label: dataPrimary.label,
    });
    const legendContainer = fetchElementByClass(styles.legend);
    expect(legendContainer.childNodes.length).toBe(0);
  });
});
