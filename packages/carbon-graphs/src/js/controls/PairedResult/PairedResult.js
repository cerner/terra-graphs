'use strict';

import { GraphContent } from '../../core';
import { getDefaultValue } from '../../core/BaseConfig';
import constants from '../../helpers/constants';
import {
  prepareLabelShapeItem,
  removeLabelShapeItem,
} from '../../helpers/label';
import { removeLegendItem, reflowLegend } from '../../helpers/legend';
import {
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
  drawLine,
  drawPoints,
  getValue,
  getDataPointValues,
  hoverHandler,
  iterateOnPairType,
  prepareLegendItems,
  processDataPoints,
  renderRegion,
  isRegionMappedToAllValues,
  translatePairedResultGraph,
  isSinglePairedResultTargetDisplayed,
} from './helpers/helpers';
import { drawSelectionIndicator } from './helpers/selectionIndicatorHelpers';
import PairedResultConfig from './PairedResultConfig';
import {
  calculateVerticalPadding,
  getXAxisXPosition,
} from '../../helpers/axis';
import { validatePairedResultData } from '../../helpers/constructUtils';

/**
 * @typedef {object} PairedResult
 * @typedef {object} GraphContent
 * @typedef {object} PairedResultConfig
 */

/**
 * Calculates the min and max values for the x axis.
 *
 * @private
 * @param {Array} values - Datapoint values
 * @returns {object} - Contains min and max values for the data points
 */
const calculateValuesRangeXAxis = (values) => {
  const xAxisValuesList = values.map((i) => Object.keys(i).map((j) => {
    // if the x-axis is a timeseries, then convert it to an epoc int
    // for easier calculations
    if (typeof i[j].x === 'string' || i[j].x instanceof Date) {
      return utils.getEpocFromDateString(i[j].x);
    }
    return i[j].x;
  }));
  return {
    min: Math.min(
      ...xAxisValuesList.map((i) => Math.min(...i)),
    ),
    max: Math.max(
      ...xAxisValuesList.map((i) => Math.max(...i)),
    ),
  };
};

/**
 * Calculates the min and max values for the y or y2 axis.
 *
 * @private
 * @param {Array} values - Datapoint values
 * @returns {object} - Contains min and max values for the data points
 */
const calculateValuesRangeYAxis = (values) => {
  const yAxisValuesList = values.map((i) => Object.keys(i).map((j) => i[j].y));
  return {
    min: Math.min(
      ...yAxisValuesList.map((i) => Math.min(...i)),
    ),
    max: Math.max(
      ...yAxisValuesList.map((i) => Math.max(...i)),
    ),
  };
};

/**
 * Data point sets can be loaded using this function.
 * Load function validates, clones and stores the input onto a config object.
 *
 * @private
 * @param {object} inputJSON - Input JSON provided by the consumer
 * @returns {object} PairedResultConfig config object containing consumer data
 */
const loadInput = (inputJSON) => new PairedResultConfig()
  .setInput(inputJSON)
  .validateInput()
  .clone()
  .getConfig();

/**
 * Filters invalid data like null and blank.
 *
 * @private
 * @param {object} data - Data points object
 * @returns {object} filteredData - filtered data object
 */
const filterPairedResultData = (data) => data.map((value) => {
  const filteredValue = {};
  iterateOnPairType((t) => {
    if (value[t] != null && !(typeof value[t] === 'object' && Object.keys(value[t]).length === 0)) {
      filteredValue[t] = value[t];
    }
  });
  return filteredValue;
});
/**
 * A Paired result graph is a graph that is represented by 2 points
 * and a line connecting them. There may be an optional 3rd datapoint
 * representing a median between them.
 *
 * @example
 * You can have 3 pairs of x and y co-ordinates with different x and y values to make option 3 below.
 * Or
 * You can have 3 identical X co-ordinates with varying Y co-ordinates to have option 1, shown below.
 *   o
 *   |
 *   |
 *   |
 *   |
 *   o
 *
 *  // Or
 *
 * o------------o
 *
 * // Or
 * o
 *  \
 *   \
 *    \
 *     \
 *      o
 *
 * // etc.
 * Lifecycle functions include:
 *  * Load
 *  * Generate
 *  * Unload
 *  * Destroy
 * @module PairedResult
 * @class PairedResult
 */
