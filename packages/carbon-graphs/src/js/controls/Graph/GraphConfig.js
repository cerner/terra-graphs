'use strict';

import BaseConfig, { getDefaultValue, getXAxisDomain } from '../../core/BaseConfig';
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

    if (getDefaultValue(this.input.showXLabel, true) && utils.isEmpty(this.input.axis.x.label)) {
      // eslint-disable-next-line no-console
      console.warn('A label for the x-axis is expected to be provided to meet accessibility standards. This label will become required starting in terra-graphs version 3.0.0. "showXLabel" can be set to false to hide the label for situations where the label should not be displayed.');
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

  // TODO: cloning may bloat up the the graph config object by adding additional properties.
  // This may also be an unecessary or redundant step as processInput adds in default values
  // if any are missing. A spike needs to be done to confirm if this step is unecessary and
  // can be removed.

  /**
     * Clones the input JSON into the config object
     *
     * @returns {GraphConfig} instance object
     */
  cloneInput() {
    this.config = utils.deepClone(this.input);
    return this;
  }

  // TODO: this method needs to be added to the baseConfig class as part of the class template

  /**
  * Processes the input from the JSON and updates the config object.
  * d3 domain and ranges are stored based on the upper and lower x, y and y2 limits.
  *
  * @returns {GraphConfig} instance object
  */

  processInput() {
    const axis = utils.deepClone(this.input.axis);
    const getYAxesDomain = (conf, yAxis, axisObj, showAxis = false) => {
      conf.axis[yAxis].ticks = getDefaultValue(axisObj[yAxis].ticks, {});
      conf.axis[yAxis].show = getDefaultValue(
        axisObj[yAxis].show,
        showAxis,
      );
      conf.axis[yAxis].domain = {
        lowerLimit: utils.getNumber(axisObj[yAxis].lowerLimit),
        upperLimit: utils.getNumber(axisObj[yAxis].upperLimit),
      };
      conf.axis[yAxis].rangeRounding = getDefaultValue(
        axisObj[yAxis].rangeRounding,
        true,
      );
      conf.axis[yAxis].suppressTrailingZeros = getDefaultValue(
        axisObj[yAxis].suppressTrailingZeros,
        false,
      );
      return conf;
    };

    // Sets default value if undefined. Otherwise adds the input value.

    this.config.clipPathId = generateClipPathId();
    this.config.datelineClipPathId = generateDatelineClipPathId();
    this.config.bindTo = this.input.bindTo;
    this.config.bindLegendTo = this.input.bindLegendTo;
    this.config.axis = axis;
    this.config.dateline = getDefaultValue(utils.deepClone(this.input.dateline), []);
    this.config.eventline = getDefaultValue(utils.deepClone(this.input.eventline), []);
    this.config.padding = getPadding(this.config, this.input.padding);
    this.config.locale = getDefaultValue(this.input.locale, DEFAULT_LOCALE);
    this.config.d3Locale = getDefaultValue(this.input.locale, DEFAULT_LOCALE);
    this.config.showNoDataText = getDefaultValue(this.input.showNoDataText, true);
    this.config.throttle = getDefaultValue(
      this.input.throttle,
      constants.RESIZE_THROTTLE,
    );
    this.config.settingsDictionary = settingsDictionary(this.input);
    this.config.showLabel = getDefaultValue(this.input.showLabel, true);
    this.config.showXLabel = getDefaultValue(this.input.showXLabel, true);
    this.config.showLegend = getDefaultValue(this.input.showLegend, true);
    this.config.showShapes = getDefaultValue(this.input.showShapes, true);
    this.config.showHGrid = getDefaultValue(this.input.showHGrid, true);
    this.config.showVGrid = getDefaultValue(this.input.showVGrid, true);
    this.config.dimension = getDefaultValue(this.input.dimension, {});
    this.config.allowCalibration = getDefaultValue(this.input.allowCalibration, true);
    this.config.removeContainerPadding = getDefaultValue(
      this.input.removeContainerPadding,
      false,
    );
    this.config.legendPadding = getLegendPadding(this.config, this.input.legendPadding);
    this.config.opaqueBackground = getDefaultValue(this.input.opaqueBackground, false);

    // Additional X Axis properties defined on top of input axis
    this.config.axis.x.type = getDefaultValue(axis.x.type, AXIS_TYPE.DEFAULT);
    this.config.axis.x.ticks = getDefaultValue(axis.x.ticks, {});
    this.config.axis.x.show = getDefaultValue(axis.x.show, true);
    this.config.axis.x.orientation = getDefaultValue(
      axis.x.orientation,
      AXES_ORIENTATION.X.BOTTOM,
    );
    this.config.axis.x.domain = getXAxisDomain(
      this.config.axis.x.type,
      this.config.axis.x.lowerLimit,
      this.config.axis.x.upperLimit,
    );
    this.config.axis.x.rangeRounding = getDefaultValue(axis.x.rangeRounding, true);
    this.config.axis.x.suppressTrailingZeros = getDefaultValue(axis.x.suppressTrailingZeros, false);
    this.config.axis.x.allowCalibration = getDefaultValue(axis.x.allowCalibration, false);

    if (isPanningModeEnabled(this.input)) {
      this.config.axis.x.allowCalibration = false;
    }

    // Additional Y & Y2 Axis properties defined on top of input axis
    if (this.input.axis.y) {
      getYAxesDomain(this.config, constants.Y_AXIS, axis, true);
    } else {
      this.config.axis.y = initialAxisInfo;
    }
    if (this.input.axis.y2) {
      getYAxesDomain(this.config, constants.Y2_AXIS, axis);
    } else {
      this.config.axis.y2 = initialAxisInfo;
    }
    this.config.shownTargets = [];
    this.config.hasCriticality = false;
    this.config.shouldHideAllRegion = false;
    // axisPadding is needed for case by case basis. Example: for bar graphs, we toggle padding using this variable
    this.config.axisPadding = {
      y: getDefaultValue(axis.y.padDomain, true),
      y2: getDefaultValue(axis.y2.padDomain, true),
    };
    this.config.axisInfoRowLabelHeight = 0; // specific only to  Bar Graphs (when axis info row labels are used in Bar Graphs)
    this.config.axis.y.isConsumerProvidedFormat = utils.isDefined(this.config.axis.y.ticks.format);
    this.config.axis.y2.isConsumerProvidedFormat = utils.isDefined(this.config.axis.y2.ticks.format);

    return this;
  }
}

export default GraphConfig;
