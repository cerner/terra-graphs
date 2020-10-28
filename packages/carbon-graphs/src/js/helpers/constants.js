'use strict';

import * as d3 from 'd3';

/**
 * @module constants
 * @alias module:constants
 */
import * as DEFAULT_SHAPES from '../core/Shape/shapeDefinitions';

/**
 * Consumers can pick a color from this default list
 *
 * @public
 * @property {string} BLUE "#176ba0"
 * @property {string} GREEN "#076e00"
 * @property {string} ORANGE "#b54900"
 * @property {string} PINK "#ae0868"
 * @property {string} PURPLE "#9c19a3"
 * @property {string} YELLOW "#ffc20a"
 * @property {string} LIGHT_BLUE "#008fe0"
 * @property {string} LIGHT_GREEN "#4b9b1c"
 * @property {string} LIGHT_ORANGE "#e46511"
 * @property {string} LIGHT_PINK "#e16092"
 * @property {string} LIGHT_PURPLE "#bc70c7"
 * @property {string} LIGHT_YELLOW "#ffda6c"
 * @property {string} BLACK "#1c1f21"
 * @property {string} GREY "#a7aaab"
 * @property {string} LAVENDER: "#8374c2"
 * @property {string} WHITE "#ffffff"
 * @enum {{Object: string}}
 */

export const COLORS = {
  // Dark Colors
  BLUE: '#176ba0',
  GREEN: '#076e00',
  ORANGE: '#b54900',
  PINK: '#ae0868',
  PURPLE: '#9c19a3',
  YELLOW: '#ffc20a',

  // Light Colors
  LIGHT_BLUE: '#008fe0',
  LIGHT_GREEN: '#4b9b1c',
  LIGHT_ORANGE: '#e46511',
  LIGHT_PINK: '#e16092',
  LIGHT_PURPLE: '#bc70c7',
  LIGHT_YELLOW: '#ffda6c',

  // Common Colors
  BLACK: '#1c1f21',
  GREY: '#a7aaab',
  LAVENDER: '#8374c2',
  WHITE: '#ffffff',
};
/**
 *
 * @public
 * @property {number} MAX_BUBBLES_SINGLE_DATASET "max number of bubbles allowed in a Bubble Single Dataset API if using shades"
 * @property {number} MAX_DATASETS_MULTIPLE_API "max number of datassets allowed in Bubble Multiple Dataset API"
 * @property {object} PALETTE "array of shades to be used for color-based bubbles in Bubble Single Dataset API"
 */
export const BUBBLE = {
  MAX_BUBBLES_SINGLE_DATASET: 4,
  MAX_DATASETS_MULTIPLE_API: 7,
  PALETTE: {
    BLUE: ['#008fe0', '#044e7b', '#001624'],
    GREEN: ['#4b9b1c', '#2c5e12', '#122702'],
    ORANGE: ['#e46511', '#883e10', '#371a06'],
    PINK: ['#ade868', '#6d0a48', '#32062a'],
    PURPLE: ['#9c19a3', '#5c1060', '#240425'],
    GRAY: '#949494',
  },
};

/**
 * Consumers can pick a shape from this default list
 *
 * @public
 * @property {string} CIRCLE "CIRCLE"
 * @property {string} TRIANGLE "TRIANGLE"
 * @property {string} SQUARE "SQUARE"
 * @property {string} X "X"
 * @property {string} DIAMOND "DIAMOND"
 * @property {string} CROSS "CROSS"
 * @property {string} VERTICAL_BAR "VERTICAL_BAR"
 * @property {string} RHOMBUS "RHOMBUS"
 * @property {string} TEAR_DROP "TEAR_DROP"
 * @property {string} TEAR_ALT "TEAR_ALT"
 * @property {string} TRIANGLE_DOWN "TRIANGLE_DOWN"
 * @enum {{Object: string}}
 */
export const SHAPES = {
  CIRCLE: DEFAULT_SHAPES.CIRCLE,
  CROSS: DEFAULT_SHAPES.CROSS,
  DIAMOND: DEFAULT_SHAPES.DIAMOND,
  RHOMBUS: DEFAULT_SHAPES.RHOMBUS,
  SQUARE: DEFAULT_SHAPES.SQUARE,
  TEAR_ALT: DEFAULT_SHAPES.TEAR_ALT,
  TEAR_DROP: DEFAULT_SHAPES.TEAR_DROP,
  TRIANGLE: DEFAULT_SHAPES.TRIANGLE,
  TRIANGLE_DOWN: DEFAULT_SHAPES.TRIANGLE_DOWN,
  VERTICAL_BAR: DEFAULT_SHAPES.VERTICAL_BAR,
  X: DEFAULT_SHAPES.X,
};
/**
 * Consumers can pick a light shape from this list
 *
 * @public
 * @property {string} CIRCLE "CIRCLE"
 * @property {string} TRIANGLE "TRIANGLE"
 * @property {string} SQUARE "SQUARE"
 * @property {string} X "X"
 * @property {string} DIAMOND "DIAMOND"
 * @property {string} CROSS "CROSS"
 * @property {string} VERTICAL_BAR "VERTICAL_BAR"
 * @property {string} RHOMBUS "RHOMBUS"
 * @property {string} TEAR_DROP "TEAR_DROP"
 * @property {string} TEAR_ALT "TEAR_ALT"
 * @property {string} TRIANGLE_DOWN "TRIANGLE_DOWN"
 * @enum {{Object: string}}
 */
