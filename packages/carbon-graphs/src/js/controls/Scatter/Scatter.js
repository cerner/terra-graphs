'use strict';

import { GraphContent } from '../../core';
import { getDefaultValue } from '../../core/BaseConfig';
import constants from '../../helpers/constants';
import {
  updateShapesDuringReflow,
  prepareLabelShapeItem,
  removeLabelShapeItem,
} from '../../helpers/label';
import { removeLegendItem, reflowLegend } from '../../helpers/legend';
import {
  createRegion,
  hideAllRegions,
  removeRegion,
  translateRegion,
  areRegionsIdentical,
} from '../../helpers/region';
import styles from '../../helpers/styles';
import utils from '../../helpers/utils';
import {
  clear,
  clickHandler,
  draw,
  hoverHandler,
  prepareLegendItems,
  processDataPoints,
  translateScatterGraph,
  drawDataPoints,
  getDataPointValues,
} from './helpers/helpers';
import ScatterConfig from './ScatterConfig';
import { validateData } from '../../helpers/constructUtils';

/**
 * @typedef {object} Scatter
 * @typedef {object} GraphContent
 * @typedef {object} ScatterConfig
 */

/**
 * Calculates the min and max values for the x axis.
 *
 * @private
 * @param {Array} values - Datapoint values
 * @returns {object} - Contains min and max values for the data points for the x
 */
const calculateValuesRangeXAxis = (values) => {
  // null values are filtered out first
  const xAxisValuesList = values.filter((i) => i.x !== null && i.x !== undefined).map((i) => {
    // if the x-axis is a timeseries, then convert it to an epoc int
    // for easier calculations
    if (typeof i.x === 'string' || i.x instanceof Date) {
      return utils.getEpocFromDateString(i.x);
    }
    return i.x;
  });
  return {
    min: Math.min(...xAxisValuesList),
    max: Math.max(...xAxisValuesList),
  };
};
/**
 * Calculates the min and max values for the y or y2 axis.
 *
 * @private
 * @param {Array} values - Datapoint values
 * @returns {object} - Contains min and max values for the data points for the y or y2 axis
 */
const calculateValuesRangeYAxis = (values) => {
  // null values are filtered out first
  const yAxisValuesList = values.filter((i) => i.y !== null && i.y !== undefined).map((i) => i.y);
  return {
    min: Math.min(...yAxisValuesList),
    max: Math.max(...yAxisValuesList),
  };
};

/**
 * Data point sets can be loaded using this function.
 * Load function validates, clones and stores the input onto a config object.
 *
 * @private
 * @param {object} inputJSON - Input JSON provided by the consumer
 * @returns {object} ScatterConfig config object containing consumer data
 */
const loadInput = (inputJSON) => new ScatterConfig().setInput(inputJSON).validateInput().clone()
  .getConfig();

/**
 * A Scatter graph is a graph used to represent a collection of data
 * points along the X and Y Axis.
 *
 * Lifecycle functions include:
 *  * Load
 *  * Generate
 *  * Unload
 *  * Destroy
 *
 * @module Scatter
 * @class Scatter
 */
class Scatter extends GraphContent {
  /**
     * @class
     * @param {ScatterConfig} input - Input JSON instance created using GraphConfig
     */
  constructor(input) {
    super();
    this.config = loadInput(input);
    this.type = 'Scatter';
    this.config.yAxis = getDefaultValue(
      this.config.yAxis,
      constants.Y_AXIS,
    );
    this.valuesRange = {};

    this.valuesRange.x = calculateValuesRangeXAxis(
      this.config.values,
    );

    this.valuesRange[this.config.yAxis] = calculateValuesRangeYAxis(
      this.config.values,
    );

    this.dataTarget = {};
  }

