import * as d3 from 'd3';
import {
  legendClickHandler,
  legendHoverHandler,
  isLegendSelected,
} from '../../../helpers/legend';
import styles from '../../../helpers/styles';
import { setSelectionIndicatorAttributes } from './creationHelpers';

/**
 * @typedef Bar
 * @typedef d3
 */

/**
 * Handler for Request animation frame, executes on resize.
 *  * Order of execution
 *      * Redraws the content
 *      * Shows/hides the regions
 *
 * @private
 * @param {object} graphContext - Graph instance
 * @returns {function()} callback function handler for RAF
 */
const onAnimationHandler = (graphContext) => () => {
  graphContext.resize();
};
/**
 * Click handler for legend item. Hide and display the bar from graph when clicked.
 *
 * @private
 * @param {object} graphContext - Graph instance
 * @param {Bar} control - Bar instance
 * @param {object} config - Graph config object derived from input JSON
 * @param {d3.selection} canvasSVG - d3 selection node of canvas svg
 * @returns {Function} - returns callback function that handles click action on legend item
 */
const clickHandler = (graphContext, control, config, canvasSVG) => (
  element,
  item,
) => {
  const updateShownTarget = (shownTargets, i) => {
    const index = shownTargets.indexOf(i.key);
    if (index > -1) {
      shownTargets.splice(index, 1);
    } else {
      shownTargets.push(i.key);
    }
  };
  if (config.shownTargets.length === 0) {
    graphContext.contentKeys.forEach((key) => {
      canvasSVG
        .selectAll(`.${styles.taskBar}[aria-describedby="${key}"]`)
        .attr('aria-hidden', isLegendSelected(d3.select(element)));
    });
  }
  legendClickHandler(element);
  updateShownTarget(config.shownTargets, item);
  if (config.shownTargets.length >= 1) {
    canvasSVG
      .selectAll(`g[aria-describedby="${item.key}"]`)
      .attr('aria-hidden', isLegendSelected(d3.select(element)));
    canvasSVG
      .selectAll(`.${styles.taskBar}[aria-describedby="${item.key}"]`)
      .attr('aria-hidden', isLegendSelected(d3.select(element)));
    canvasSVG
      .selectAll(
        `.${styles.region}[aria-describedby="region_${item.key}"]`,
      )
      .attr('aria-hidden', function () {
        return !(d3.select(this).attr('aria-hidden') === 'true');
      });
    setSelectionIndicatorAttributes(
      canvasSVG.selectAll(`.${styles.taskBarSelection}`),
      false,
    );
    window.requestAnimationFrame(onAnimationHandler(graphContext));
  } else {
    canvasSVG
      .selectAll(
        `.${styles.region}[aria-describedby="region_${item.key}"]`,
      )
      .attr('aria-hidden', function () {
        return !(d3.select(this).attr('aria-hidden') === 'true');
      });
    canvasSVG
      .selectAll(`g[aria-describedby="${item.key}"]`)
      .attr('aria-hidden', isLegendSelected(d3.select(element)));
    setSelectionIndicatorAttributes(
      canvasSVG.selectAll(`.${styles.taskBarSelection}`),
      false,
    );
    window.requestAnimationFrame(onAnimationHandler(graphContext));
  }
};
/**
 * Hover handler for legend item. Highlights current bar and blurs the rest of the targets in Graph
 * if present.
 *
 * @private
 * @param {Array} graphTargets - List of all the items in the Graph
 * @param {d3.selection} canvasSVG - d3 selection node of canvas svg
 * @returns {Function} - returns callback function that handles hover action on legend item
 */
const hoverHandler = (graphTargets, canvasSVG) => (item, state) => {
  legendHoverHandler(graphTargets, canvasSVG, item.key, state, []);
};

export { clickHandler, hoverHandler };
