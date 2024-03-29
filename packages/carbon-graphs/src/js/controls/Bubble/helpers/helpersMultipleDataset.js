'use strict';

import * as d3 from '../../../d3Modules';
import {
  calculateVerticalPadding,
  getXAxisXPosition,
} from '../../../helpers/axis';
import constants from '../../../helpers/constants';
import styles from '../../../helpers/styles';
import utils from '../../../helpers/utils';
import {
  areWeightsDefined,
  dataPointActionHandler,
  getDataPointValues,
  transformPoint,
} from './helpers';
import { bubbleScale } from './colorGradient';

const decideRadius = (dataTarget, value) => {
  if (
    areWeightsDefined(dataTarget)
      && utils.isUndefined(dataTarget.weight.fixedRadius)
  ) {
    return bubbleScale(dataTarget)(value.weight);
  } if (utils.isUndefined(dataTarget.weight)) {
    return constants.DEFAULT_BUBBLE_RADIUS_MAX;
  }
  return dataTarget.weight.fixedRadius;
};

/**
 * Draws the points with options opted in the input JSON by the consumer for each data set.
 *  Render the point with appropriate color, x and y co-ordinates, label etc.
 *  On click content callback function is called.
 *
 * @private
 * @param {object} scale - d3 scale for Graph
 * @param {object} config - Graph config object derived from input JSON
 * @param {Array} pointGroupPath - d3 html element of the points group
 * @param {object} dataTarget - data for the bubble graph
 * @returns {undefined} - returns nothing
 */
const drawBubbles = (scale, config, pointGroupPath, dataTarget) => {
  const renderDataPoint = (path, value, index) => {
    const bubblePoint = path
      .append('g')
      .classed(styles.point, true)
      .attr('aria-disabled', !utils.isFunction(value.onClick))
      .attr('transform', transformPoint(scale)(value))
      .attr('aria-describedby', `${value.key}`)
      .attr('aria-selected', false)
      .attr(
        'aria-hidden',
        document
          .querySelector(
            `.${styles.legendItem}[aria-describedby="${value.key}"]`,
          )
          ?.getAttribute('aria-current') === 'false',
      )
      .on('click', function () {
        dataPointActionHandler(value, index, this);
      });

    bubblePoint
      .append('circle')
      .attr('aria-describedby', value.key)
      .attr('r', (d) => decideRadius(dataTarget, d))
      .attr('fill', () => dataTarget.color)
      .attr('fill-opacity', constants.DEFAULT_BUBBLE_OPACITY)
      .attr('stroke', () => dataTarget.color);
  };

  const renderSelectionPath = (path, value, index) => {
    path.append('g')
      .classed(styles.dataPointSelection, true)
      .attr('transform', transformPoint(scale)(value))
      .attr('aria-disabled', utils.isDefined(value.onClick))
      .attr('aria-hidden', true)
      .attr('aria-describedby', value.key)
      .on('click', function () {
        dataPointActionHandler(value, index, this);
      })
      .append('circle')
      .attr(
        'r',
        (d) => decideRadius(dataTarget, d)
              + constants.DEFAULT_BUBBLE_SELECTOR_RADIUS,
      );
  };
  pointGroupPath
    .append('g')
    .classed(styles.pointGroup, true)
    .each(function (d, i) {
      const dataPointSVG = d3.select(this);
      renderSelectionPath(dataPointSVG, d, i);
      renderDataPoint(dataPointSVG, d, i);
    });
};

/**
 * Draws the bubble graph on the canvas element. This calls the Graph API to render the following first
 *  Grid
 *  Axes
 *  Legend
 *  Labels
 * Once these items are rendered, we will parse through the data points and render the bubbles
 *
 * @private
 * @param {object} scale - d3 scale taking into account the input parameters
 * @param {object} config - config object derived from input JSON
 * @param {d3.selection} canvasSVG - d3 selection node of canvas svg
 * @param {Array} dataTarget - Data points
 * @returns {undefined} - returns nothing
 */
const draw = (scale, config, canvasSVG, dataTarget) => {
  const BubbleSVG = canvasSVG
    .append('g')
    .classed(styles.bubbleGraphContent, true)
    .attr('clip-path', `url(#${config.clipPathId})`)
    .attr('aria-hidden', config.shownTargets.indexOf(dataTarget.key) < 0)
    .attr('aria-describedby', dataTarget.key);

  const currentPointsPath = BubbleSVG.selectAll(
        `.${styles.currentPointsGroup}`,
  ).data([dataTarget]);
  currentPointsPath
    .enter()
    .append('g')
    .classed(styles.currentPointsGroup, true)
    .attr(
      'transform',
            `translate(${getXAxisXPosition(config)},${calculateVerticalPadding(
              config,
            )})`,
    );
  currentPointsPath
    .exit()
    .transition()
    .call(constants.d3Transition(config.settingsDictionary.transition))
    .remove();

  const bubblePoint = BubbleSVG.select(`.${styles.currentPointsGroup}`)
    .selectAll(`.${styles.point}`)
    .data(getDataPointValues(dataTarget));
  drawBubbles(scale, config, bubblePoint.enter(), dataTarget);
  bubblePoint
    .exit()
    .transition()
    .call(constants.d3Transition(config.settingsDictionary.transition))
    .remove();
};

export { draw, drawBubbles, decideRadius };