  /**
     * @inheritdoc
     */
  load(graph) {
    validateData(this.config.values);
    this.dataTarget = processDataPoints(graph.config, this.config);
    draw(graph.scale, graph.config, graph.svg, this.dataTarget);
    if (utils.notEmpty(this.dataTarget.regions)) {
      createRegion(
        graph.scale,
        graph.config,
        graph.svg.select(`.${styles.regionGroup}`),
        this.dataTarget.regions,
        `region_${this.dataTarget.key}`,
        this.config.yAxis,
      );
    }
    prepareLegendItems(
      graph.config,
      {
        clickHandler: clickHandler(
          graph,
          this,
          graph.config,
          graph.svg,
        ),
        hoverHandler: hoverHandler(graph.config.shownTargets, graph.svg),
      },
      this.dataTarget,
      graph.legendSVG,
    );
    prepareLabelShapeItem(
      graph.config,
      this.dataTarget,
      graph.axesLabelShapeGroup[this.config.yAxis],
    );
    return this;
  }

  /**
     * @inheritdoc
     */
  unload(graph) {
    clear(graph.svg, this.dataTarget);
    removeRegion(
      graph.svg.select(`.${styles.regionGroup}`),
      this.dataTarget,
    );
    removeLegendItem(graph.legendSVG, this.dataTarget);
    removeLabelShapeItem(
      graph.axesLabelShapeGroup[this.config.yAxis],
      this.dataTarget,
      graph.config,
    );
    this.dataTarget = {};
    this.config = {};
    return this;
  }

  /**
     * @inheritdoc
     */
  resize(graph) {
    if (utils.notEmpty(this.dataTarget.regions)) {
      if (graph.content.length > 1 && !graph.config.shouldHideAllRegion) {
        if (areRegionsIdentical(graph.svg)) {
          graph.config.shouldHideAllRegion = false;
        } else {
          hideAllRegions(graph.svg);
          graph.config.shouldHideAllRegion = true;
        }
      }
    } else {
      hideAllRegions(graph.svg);
      graph.config.shouldHideAllRegion = true;
    }
    translateRegion(
      graph.scale,
      graph.config,
      graph.svg.select(`.${styles.regionGroup}`),
    );
    translateScatterGraph(graph.scale, graph.svg, graph.config);
    return this;
  }

  /**
     * @inheritdoc
     */
  reflow(graph, graphData) {
    this.config.values = graphData.values;
    validateData(this.config.values);
    const eventHandlers = {
      clickHandler: clickHandler(graph, this, graph.config, graph.svg),
      hoverHandler: hoverHandler(graph.config.shownTargets, graph.svg),
    };
    this.dataTarget = processDataPoints(graph.config, this.config);
    const position = graph.config.shownTargets.lastIndexOf(graphData.key);
    if (position > -1) {
      graph.config.shownTargets.splice(position, 1);
    }
    const scatterGraph = graph.content.filter((scatter) => scatter.config.key === graphData.key);
    if (!utils.isEmptyArray(scatterGraph)) {
      reflowLegend(
        graph.legendSVG,
        scatterGraph[0].config,
        graph,
        eventHandlers,
      );
    }
    const currentPointsPath = graph.svg
      .select(`g[aria-describedby="${graphData.key}"]`)
      .selectAll(`.${styles.pointGroup}`)
      .data(this.dataTarget);
    currentPointsPath.exit().remove();
    const pointPath = graph.svg
      .select(`g[aria-describedby="${graphData.key}"]`)
      .select(`.${styles.currentPointsGroup}`)
      .selectAll(`[class*="${styles.point}"]`)
      .data(getDataPointValues(this.dataTarget));
    drawDataPoints(graph.scale, graph.config, pointPath.enter(), graph.legendSVG);
    pointPath
      .exit()
      .transition()
      .call(
        constants.d3Transition(
          graph.config.settingsDictionary.transition,
        ),
      )
      .remove();

    updateShapesDuringReflow(graph, graphData, this);
    this.valuesRange[this.config.yAxis] = calculateValuesRangeYAxis(this.config.values);
  }

  /**
     * @inheritdoc
     */
  redraw(graph) {
    clear(graph.svg, this.dataTarget);
    draw(graph.scale, graph.config, graph.svg, this.dataTarget, graph.legendSVG);
    return this;
  }
}

export default Scatter;
