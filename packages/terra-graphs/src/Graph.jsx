import React, {Component} from 'react';
import GraphConfig, {processInput} from "../../carbon-graphs/src/js/controls/Graph/GraphConfig";
import * as d3 from "d3";
import styles from "../../carbon-graphs/src/js/helpers/styles";
import utils from "../../carbon-graphs/src/js/helpers/utils";
import {AXIS_TYPE, COLORS} from "../../carbon-graphs/src/js/helpers/constants";
import {
    attachEventHandlers,
    createContentContainer,
    createDefs,
    createGrid,
    createLabel, determineHeight,
    drawNoDataView, scaleGraph, updateAxesDomain
} from "../../carbon-graphs/src/js/controls/Graph/helpers/helpers";
import {createRegionContainer} from "../../carbon-graphs/src/js/helpers/region";
import {
    calculateAxesLabelSize,
    calculateAxesSize,
    createAxes,
    createAxisReferenceLine,
    createXAxisInfoRow, getAxesDataRange, getYAxisHeight
} from "../../carbon-graphs/src/js/helpers/axis";
import {createDateline} from "../../carbon-graphs/src/js/helpers/dateline";
import {createEventline} from "../../carbon-graphs/src/js/helpers/eventline";
import {createLegend} from "../../carbon-graphs/src/js/helpers/legend";
import {createTooltipDiv} from "../../carbon-graphs/src/js/helpers/label";
import getElementBoxSizingParameters from "../../carbon-graphs/src/js/helpers/paddingUtils";
import { select } from 'd3-selection'
import '../src/css/Graph.module.scss'

class Graph extends React.Component {
    constructor(props) {
    super(props);
    // this.props.state={
    //     graphContainer : null,
    //     config : {
    //         axis: {
    //             x: {},
    //             y: {},
    //             y2: {},
    //         },
    //         shownTargets: {},
    //         dateline: [],
    //         eventline: [],
    //         pan: {},
    //     },
    //     axis : {
    //         axisInfoRow: {
    //             x: {},
    //         },
    //     },
    //     scale : {},
    //     svg : null,
    //     legendSVG : null,
    //     axesLabelShapeGroup : {},
    //     content : [],
    //     contentConfig : [],
    //     contentKeys : [],
    //     resizeHandler : null
    // }
}

 loadInput = (inputJSON) => new GraphConfig().setInput(inputJSON).validateInput().clone()
  .getConfig();

  generate(input) {
      this.props.state.config = this.loadInput(input);
          //this.setState({config: this.loadInput(input)});
    processInput(input, this.props.state.config, this.props.state.config.axis.x.type);
    this.beforeInit();
    this.init();

    // select(this.node)
    //   .append('div')
    //   .classed(styles.container, true)
    //   .style('padding-top', this.props.state.config.removeContainerPadding && 0)
    //   .style('padding-bottom', this.props.state.config.removeContainerPadding && 0);

      console.log("after 1"+this.node);
      const containerSVG = select(this.node)
      .classed(styles.canvas, true)
      .attr('role', 'img')
      .attr('height', this.props.state.config.canvasHeight)
      .attr(
        'width',
        this.props.state.config.padding.hasCustomPadding
          ? this.props.state.config.canvasWidth
          : this.props.state.config.canvasWidth - 10,
      );
      console.log("after 2"+this.node);

      if (utils.isUndefined(this.props.state.config.opaqueBackground)) {
        this.props.state.config.opaqueBackground = false;
      }

      if (this.props.state.config.opaqueBackground) {
        select(this.props.state.node).select(`.${styles.container}`).style(
          'background-color',
          COLORS.WHITE,
        );
      }

      createDefs(this.props.state.config, select(this.node));
      createRegionContainer(this.props.state.config, select(this.node));
      createGrid(this.props.state.axis, this.props.state.scale, this.props.state.config, select(this.node));
      createContentContainer(this.props.state.config, select(this.node));
      createAxes(this.props.state.axis, this.props.state.scale, this.props.state.config, select(this.node));
      createXAxisInfoRow(this.props.state.axis, this.props.state.scale, this.props.state.config, select(this.node));
      createLabel(this.props.state.config, select(this.node), this.props.state);
      createAxisReferenceLine(this.props.state.axis, this.props.state.scale, this.props.state.config, select(this.node));

      if (
        utils.notEmpty(this.props.state.config.dateline)
              && this.props.state.config.axis.x.type === AXIS_TYPE.TIME_SERIES
      ) {
        createDateline(this.props.state.scale, this.props.state.config, this.node);
      }
      if (
        utils.notEmpty(this.props.state.config.eventline)
              && this.props.state.config.axis.x.type === AXIS_TYPE.TIME_SERIES
      ) {
        createEventline(this.props.state.scale, this.props.state.config, this.node);
      }
    const canvasSVG = select(this.cNode);

      if (this.props.state.config.showLegend) {
        /*
              If the consumer doesn't wish to show legend item then they can pass blank.
              The legend item wont be rendered at that point.
              The consumer can also choose to render legend into another container
              using "bindLegendTo" property
              */
        this.props.state.legendSVG = createLegend(
          this.props.state.config,
          this.props.state.config.bindLegendTo
            ? select(this.props.state.config.bindLegendTo)
            : canvasSVG,
        );
      }

      if (this.props.state.config.showNoDataText) {
        drawNoDataView(this.props.state.config, select(this.node));
      }
      attachEventHandlers({config: this.props.state.config, resize: this.resize});
      this.props.state.svg = this.node;
  }

