'use strict';

import BaseConfig, { getDefaultValue, getDomain } from '../../core/BaseConfig';
import {
  generateClipPathId,
  isPanningModeEnabled,
} from '../../core/BaseConfig/helper';
import constants, { AXIS_TYPE } from '../../helpers/constants';
import errors from '../../helpers/errors';
import utils from '../../helpers/utils';
import { DEFAULT_LOCALE } from '../../locale/index';
import { getLegendPadding } from '../../helpers/legend';

/**
 * Helper function to set the right padding values based on input JSON.
 *
 * @private
 * @param {object} config - config which needs to be updated
 * @param {object} inputPadding - input padding provided via input JSON.
 * @returns {object} - padding for Gantt
 */
const getPadding = (config, inputPadding) => {
  if (utils.isDefined(config.padding)) {
    return {
      top: getDefaultValue(inputPadding.top, constants.PADDING.top),
      bottom: getDefaultValue(
        inputPadding.bottom,
        constants.PADDING.bottom,
      ),
      right: getDefaultValue(inputPadding.right, constants.PADDING.right),
      left: getDefaultValue(inputPadding.left, constants.PADDING.left),
      hasCustomPadding: true,
    };
  }
  return {
    top: constants.PADDING.top,
    bottom: constants.PADDING.bottom,
    right: constants.PADDING.right,
    left: constants.PADDING.left,
    hasCustomPadding: false,
  };
};

/**
 * Used to set the clamp and transition when panning is enabled or not.
 *
 * @private
 * @param {object} config - config object used by the graph.
 * @returns {undefined} returns nothing
 */
export const settingsDictionary = (config) => (isPanningModeEnabled(config)
  ? {
    shouldClamp: false,
    transition: constants.D3_TRANSITION_PROPERTIES_DISABLED,
  }
  : {
    shouldClamp: true,
    transition: constants.D3_TRANSITION_PROPERTIES_ENABLED,
  });

/**
 * Processes the input from the JSON and updates the config object.
 * d3 domain and ranges are stored based on the upper and lower x limits.
 *
 * @private
 * @param {object} input - Input JSON provided by the consumer
 * @param {object} config - config object used by the graph
 * @returns {object} - returns configuration object constructed using Input JSON
 */
export const processInput = (input, config) => {
  const configTempParam = config;
  const axis = utils.deepClone(input.axis);
  configTempParam.clipPathId = generateClipPathId();
  configTempParam.bindTo = input.bindTo;
  configTempParam.bindLegendTo = input.bindLegendTo;
  configTempParam.padding = getPadding(configTempParam, input.padding);
  configTempParam.padding.hasCustomPadding = utils.isDefined(input.padding);
  configTempParam.legendPadding = getLegendPadding(configTempParam, input.legendPadding);
  configTempParam.axis = {
    x: {},
  };
  configTempParam.d3Locale = getDefaultValue(input.locale, DEFAULT_LOCALE);
  configTempParam.throttle = getDefaultValue(
    input.throttle,
    constants.RESIZE_THROTTLE,
  );
  configTempParam.settingsDictionary = settingsDictionary(input);
  configTempParam.showLabel = getDefaultValue(input.showLabel, true);
  configTempParam.showLegend = getDefaultValue(input.showLegend, true);
  configTempParam.axis.x = Object.assign(axis.x, {
    type: AXIS_TYPE.TIME_SERIES,
    show: true,
    ticks: getDefaultValue(axis.x.ticks, {}),
    domain: getDomain(
      AXIS_TYPE.TIME_SERIES,
      axis.x.lowerLimit,
      axis.x.upperLimit,
    ),
    rangeRounding: getDefaultValue(axis.x.rangeRounding, true),
  });
  configTempParam.shownTargets = [];
  return configTempParam;
};

/**
 * API to parse consumer input for Graph
 *
 * @class TimelineConfig
 */
class TimelineConfig extends BaseConfig {
  /**
     * @inheritdoc
     */
  constructor() {
    super();
    this.config = null;
    this.input = null;
  }

  /**
     * @inheritdoc
     */
  getConfig() {
    return this.config;
  }

  /**
     * @inheritdoc
     */
  setInput(inputJSON) {
    this.input = inputJSON;
    return this;
  }

  /**
     * Validates and verifies the input JSON object
     * Checks if the following properties are present:
     *      bindTo
     *      axis
     *      axis.x
     *
     * @throws {module:errors.THROW_MSG_NO_BIND}
     * @throws {module:errors.THROW_MSG_NO_AXES_DATA_LOADED}
     * @throws {module:errors.THROW_MSG_NO_AXIS_INFO}
     * @throws {module:errors.THROW_MSG_NO_AXIS_LIMIT_INFO}
     * @throws {module:errors.THROW_MSG_INVALID_AXIS_TYPE_VALUES}
     * @returns {TimelineConfig} instance object
     */
  validateInput() {
    if (utils.isEmpty(this.input)) {
      throw new Error(errors.THROW_MSG_NO_AXES_DATA_LOADED);
    }
    if (utils.isEmpty(this.input.bindTo)) {
      throw new Error(errors.THROW_MSG_NO_BIND);
    }
    if (
      utils.isEmpty(this.input.axis)
            || utils.isEmpty(this.input.axis.x)
    ) {
      throw new Error(errors.THROW_MSG_NO_AXIS_INFO);
    }
    if (
      utils.isEmpty(this.input.axis.x.lowerLimit)
            || utils.isEmpty(this.input.axis.x.upperLimit)
    ) {
      throw new Error(errors.THROW_MSG_NO_AXIS_LIMIT_INFO);
    }
    if (
      !utils.isDate(this.input.axis.x.lowerLimit)
            || !utils.isDate(this.input.axis.x.upperLimit)
    ) {
      throw new Error(errors.THROW_MSG_INVALID_AXIS_TYPE_VALUES);
    }
    return this;
  }

  /**
     * Clones the input JSON into the config object
     *
     * @returns {TimelineConfig} instance object
     */
  clone() {
    this.config = utils.deepClone(this.input);
    return this;
  }
}

export default TimelineConfig;
