import sinon from 'sinon';
import { AXIS_TYPE, COLORS } from '../../../../src/js/helpers/constants';
import utils from '../../../../src/js/helpers/utils';

export const dataPointClickHandlerSpy = sinon.spy();
/**
 * Creates and returns an example input with data point values
 *
 * @param {Array} values - x and y co-ordinate values
 * @param {boolean} isDefaultColor - if true, doesnt load the COLOR
 * @param {boolean} isY2Axis - if true, then "y2"
 * @returns {object} input JSON
 */
export const getInput = (values, isDefaultColor = true, isY2Axis = false) => ({
  key: 'uid_1',
  color: !isDefaultColor ? COLORS[Object.keys(COLORS)[1]] : '',
  onClick: dataPointClickHandlerSpy,
  yAxis: isY2Axis ? 'y2' : 'y',
  label: {
    display: 'Data Label A',
  },
  values,
});

/**
 * Creates and returns an example input with data point values
 *
 * @param {Array} values - x and y co-ordinate values
 * @param {boolean} isDefaultColor - if true, doesnt load the COLOR
 * @param {boolean} isY2Axis - if true, then "y2"
 * @returns {object} input JSON
 */
export const getNoOnClickInput = (
  values,
  isDefaultColor = true,
  isY2Axis = false,
) => ({
  key: 'uid_1',
  color: !isDefaultColor ? COLORS[Object.keys(COLORS)[1]] : '',
  yAxis: isY2Axis ? 'y2' : 'y',
  label: {
    display: 'Data Label A',
  },
  values,
});
/**
 * Creates and returns an example input with custom axis
 *
 * @param {object} axis - X and Y axis data
 * @returns {object} axes JSON
 */
export const getAxes = (axis = {}) => ({
  bindTo: '#testBubble_carbon',
  axis: utils.deepClone(axis),
});
export const axisTimeSeries = {
  x: {
    type: AXIS_TYPE.TIME_SERIES,
    label: 'X Label',
    lowerLimit: '2016-01-01T12:00:00Z',
    upperLimit: '2017-01-01T12:00:00Z',
  },
  y: {
    label: 'Y Label',
    lowerLimit: 0,
    upperLimit: 20,
  },
  y2: {
    show: true,
    label: 'Y2 Label',
    lowerLimit: 0,
    upperLimit: 20,
  },
};
export const valuesTimeSeries = [
  {
    x: '2016-02-03T12:00:00Z',
    y: 1,
  },
  {
    x: '2016-03-03T12:00:00Z',
    y: 10,
  },
  {
    x: '2016-06-03T12:00:00Z',
    y: 100,
  },
];
export const axisDefault = {
  x: {
    label: 'Some X Label',
    lowerLimit: 0,
    upperLimit: 100,
  },
  y: {
    label: 'Some Y Label',
    lowerLimit: 0,
    upperLimit: 20,
  },
  y2: {
    show: true,
    label: 'Some Y2 Label',
    lowerLimit: 0,
    upperLimit: 120,
  },
};
export const valuesDefault = [
  {
    x: 35,
    y: 4,
  },
  {
    x: 45,
    y: 10,
  },
  {
    x: 25,
    y: 35,
  },
];

export const valuesDefaultWeightBased = [
  {
    x: 35,
    y: 4,
    weight: 30,
  },
  {
    x: 45,
    y: 10,
    weight: 40,
  },
  {
    x: 25,
    y: 35,
    weight: 80,
  },
];
export const inputSecondary = {
  key: 'uid_2',
  label: {
    display: 'Data Label B',
  },
  values: valuesDefault,
};
export const inputTertiary = {
  key: 'uid_3',
  label: {
    display: 'Data Label C',
  },
  values: valuesDefault,
};
/**
 * Returns the DOM element queried by Class
 *
 * @param {HTMLElement} id - Id attribute name
 * @param {string} cls - Class attribute name
 * @returns {HTMLElement} - DOM element
 */
export const fetchElementByClass = (id, cls) => id.querySelector(`.${cls}`);

/**
 *
 * @private
 * @param {string} id - Id attribute name
 * @param {string} tagName - tag attribute name
 * @returns {HTMLElement} - DOM element
 */
export const fetchElementByTag = (id, tagName) => id.querySelector(`${tagName}`);

/**
 * Returns the DOM element queried by Class
 *
 * @param {HTMLElement} id - Id attribute name
 * @param {string} cls - Class attribute name
 * @returns {HTMLElement} - DOM element
 */
export const fetchAllElementsByClass = (id, cls) => id.querySelectorAll(`.${cls}`);
