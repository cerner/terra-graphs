
import React, {Component} from 'react';
import Graph from '../components/Graph';
import {contentHandler} from "../../../carbon-graphs/src/js/helpers/constructUtils";
import {getDefaultValue} from "../../../carbon-graphs/src/js/core/BaseConfig";
import constants, {AXIS_TYPE} from "../../../carbon-graphs/src/js/helpers/constants";
import LineConfig from "../../../carbon-graphs/src/js/controls/Line/LineConfig";
import {validateContent} from "../../../carbon-graphs/src/js/controls/Graph/GraphConfig";
import {
    removeNoDataView, scaleGraph,
    setAxisPadding, translateGraph,
    updateAxesDomain
} from "../../../carbon-graphs/src/js/controls/Graph/helpers/helpers";
import {getAxesDataRange} from "../../../carbon-graphs/src/js/helpers/axis";
import utils from "../../../carbon-graphs/src/js/helpers/utils";
import {redrawDatelineContent} from "../../../carbon-graphs/src/js/helpers/dateline";
import {redrawEventlineContent} from "../../../carbon-graphs/src/js/helpers/eventline";
import {
    clickHandler,
    draw, hoverHandler,
    prepareLegendItems,
    processDataPoints
} from "../../../carbon-graphs/src/js/controls/Line/helpers/helpers";
import {createRegion, createValueRegion} from "../../../carbon-graphs/src/js/helpers/region";
import styles from "../../../carbon-graphs/src/js/helpers/styles";
import {prepareLabelShapeItem} from "../../../carbon-graphs/src/js/helpers/label";
import { select } from 'd3-selection'

class LineGraph extends React.Component {
    constructor(props) {
    super(props);
    this.state={
        graphContainer : null,
        config : {
            axis: {
                x: {},
                y: {},
                y2: {},
            },
            shownTargets: {},
            dateline: [],
            eventline: [],
            pan: {},
        },
        axis : {
            axisInfoRow: {
                x: {},
            },
        },
        scale : {},
        svg : null,
        legendSVG : null,
        axesLabelShapeGroup : {},
        content : [],
        contentConfig : [],
        contentKeys : [],
        resizeHandler : null
    }
        this.config = this.loadInput(props.contentConfig);
        this.type = 'Line';
        this.config.yAxis = getDefaultValue(
            this.config.yAxis,
            constants.Y_AXIS,
        );
        this.valuesRange = this.calculateValuesRange(
            this.config.values,
            this.config.yAxis,
        );
        this.dataTarget = {};
}

     loadInput = (inputJSON) => new LineConfig().setInput(inputJSON).validateInput().clone()
        .getConfig();

     calculateValuesRange = (values, axis = constants.Y_AXIS) => {
        const yAxisValuesList = values.filter((i) => i.y !== null && i.y !== undefined).map((i) => i.y);
        return {
            [axis]: {
                min: Math.min(...yAxisValuesList),
                max: Math.max(...yAxisValuesList),
            },
        };
    };

    isRangeModified = (config, yAxis = constants.Y_AXIS) => config.axis[yAxis].dataRange.isRangeModified;

processContent(content) {

    validateContent(this.state.content, content);
    this.state.content.push(content);
    this.state.contentConfig.push(content.config);
    this.state.contentKeys.push(content.config.key);
    setAxisPadding(this.state.config.axisPadding, content);
    getAxesDataRange(
        content,
        content.config.yAxis,
        this.state.config,
        this.content,
    );
    if (
        this.state.config.allowCalibration
        && this.isRangeModified(this.state.config, content.config.yAxis)
    ) {
        updateAxesDomain(this.state.config, content);
    }
    content.load(this);
    if (
        utils.notEmpty(this.state.config.dateline)
        && this.state.config.axis.x.type === AXIS_TYPE.TIME_SERIES
    ) {
        redrawDatelineContent(this.state.scale, this.state.config, this.node);
    }
    if (
        utils.notEmpty(this.state.config.eventline)
        && this.state.config.axis.x.type === AXIS_TYPE.TIME_SERIES
    ) {
        redrawEventlineContent(this.state.scale, this.state.config, this.node);
    }
    if (utils.notEmpty(content.config.values)) {
        removeNoDataView(select(this.state.svg));
    }
  }

    loadContent(content) {
        contentHandler(content, (i) => {
            this.processContent(i);
        })

        this.resize();
        return this;
    }

    load(graph) {
        this.dataTarget = processDataPoints(graph.state.config, graph.config);
        draw(graph.state.scale, graph.state.config, select(graph.state.svg), this.dataTarget);
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
            graph.state.config,
            {
                clickHandler: clickHandler(
                    graph.state,
                    this,
                    graph.state.config,
                    select(graph.state.svg),
                ),
                hoverHandler: hoverHandler(graph.config.shownTargets, graph.svg),
            },
            this.dataTarget,
            graph.state.legendSVG,
        );
        prepareLabelShapeItem(
            graph.state.config,
            this.dataTarget,
            graph.state.axesLabelShapeGroup[this.config.yAxis],
        );
        return this;
    }

    resize() {
        // Check if graphContainer is present and then resize the graph
        if (this.graphContainer) {
            setCanvasWidth(this.graphContainer, this.config);
            scaleGraph(this.scale, this.config);
            translateGraph(this);
            this.content.forEach((control) => control.resize(this));
        }
        return this;
    }
componentDidMount(){
    // console.log(this.node);
    this.loadContent(this);
}


render() {
    //     <div className = { styles.container } padding-top = { this.props.state.config.removeContainerPadding } padding-bottom = { this.props.state.config.removeContainerPadding }>

    return <Graph input = { this.props.graphConfig } state = {this.state }/>
}
}

export default LineGraph;