export const SHAPES_LIGHT = {
  CIRCLE: DEFAULT_SHAPES.CIRCLE_LIGHT,
  CROSS: DEFAULT_SHAPES.CROSS_LIGHT,
  DIAMOND: DEFAULT_SHAPES.DIAMOND_LIGHT,
  RHOMBUS: DEFAULT_SHAPES.RHOMBUS_LIGHT,
  SQUARE: DEFAULT_SHAPES.SQUARE_LIGHT,
  TEAR_ALT: DEFAULT_SHAPES.TEAR_ALT_LIGHT,
  TEAR_DROP: DEFAULT_SHAPES.TEAR_DROP_LIGHT,
  TRIANGLE: DEFAULT_SHAPES.TRIANGLE_LIGHT,
  TRIANGLE_DOWN: DEFAULT_SHAPES.TRIANGLE_DOWN_LIGHT,
  VERTICAL_BAR: DEFAULT_SHAPES.VERTICAL_BAR_LIGHT,
  X: DEFAULT_SHAPES.X_LIGHT,
};
/**
 * Consumers can pick axes tick type from default list
 * DEFAULT is enabled by default. This represents number based axes
 * TIMESERIES is time based axes. For now it only reflects on x-Axis
 *
 * @public
 * @property {string} DEFAULT "default"
 * @property {string} TIME_SERIES "timeseries"
 * @enum {{DEFAULT: string, TIME_SERIES: string}}
 */
export const AXIS_TYPE = {
  DEFAULT: 'default',
  TIME_SERIES: 'timeseries',
};
/**
 * Consumers can pick line type from default list
 * Linear is default
 *
 * @public
 * @property {string} LINEAR "linear"
 * @property {string} SPLINE "cardinal"
 * @enum {{LINEAR: string, SPLINE: string}}
 */
export const LINE_TYPE = {
  LINEAR: d3.curveLinear,
  SPLINE: d3.curveCardinal,
};

/**
 * @enum {object}
 * Enum for different types of Axes orientations along X and Y Axes.
 */
export const AXES_ORIENTATION = {
  X: {
    TOP: 'top',
    BOTTOM: 'bottom',
  },
  Y: {
    LEFT: 'left',
    RIGHT: 'right',
  },
};

/**
 * @enum {object}
 */
