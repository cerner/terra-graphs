'use strict';

import { GraphContent } from '../../core';
import { getDefaultValue } from '../../core/BaseConfig';
import constants from '../../helpers/constants';
import {
  prepareLabelShapeItem,
  removeLabelShapeItem,
  updateShapesDuringReflow,
} from '../../helpers/label';
import { removeLegendItem, reflowLegend } from '../../helpers/legend';
import {
  createRegion,
  hideAllRegions,
  removeRegion,
  translateRegion,
  areRegionsIdentical,
  createValueRegion,
  isSingleTargetDisplayed,
} from '../../helpers/region';
import styles from '../../helpers/styles';
import utils from '../../helpers/utils';
import {
  clear,
  clickHandler,
  draw,
  getDataPointValues,
  drawDataPoints,
  drawDataLines,
  hoverHandler,
  prepareLegendItems,
  processDataPoints,
  translateLineGraph,
} from './helpers/helpers';
import LineConfig from './LineConfig';

/**
 * @typedef {object} Line
 * @typedef {object} GraphContent
 * @typedef {object} LineConfig
 */

/**
 * Calculates the min and max values for the x axis.
 *
 * @private
 * @param {Array} values - Datapoint values
 * @returns {object} - Contains min and max values for the data points for the x axis
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
 * @returns {object} LineConfig config object containing consumer data
 */
const loadInput = (inputJSON) => new LineConfig().setInput(inputJSON).validateInput().clone()
  .getConfig();

/**
 * A Line graph is a graph used to represent a collection of data
 * points connected by a line along the X and Y Axis.
 *
 * Lifecycle functions include:
 *  * Load
 *  * Generate
 *  * Unload
 *  * Destroy
 *
 * @module Line
 * @class Line
 */
class Line extends GraphContent {
  /**
     * @class
     * @param {LineConfig} input - Input JSON instance created using GraphConfig
     */
  constructor(input) {
    super();
    this.config = loadInput(input);
    this.type = 'Line';
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
    this.dataTarget = processDataPoints(graph.config, this.config);
    draw(graph.scale, graph.config, graph.svg, this.dataTarget);
    if (!utils.isEmptyArray(this.dataTarget.values)) {
      if (!utils.isEmptyArray(this.dataTarget.valueRegionSubset)) {
        createValueRegion(
          graph.scale,
          graph.config,
          graph.svg.select(`.${styles.regionGroup}`),
          this.dataTarget.valueRegionSubset,
          `region_${this.dataTarget.key}`,
          this.config.yAxis,
          this.dataTarget.interpolationType,
        );
      } else if (utils.notEmpty(this.dataTarget.regions)) {
        createRegion(
          graph.scale,
          graph.config,
          graph.svg.select(`.${styles.regionGroup}`),
          this.dataTarget.regions,
          `region_${this.dataTarget.key}`,
          this.config.yAxis,
        );
      }
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
    if (
      !utils.isEmptyArray(this.dataTarget.values)
        && graph.config.shownTargets.indexOf(this.dataTarget.key) > -1
    ) {
      if (
        utils.notEmpty(this.dataTarget.regions)
          || !utils.isEmptyArray(this.dataTarget.valueRegionSubset)
      ) {
        if (
          isSingleTargetDisplayed(
            graph.config.shownTargets,
            graph.content,
          )
        ) {
          graph.config.shouldHideAllRegion = false;
        } else {
          graph.config.shouldHideAllRegion = !areRegionsIdentical(
            graph.svg,
          );
        }
      } else {
        graph.config.shouldHideAllRegion = true;
      }
    }
    if (graph.config.shouldHideAllRegion) {
      hideAllRegions(graph.svg);
    }
    translateRegion(
      graph.scale,
      graph.config,
      graph.svg.select(
            `.${styles.regionGroup}`,
            this.dataTarget.valueRegionSubset,
      ),
      this.dataTarget.yAxis,
      !utils.isEmptyArray(this.dataTarget.valueRegionSubset),
      this.dataTarget.interpolationType,
    );
    translateLineGraph(graph.scale, graph.svg, graph.config);
    return this;
  }

  /**
     * @inheritdoc
     */
  reflow(graph, graphData) {
    this.config.values = graphData.values;
    this.dataTarget = processDataPoints(graph.config, this.config);
    const eventHandlers = {
      clickHandler: clickHandler(graph, this, graph.config, graph.svg),
      hoverHandler: hoverHandler(graph.config.shownTargets, graph.svg),
    };
    const position = graph.config.shownTargets.lastIndexOf(graphData.key);
    if (position > -1) {
      graph.config.shownTargets.splice(position, 1);
    }
    const lineGraph = graph.content.filter((line) => line.config.key === graphData.key);
    if (!utils.isEmptyArray(lineGraph)) {
      reflowLegend(
        graph.legendSVG,
        lineGraph[0].config,
        graph,
        eventHandlers,
      );
    }
    const lineSVG = graph.svg
      .select(`g[aria-describedby="${graphData.key}"]`)
      .selectAll(`.${styles.line}`)
      .data([this.dataTarget]);
    drawDataLines(graph.scale, graph.config, lineSVG.enter());
    lineSVG.exit().remove();

    updateShapesDuringReflow(graph, graphData, this);
    if (graph.config.showShapes) {
      const currentPointsPath = graph.svg
        .select(`g[aria-describedby="${graphData.key}"]`)
        .selectAll(`.${styles.pointGroup}`)
        .data(this.dataTarget);
      currentPointsPath.exit().remove();
      const pointPath = graph.svg
        .select(`g[aria-describedby="${graphData.key}"]`)
        .select(`.${styles.currentPointsGroup}`)
        .selectAll(`[class*="${styles.point}"]`)
        .data(getDataPointValues(this.dataTarget).filter((d) => d.y !== null && d.y !== undefined));
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
    }
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

export default Line;
