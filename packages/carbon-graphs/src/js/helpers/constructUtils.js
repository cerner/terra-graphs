/**
 * @module constructUtils
 * @alias module:constructUtils
 */

import utils from './utils';
import errors from './errors';
import { iterateOnPairType, getValue } from '../controls/PairedResult/helpers/helpers';

/**
 * Simple utility that checks if the input is an array or objects or simple object.
 * Iterate over the array and calls the task callback function.
 *
 * @param {object|Array} input - Input can be a single object or an array of objects
 * @param {Function} task - task callback function that will be called with the input as an argument
 * @returns {undefined} returns nothing
 */
const contentHandler = (input, task) => {
  if (utils.isArray(input)) {
    input.forEach((i) => task(i));
  } else {
    task(input);
  }
};

/**
 * validates data passed by consumer.
 *
 * @param {object} data - Data points object
 * @returns {undefined} returns nothing
 */
const validateData = (data) => {
  // eslint-disable-next-line array-callback-return
  data.map((value) => {
    if (utils.isEmpty(value.y)) {
      throw new Error(errors.THROW_MSG_INVALID_DATA);
    }
  });
};

/**
 * validates paired result data passed by consumer.
 *
 * @param {object} data - Data points object
 * @returns {undefined} returns nothing
 */
const validatePairedResultData = (data) => {
  // eslint-disable-next-line array-callback-return
  data.map((value) => {
    iterateOnPairType((t) => {
      if (utils.isDefined(getValue(value, t))) {
        if (utils.isEmpty(value[t].y)) {
          throw new Error(errors.THROW_MSG_INVALID_DATA);
        }
      }
    });
  });
};
export { contentHandler, validateData, validatePairedResultData };