  beforeInit = () => {
    console.log("sdhgfdsvhg"+this.props.state.config.bindTo);
    let selection = select(this.node)
    .select(this.props.state.config.bindTo);
    console.log("seelection    "+ selection);
    this.props.state.graphContainer = selection;
    // this.setState({graphContainer: selection},() => console.log(this.props.state.graphContainer+ " callback") );
    console.log("graph container  state  "+this.props.state.graphContainer);

    getAxesDataRange({}, '', this.props.state.config);
    updateAxesDomain(this.props.state.config);
    createTooltipDiv();
  };

   init = () => {
    this.props.state.config.height = determineHeight(
        this.props.state.config,
        this.props.state.config.dimension,
    );
    this.setCanvasWidth(this.props.state.graphContainer, this.props.state.config);
    calculateAxesSize(this.props.state.config);
    calculateAxesLabelSize(this.props.state.config);
    this.setCanvasHeight(this.props.state.config);
    scaleGraph(this.props.state.scale, this.props.state.config);
  };

   setCanvasWidth = (container, config) => {
       console.log("container   "+container)
    config.canvasWidth = window.screen.width - 360;
  };

   setCanvasHeight = (config) => {
    if ((config.showLabel && !!config.axis.x.label) || config.axis.x.show) {
      config.canvasHeight = getYAxisHeight(config)
              + (config.padding.bottom
                  + config.padding.top
                  + config.axisLabelHeights.x)
                  * 2;
    } else {
      config.canvasHeight = getYAxisHeight(config)
              + config.padding.bottom
              + config.padding.top
              + config.axisLabelHeights.x;
    }
  };

  resize() {
    // Check if graphContainer is present and then resize the graph
    if (this.props.state.graphContainer) {
      setCanvasWidth(this.props.state.graphContainer, this.props.state.config);
      scaleGraph(this.props.state.scale, this.props.state.config);
      translateGraph(this);
      this.content.forEach((control) => control.resize(this.props.state));
    }
  }

  componentDidMount(){
    this.generate(this.props.input);
}

componentDidUpdate() {
    this.generate(this.props.input);
 }

    render() {
        const { svg } = this.props;
        return <div className = { styles.container } ref={(cNode) => this.cNode = cNode }  style={{ color: 'black' }} padding-top = { this.props.state.config.removeContainerPadding } padding-bottom = { this.props.state.config.removeContainerPadding }>
        <svg className = { styles.canvas } ref={(node) => this.node = node } width = { 1200 } height = { 300 }> </svg>            
      </div> 
      }

}

export default Graph;

