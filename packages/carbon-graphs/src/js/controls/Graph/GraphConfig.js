'use strict';

import BaseConfig, { getDefaultValue, getDomain } from '../../core/BaseConfig';
import {
  generateClipPathId,
  generateDatelineClipPathId,
  isPanningModeEnabled,
} from '../../core/BaseConfig/helper';
import { hasY2Axis } from '../../helpers/axis';
import constants, {
  AXES_ORIENTATION,
  AXIS_TYPE,
} from '../../helpers/constants';
import { validateDateline } from '../../helpers/dateline';
import errors from '../../helpers/errors';
import { validateEventline } from '../../helpers/eventline';
import utils from '../../helpers/utils';
import { DEFAULT_LOCALE } from '../../locale/index';
import { getLegendPadding } from '../../helpers/legend';

const initialAxisInfo = {
  ticks: {},
  show: false,
  domain: {
    lowerLimit: 0,
    upperLimit: 0,
  },
};

/**
 * Helper function to set the right padding values based on input JSON.
 *
 * @private
 * @param {object} config - config which needs to be updated
 * @param {object} inputPadding - input padding provided via input JSON.
 * @returns {object} - padding for Graph
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
    shouldCreateDatelineDefs: true,
  }
  : {
    shouldClamp: true,
    transition: constants.D3_TRANSITION_PROPERTIES_ENABLED,
    shouldCreateDatelineDefs: false,
  });

/**
 * Processes the input from the JSON and updates the config object.
 * d3 domain and ranges are stored based on the upper and lower x, y and y2 limits.
 *
 * @private
 * @param {object} input - Input JSON provided by the consumer
 * @param {object} config - config object used by the graph
 * @param {string} type - input type
 * @returns {object} - returns configuration object constructed using Input JSON
 */
export const processInput = (input, config, type) => {
  const configTempParam = config;
  const axis = utils.deepClone(input.axis);
  const getAxisDomain = (conf, yAxis, axisObj, showAxis = false) => {
    const confTempParam = conf;
    confTempParam.axis[yAxis].ticks = getDefaultValue(axisObj[yAxis].ticks, {});
    confTempParam.axis[yAxis].show = getDefaultValue(
      axisObj[yAxis].show,
      showAxis,
    );
    confTempParam.axis[yAxis].domain = {
      lowerLimit: utils.getNumber(axisObj[yAxis].lowerLimit),
      upperLimit: utils.getNumber(axisObj[yAxis].upperLimit),
    };
    confTempParam.axis[yAxis].rangeRounding = getDefaultValue(
      axisObj[yAxis].rangeRounding,
      true,
    );
    confTempParam.axis[yAxis].suppressTrailingZeros = getDefaultValue(
      axisObj[yAxis].suppressTrailingZeros,
      false,
    );
    return confTempParam;
  };
  configTempParam.clipPathId = generateClipPathId();
  configTempParam.datelineClipPathId = generateDatelineClipPathId();
  configTempParam.bindTo = input.bindTo;
  configTempParam.bindLegendTo = input.bindLegendTo;
  configTempParam.axis = axis;
  configTempParam.dateline = getDefaultValue(utils.deepClone(input.dateline), []);
  configTempParam.eventline = getDefaultValue(utils.deepClone(input.eventline), []);
  configTempParam.padding = getPadding(configTempParam, input.padding);
  configTempParam.locale = getDefaultValue(input.locale, DEFAULT_LOCALE);
  configTempParam.d3Locale = getDefaultValue(input.locale, DEFAULT_LOCALE);
  configTempParam.showNoDataText = getDefaultValue(input.showNoDataText, true);
  configTempParam.throttle = getDefaultValue(
    input.throttle,
    constants.RESIZE_THROTTLE,
  );
  configTempParam.settingsDictionary = settingsDictionary(input);
  configTempParam.showLabel = getDefaultValue(input.showLabel, true);
  configTempParam.showLegend = getDefaultValue(input.showLegend, true);
  configTempParam.showShapes = getDefaultValue(input.showShapes, true);
  configTempParam.showHGrid = getDefaultValue(input.showHGrid, true);
  configTempParam.showVGrid = getDefaultValue(input.showVGrid, true);
  configTempParam.dimension = getDefaultValue(input.dimension, {});
  configTempParam.allowCalibration = getDefaultValue(input.allowCalibration, true);
  configTempParam.removeContainerPadding = getDefaultValue(
    input.removeContainerPadding,
    false,
  );
  configTempParam.legendPadding = getLegendPadding(configTempParam, input.legendPadding);

  // Additional X Axis properties defined on top of input axis
  configTempParam.axis.x.type = getDefaultValue(axis.x.type, AXIS_TYPE.DEFAULT);
  configTempParam.axis.x.ticks = getDefaultValue(axis.x.ticks, {});
  configTempParam.axis.x.show = getDefaultValue(axis.x.show, true);
  configTempParam.axis.x.orientation = getDefaultValue(
    axis.x.orientation,
    AXES_ORIENTATION.X.BOTTOM,
  );
  configTempParam.axis.x.domain = getDomain(
    type,
    axis.x.lowerLimit,
    axis.x.upperLimit,
  );
  configTempParam.axis.x.rangeRounding = getDefaultValue(axis.x.rangeRounding, true);
  configTempParam.axis.x.suppressTrailingZeros = getDefaultValue(
    axis.x.suppressTrailingZeros,
    false,
  );

  // Additional Y & Y2 Axis properties defined on top of input axis
  if (input.axis.y) {
    getAxisDomain(configTempParam, constants.Y_AXIS, axis, true);
  } else {
    configTempParam.axis.y = initialAxisInfo;
  }
  if (input.axis.y2) {
    getAxisDomain(configTempParam, constants.Y2_AXIS, axis);
  } else {
    configTempParam.axis.y2 = initialAxisInfo;
  }
  configTempParam.shownTargets = [];
  configTempParam.hasCriticality = false;
  configTempParam.shouldHideAllRegion = false;
  // axisPadding is needed for case by case basis. Example: for bar graphs, we toggle padding using this variable
  configTempParam.axisPadding = {
    y: getDefaultValue(axis.y.padDomain, true),
    y2: getDefaultValue(axis.y2.padDomain, true),
  };
  configTempParam.axisInfoRowLabelHeight = 0; // specific only to  Bar Graphs (when axis info row labels are used in Bar Graphs)
  return configTempParam;
};

