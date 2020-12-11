/**
 * @module constructUtils
 * @alias module:constructUtils
 */

import utils from './utils';

/**
 * Simple utility that checks if the input is an array or objects or simple object.
 * Iterate over the array and calls the task callback function.
 *
 * @param {object|Array} input - Input can be a single object or an array of objects
 * @param {Function} task - task callback function that will be called with the input as an argument
 * @returns {undefined} returns nothing
 */
const contentHandler = (input, task) => {
  if(utils.isArray(input)) {
    input.forEach((i) => task(i));
  } else {
    task(input);
  }
};

export { contentHandler};