class PairedResult extends GraphContent {
  /**
     * @class
     * @param {PairedResultConfig} input - Input JSON instance created using GraphConfig
     */
  constructor(input) {
    super();
    this.config = loadInput(input);
    this.type = 'PairedResult';
    this.config.yAxis = getDefaultValue(
      this.config.yAxis,
      constants.Y_AXIS,
    );
    this.config.values = filterPairedResultData(this.config.values);

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
    validatePairedResultData(this.config.values);
    this.dataTarget = processDataPoints(graph.config, this.config);
    draw(graph.scale, graph.config, graph.svg, this.dataTarget);
    if (
      !utils.isEmptyArray(this.dataTarget.values)
            && (utils.notEmpty(this.dataTarget.regions)
                || utils.notEmpty(this.dataTarget.valueRegionSubset))
    ) {
      renderRegion(graph.scale, graph.config, graph.svg, this.dataTarget);
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
        hoverHandler: hoverHandler(graph.config, graph.svg),
      },
      this.dataTarget,
      graph.legendSVG,
    );
    if (graph.axesLabelShapeGroup[this.config.yAxis]) {
      iterateOnPairType((type) => {
        prepareLabelShapeItem(
          graph.config,
          {
            key: `${this.dataTarget.key}_${type}`,
            label: getValue(this.dataTarget.label, type),
            color: getValue(this.dataTarget.color, type),
            shape: getValue(this.dataTarget.shape, type),
            values: this.dataTarget.values,
          },
          graph.axesLabelShapeGroup[this.config.yAxis],
        );
      });
    }
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
    iterateOnPairType((type) => {
      const key = `${this.dataTarget.key}_${type}`;
      removeLegendItem(graph.legendSVG, {
        key,
      });
      removeLabelShapeItem(
        graph.axesLabelShapeGroup[this.config.yAxis],
        {
          key,
        },
        graph.config,
      );
    });
    this.dataTarget = {};
    this.config = {};
    return this;
  }

  /**
     * @inheritdoc
     */
  resize(graph) {
    if (utils.notEmpty(this.dataTarget.values)) {
      if (
        utils.notEmpty(this.dataTarget.regions)
          || utils.notEmpty(this.dataTarget.valueRegionSubset)
      ) {
        const { values } = this.dataTarget;
        if (isSinglePairedResultTargetDisplayed(graph.config, graph)) {
          graph.config.shouldHideAllRegion = false;
        } else if (graph.content.length > 1) {
          // If graph has more than 1 content, we compare the regions if they are identical show and hide if even atleast one of them is not.
          // check if paired Data is proper i.e - region for each key(high, mid and low) in value should be there
          const isPairedDataProper = values.every((value) => isRegionMappedToAllValues(
            value,
            this.dataTarget.regions
              || this.dataTarget.valueRegionSubset,
          ));

          graph.config.shouldHideAllRegion = !isPairedDataProper
              || graph.config.shouldHideAllRegion
              || !areRegionsIdentical(graph.svg);
        }

        translateRegion(
          graph.scale,
          graph.config,
          graph.svg.select(
                `g[aria-describedby="region_${this.dataTarget.key}"]`,
          ),
          this.dataTarget.yAxis,
          utils.notEmpty(this.dataTarget.valueRegionSubset),
        );
      } else {
        graph.config.shouldHideAllRegion = true;
      }
      if (graph.config.shouldHideAllRegion) {
        hideAllRegions(graph.svg);
      }
    }

    translatePairedResultGraph(graph.scale, graph.svg, graph.config);
    return this;
  }

  /**
     * @inheritdoc
     */
  reflow(graph, graphData) {
    const eventHandlers = {
      clickHandler: clickHandler(graph, this, graph.config, graph.svg),
      hoverHandler: hoverHandler(graph.config, graph.svg),
    };
    const constructLegendLabels = (d, type) => ({

      shape: getValue(d.shape, type),
      color: getValue(d.color, type),
      label: getValue(d.label, type),
      key: `${d.key}_${type}`,
      values: d.values,
      legendOptions: d.legendOptions,
      type,
    });
    this.config.values = utils.deepClone(graphData.values);
    this.config.values = filterPairedResultData(this.config.values);
    validatePairedResultData(this.config.values);
    this.dataTarget = processDataPoints(graph.config, this.config, true);
    const drawBox = (boxPath) => {
      drawSelectionIndicator(graph.scale, graph.config, boxPath);
      drawLine(graph.scale, graph.config, boxPath);
      drawPoints(graph.scale, graph.config, boxPath, graph.legendSVG);
    };
    const types = ['high', 'mid', 'low'];
    types.forEach((type) => {
      const label = getValue(graph.contentConfig[0].label, type);
      if (label && label.display) {
        const pairedResultGraph = graph.contentConfig.filter((pairedResult) => pairedResult.key === graphData.key);
        if (!utils.isEmptyArray(pairedResultGraph)) {
          reflowLegend(
            graph.legendSVG,
            constructLegendLabels(pairedResultGraph[0], type),
            graph,
            eventHandlers,
          );
        }
      }
    });
    iterateOnPairType((type) => {
      const key = `${this.dataTarget.key}_${type}`;
      removeLabelShapeItem(
        graph.axesLabelShapeGroup[this.config.yAxis],
        {
          key,
        },
        graph.config,
      );
    });
    if (!utils.isEmpty(graphData.values)) {
      iterateOnPairType((type) => {
        prepareLabelShapeItem(
          graph.config,
          {
            key: `${this.dataTarget.key}_${type}`,
            label: getValue(this.dataTarget.label, type),
            color: getValue(this.dataTarget.color, type),
            shape: getValue(this.dataTarget.shape, type),
            values: this.dataTarget.values,
          },
          graph.axesLabelShapeGroup[this.config.yAxis],
        );
      });
    }
    const internalValuesSubset = getDataPointValues(this.dataTarget);
    graph.svg
      .select(`g[aria-describedby="${graphData.key}"]`)
      .selectAll(`.${styles.pairedBox}`)
      .remove();
    const pairedBoxSVG = graph.svg
      .select(`g[aria-describedby="${graphData.key}"]`)
      .selectAll(`.${styles.pairedBox}`)
      .data(internalValuesSubset);
    pairedBoxSVG
      .enter()
      .append('g')
      .classed(styles.pairedBox, true)
      .attr('aria-selected', false)
      .attr(
        'transform',
        `translate(${getXAxisXPosition(
          graph.config,
        )},${calculateVerticalPadding(graph.config)})`,
      )
      .call(drawBox);
    pairedBoxSVG.exit().remove();

    this.valuesRange[this.config.yAxis] = calculateValuesRangeYAxis(this.config.values);
    this.resize(graph);
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

export default PairedResult;