/**
 * Checks if the keys for data points sets are unique
 *
 * @private
 * @param {Array} dictionary - Collections of graph content
 * @param {string} key - unique key for the newly added content
 * @returns {boolean} false if not unique
 */
export const isUniqueKey = (dictionary, key) => !utils.hasValue(
  dictionary.map((i) => i.config.key),
  key,
);

/**
 * Validates the newly added content into the graph before rendering
 *
 * @private
 * @param {Array} content - Current set of graph contents, already rendered
 * @param {object} input - Newly added graph content
 * @returns {undefined} - returns nothing
 */
export const validateContent = (content, input) => {
  if (utils.isEmpty(input)) {
    throw new Error(errors.THROW_MSG_NO_DATA_LOADED);
  }
  if (!isUniqueKey(content, input.config.key)) {
    throw new Error(errors.THROW_MSG_NON_UNIQUE_PROPERTY);
  }
};

/**
 * API to parse consumer input for Graph
 *
 * @class GraphConfig
 */
class GraphConfig extends BaseConfig {
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
     *      If axis.x.type is provided then it should be either default or timeseries
     *      axis.y
     *      Y axis label is mandatory and X axis is optional
     *
     * @throws {module:errors.THROW_MSG_NO_BIND}
     * @throws {module:errors.THROW_MSG_INVALID_TYPE}
     * @throws {module:errors.THROW_MSG_NO_AXIS_INFO}
     * @throws {module:errors.THROW_MSG_NO_AXIS_LIMIT_INFO}
     * @throws {module:errors.THROW_MSG_NO_AXIS_LABEL_INFO}
     * @returns {GraphConfig} instance object
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
            || utils.isEmpty(this.input.axis.y)
    ) {
      throw new Error(errors.THROW_MSG_NO_AXIS_INFO);
    }
    if (
      utils.notEmpty(this.input.axis.x.type)
            && !utils.hasValue(Object.values(AXIS_TYPE), this.input.axis.x.type)
    ) {
      throw new Error(errors.THROW_MSG_INVALID_TYPE);
    }
    if (
      utils.isEmpty(this.input.axis.x.lowerLimit)
            || utils.isEmpty(this.input.axis.x.upperLimit)
            || utils.isEmpty(this.input.axis.y.lowerLimit)
            || utils.isEmpty(this.input.axis.y.upperLimit)
    ) {
      throw new Error(errors.THROW_MSG_NO_AXIS_LIMIT_INFO);
    }
    if (utils.isEmpty(this.input.axis.y.label)) {
      throw new Error(errors.THROW_MSG_NO_AXIS_LABEL_INFO);
    }
    if (hasY2Axis(this.input.axis)) {
      if (
        utils.isEmpty(this.input.axis.y2.lowerLimit)
                || utils.isEmpty(this.input.axis.y2.upperLimit)
      ) {
        throw new Error(errors.THROW_MSG_NO_AXIS_LIMIT_INFO);
      }
      if (utils.isEmpty(this.input.axis.y2.label)) {
        throw new Error(errors.THROW_MSG_NO_AXIS_LABEL_INFO);
      }
    }
    if (
      utils.notEmpty(this.input.dateline)
            && this.input.axis.x.type !== AXIS_TYPE.TIME_SERIES
    ) {
      throw new Error(errors.THROW_MSG_INVALID_TYPE);
    }
    if (
      utils.notEmpty(this.input.dateline)
            && this.input.axis.x.type === AXIS_TYPE.TIME_SERIES
    ) {
      this.input.dateline.forEach((dateline) => {
        validateDateline(dateline);
      });
    }
    if (
      utils.notEmpty(this.input.eventline)
            && this.input.axis.x.type !== AXIS_TYPE.TIME_SERIES
    ) {
      throw new Error(errors.THROW_MSG_INVALID_TYPE);
    }
    if (
      utils.notEmpty(this.input.eventline)
            && this.input.axis.x.type === AXIS_TYPE.TIME_SERIES
    ) {
      this.input.eventline.forEach((eventline) => {
        validateEventline(eventline);
      });
    }
    return this;
  }

  /**
     * Clones the input JSON into the config object
     *
     * @returns {GraphConfig} instance object
     */
  clone() {
    this.config = utils.deepClone(this.input);
    return this;
  }
}

export default GraphConfig;
