'use strict';

import constants, { BUBBLE } from '../../helpers/constants';
import { prepareLabelShapeItem } from '../../helpers/label';
import { reflowLegend } from '../../helpers/legend';
import { createRegion } from '../../helpers/region';
import styles from '../../helpers/styles';
import utils from '../../helpers/utils';
import {
  calculateValuesRangeXAxis,
  calculateValuesRangeYAxes,
  clickHandler,
  hoverHandler,
  getDataPointValues,
  prepareLegendItems,
  processDataPoints,
} from './helpers/helpers';
import { draw, drawBubbles } from './helpers/helpersMultipleDataset';
import Bubble from './Bubble';
import { validateData } from '../../helpers/constructUtils';

/**
 * A Bubble graph is a graph used to represent a collection of data
 * points connected by a Bubble along the X and Y Axis.
 *
 * Lifecycle functions include:
 *  * Load
 *  * Generate
 *  * Unload
 *  * Destroy
 *
 * @module Bubble
 * @class BubbleMultipleDataset
 */
class BubbleMultipleDataset extends Bubble {
  /**
     * @inheritdoc
     * @public
     */
  load(graph) {
    if (graph.content.length > BUBBLE.MAX_DATASETS_MULTIPLE_API) {
      // eslint-disable-next-line no-console
      console.warn(
        'BubbleMultipleDataset is limited to a maximum of 7 datasets',
      );
      return this;
    }
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

  // /**
  //  * @inheritdoc
  //  */
  // unload(graph) { ... }
  //  inherited from class Bubble

  // /**
  //  * @inheritdoc
  //  */
  // resize(graph) { ... }
  //  inherited from class Bubble

  /**
     * @inheritdoc
     */
  reflow(graph, graphData) {
    const eventHandlers = {
      clickHandler: clickHandler(graph, this, graph.config, graph.svg),
      hoverHandler: hoverHandler(graph.config.shownTargets, graph.svg),
    };
    this.config.values = graphData.values;
    validateData(this.config.values);
    this.dataTarget = processDataPoints(graph.config, this.config);
    const position = graph.config.shownTargets.lastIndexOf(graphData.key);

    if (position > -1) {
      graph.config.shownTargets.splice(position, 1);
    }
    const bubbleGraph = graph.content.filter((bubble) => bubble.config.key === graphData.key);
    if (!utils.isEmptyArray(bubbleGraph)) {
      reflowLegend(
        graph.legendSVG,
        bubbleGraph[0].config,
        graph,
        eventHandlers,
      );
    }
    const currentPointsGroup = graph.svg
      .select(`g[aria-describedby="${graphData.key}"]`)
      .select(`.${styles.currentPointsGroup}`)
      .data([this.dataTarget]);
    currentPointsGroup.exit().remove();
    const currentPointsPath = currentPointsGroup
      .selectAll(`.${styles.pointGroup}`)
      .data(this.dataTarget);
    currentPointsPath.exit().remove();
    const pointPath = graph.svg
      .select(`g[aria-describedby="${graphData.key}"]`)
      .select(`.${styles.currentPointsGroup}`)
      .selectAll(`[class="${styles.point}"]`)
      .data(getDataPointValues(this.dataTarget));
    drawBubbles(
      graph.scale,
      graph.config,
      pointPath.enter(),
      this.dataTarget,
      graph.legendSVG,
    );
    pointPath
      .exit()
      .transition()
      .call(
        constants.d3Transition(
          graph.config.settingsDictionary.transition,
        ),
      )
      .remove();

    this.valuesRange.x = calculateValuesRangeXAxis(this.config.values);
    this.valuesRange[this.config.yAxis] = calculateValuesRangeYAxes(this.config.values);
  }

  // /**
  //  * @inheritdoc
  //  */
  // redraw(graph) { ... }
  //  inherited from class Bubble
}

export default BubbleMultipleDataset;
