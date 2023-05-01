import * as d3 from '../../../src/js/d3Import.js';

/**
 * Creates format for locales like Spanish(es_ES), Portuguese(pt_BR) and Dutch(nl_NL).
 *
 * @private
 * @param {object} date - date object which are going to assign for axis ticks.
 * @returns {string} format to be displayed on axis.
 */
const getDefaultDateFormat = (date) => {
  if (d3.timeSecond(date) < date) {
    return d3.timeFormat('.%L')(date);
  } if (d3.timeMinute(date) < date) {
    return d3.timeFormat(':%S')(date);
  } if (d3.timeHour(date) < date) {
    return d3.timeFormat('%I:%M')(date);
  } if (d3.timeDay(date) < date) {
    return d3.timeFormat('%I %p')(date);
  } if (d3.timeMonth(date) < date) {
    return (d3.timeWeek(date) < date ? d3.timeFormat('%a %d')(date) : d3.timeFormat('%d %b')(date));
  } if (d3.timeYear(date) < date) {
    return d3.timeFormat('%B')(date);
  }
  return d3.timeFormat('%Y')(date);
};

/**
 * Creates format for German(de_DE) locale.
 *
 * @private
 * @param {object} date - date object which are going to assign for axis ticks.
 * @returns {string} format to be displayed on axis.
 */
const getGermanDateFormat = (date) => {
  if (d3.timeSecond(date) < date) {
    return d3.timeFormat('.%L')(date);
  } if (d3.timeMinute(date) < date) {
    return d3.timeFormat(':%S')(date);
  } if (d3.timeHour(date) < date) {
    return d3.timeFormat('%I:%M')(date);
  } if (d3.timeDay(date) < date) {
    return d3.timeFormat('%I %p')(date);
  } if (d3.timeMonth(date) < date) {
    return (d3.timeWeek(date) < date ? d3.timeFormat('%a %d.')(date) : d3.timeFormat('%d. %b')(date));
  } if (d3.timeYear(date) < date) {
    return d3.timeFormat('%B')(date);
  }
  return d3.timeFormat('%Y')(date);
};

/**
 * Creates format for Swedish(sv_SE) locale.
 *
 * @private
 * @param {object} date - date object which are going to assign for axis ticks.
 * @returns {string} format to be displayed on axis.
 */
const getSwedishDateFormat = (date) => {
  if (d3.timeSecond(date) < date) {
    return d3.timeFormat('.%L')(date);
  } if (d3.timeMinute(date) < date) {
    return d3.timeFormat(':%S')(date);
  } if (d3.timeHour(date) < date) {
    return d3.timeFormat('%I:%M')(date);
  } if (d3.timeDay(date) < date) {
    return d3.timeFormat('%I %p')(date);
  } if (d3.timeMonth(date) < date) {
    return (d3.timeWeek(date) < date ? d3.timeFormat('%a %_d')(date) : d3.timeFormat('%_d %b')(date));
  } if (d3.timeYear(date) < date) {
    return d3.timeFormat('%B')(date);
  }
  return d3.timeFormat('%Y')(date);
};

/**
 * Creates format for French(fr_FR) locale.
 *
 * @private
 * @param {object} date - date object which are going to assign for axis ticks.
 * @returns {string} format to be displayed on axis.
 */
const getFrenchDateFormat = (date) => {
  if (d3.timeSecond(date) < date) {
    return d3.timeFormat('.%L')(date);
  } if (d3.timeMinute(date) < date) {
    return d3.timeFormat(':%S')(date);
  } if (d3.timeHour(date) < date) {
    return d3.timeFormat('%I:%M')(date);
  } if (d3.timeDay(date) < date) {
    return d3.timeFormat('%I %p')(date);
  } if (d3.timeMonth(date) < date) {
    return (d3.timeWeek(date) < date ? d3.timeFormat('%a %_d')(date) : d3.timeFormat('%d %b')(date));
  } if (d3.timeYear(date) < date) {
    return d3.timeFormat('%B')(date);
  }
  return d3.timeFormat('%Y')(date);
};

export {
  getDefaultDateFormat,
  getGermanDateFormat,
  getSwedishDateFormat,
  getFrenchDateFormat,
};