export default {
  PADDING: {
    top: 10,
    bottom: 10,
    left: 30,
    right: 50,
    trackLabel: 100,
  },
  LEGEND_PADDING: {
    top: 4,
    bottom: 4,
    left: 8,
    right: 8,
  },
  PIE_LEGEND_PADDING: {
    top: 8,
    bottom: 8,
    left: 8,
    right: 8,
  },
  PAIR_ITEM_TYPES: ['high', 'mid', 'low'],
  ISO8601_DATE_TIME_MILLI: /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}(:\d{2}(\.\d+)*)*)Z/,
  RESIZE_THROTTLE: 1000 / 60,
  BASE_CANVAS_WIDTH_PADDING: 10,
  BASE_LABEL_ICON_SPACING: 20,
  BASE_LABEL_ICON_WIDTH_PADDING: 5,
  BASE_LABEL_ICON_HEIGHT_PADDING: 12,
  TEXT_LABEL_ICON_WIDTH_PADDING: 8,
  TEXT_LABEL_ICON_HEIGHT_PADDING: 5,
  TEXT_LABEL_VERTICAL_POSITION: {
    top: -10,
    bottom: 20,
  },
  DEFAULT_TICKSCOUNT: 7,
  TICKSCOUNT_MAXLIMIT: 19,
  AXISRANGE_ONE: 20,
  AXISRANGE_TWO: 50,
  AXISRANGE_THREE: 100,
  AXISRANGE_FOUR: 500,
  TIMELINE_HEIGHT: 40,
  PIE_CHART_DEFAULT_HEIGHT: 250,
  DEFAULT_HEIGHT: 250,
  DEFAULT_PLOT_SCALE: 0.275,
  DEFAULT_PLOT_SELECTION_SCALE: { posX: 1.95, posY: 1.95, scale: 2 },
  DEFAULT_PLOT_SELECTION_SCALE_FOR_EVENTS: { posX: 9, posY: 7, scale: 1.3 },
  DEFAULT_TIMELINE_PLOT_SELECTION_SCALE: { posX: 2, posY: 2, scale: 2.2 },
  DEFAULT_TIMELINE_SCALE: { posX: 1.15, posY: 1.15, scale: 1.25 },
  DEFAULT_TIMELINE_TICK_LENGTH: 12,
  DEFAULT_LABEL_CHARACTER_LIMIT: 12,
  DEFAULT_GANTT_TRACK_HEIGHT: 41,
  DEFAULT_GANTT_TRACK_SELECTION: {
    x: 1,
    y: 1,
    width: 2,
    height: 1.5,
  },
  DEFAULT_GANTT_TASK_HEIGHT: 23,
  DEFAULT_GANTT_TASK_PADDING: {
    top: 9,
    bottom: 9,
  },
  DEFAULT_GANTT_TASK_CHUNK_WIDTH: 5,
  DEFAULT_GANTT_ACTIVITY_CHUNK_WIDTH: 5,
  DEFAULT_GANTT_TASK_SELECTION_PADDING: 25,
  DEFAULT_GANTT_ACTIVITY_OPACITY: 0.5,
  DEFAULT_GANTT_ACTIVITY_HEIGHT: 31,
  DEFAULT_GANTT_ACTIVITY_PADDING: {
    top: 5,
    bottom: 5,
  },
  DEFAULT_BAR_GRAPH_PADDING_ATTRIBUTES: {
    WIDTH_RATIO: 0.66,
    LEFT_SHIFT_OFFSET_RATIO: 0.5,
    LEFT_SHIFT_OFFSET_PADDING_RATIO: 0.16,
    OUTER_PADDING_RATIO: 2.5,
    REGION_LEFT_SHIFT_OFFSET_PADDING_RATIO: 0.08,
    REGION_WIDTH_RATIO: 0.83,
  },
  DEFAULT_BAR_HASH_COLOR: '#d3d4d5',
  DEFAULT_BAR_COLOR: COLORS.BLUE,
  DEFAULT_BAR_REGION_COLOR: '#bcbfc0',
  DEFAULT_GOAL_LINE_STROKE_WIDTH: 5,
  DEFAULT_REGION_LINE_STROKE_WIDTH: 5,
  DEFAULT_BAR_SELECTION_PADDING: 5,
  DEFAULT_ACTIVITY_BAR_HASH_COLOR: '#d3d4d5',
  DEFAULT_TASK_BAR_HASH_COLOR: COLORS.BLUE,
  DEFAULT_BAR_STRIPE_COLOR: '#fff',
  DEFAULT_GANTT_TASK_STRIPE_WIDTH: 4,
  DEFAULT_GANTT_TASK_STRIPE_DISTANCE: 2,
  DEFAULT_GANTT_ACTIVITY_STRIPE_WIDTH: 7,
  DEFAULT_GANTT_ACTIVITY_STRIPE_DISTANCE: 2,
  DEFAULT_CHARACTER_SVG_ELEMENT_WIDTH: 16.5,
  DEFAULT_Y_AXIS_SPACING: 30,
  HOVER_EVENT: {
    MOUSE_ENTER: 'enter',
    MOUSE_EXIT: 'exit',
  },
  VIEW_BOX_SIZE: '0 0 48 48',
  DEFAULT_COLOR: COLORS.BLACK,
  DEFAULT_PIE_COLOR: COLORS.BLUE,
  DEFAULT_PIE_LEGEND_SHAPE: SHAPES.SQUARE,
  DEFAULT_PIE_INNER_RADIUS: 1,
  DEFAULT_PIE_PAD_ANGLE: 0.01,
  X_AXIS: 'x',
  Y_AXIS: 'y',
  Y2_AXIS: 'y2',
  MIN_TICKS: 3,
  MAX_TICK_VARIANCE: 140,
  DEFAULT_INTERPOLATION: d3.curveLinear,
  SELECTION_INDICATOR_X_POSITION: 10,
  SELECTION_INDICATOR_Y_POSITION: 12.5,
  D3_TRANSITION_PROPERTIES_ENABLED: {
    duration: 250,
    ease: d3.easeLinear,
  },
  D3_TRANSITION_PROPERTIES_DISABLED: {
    duration: 0,
    ease: d3.easeLinear,
  },
  d3Transition: (d) => (transition) => transition.duration(d.duration).ease(d.ease),
  TICK_ORIENTATION: {
    TOP: -1,
    BOTTOM: 1,
  },
  NO_DATA_VIEW_PROPORTION: 3,
  NO_DATA_LABEL_PADDING: 15,
  DEFAULT_BUBBLE_RADIUS_MIN: 3,
  DEFAULT_BUBBLE_RADIUS_MAX: 30,
  DEFAULT_BUBBLE_SELECTOR_RADIUS: 4,
  DEFAULT_BUBBLE_OPACITY: '0.4',
  DEFAULT_BUBBLE_BLUR_OPACITY: '0.1',
  DEFAULT_BUBBLE_STROKE_OPACITY: '1',
  DEFAULT_BUBBLE_BLUR_STROKE_OPACITY: '0.3',
  DEFAULT_LEGEND_LINE_WIDTH: 28,
  DEFAULT_LEGEND_LINE_WIDTH_WITH_SYMBOL: 18,
  LEGEND_LINE_POSITION: 1.5,
};
