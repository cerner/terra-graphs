import Carbon from '../../../../carbon-graphs/src/js/carbon';
import React, {Component} from 'react';
import '../../css/Graph.module.scss';
import '../../css/LineGraph.module.scss';
import utils from'../../../../carbon-graphs/src/js/helpers/utils'
import { createElementLegendBindTo } from '../../../../../../carbon-graphs/dev/examples/helpers';
import BackgroundColor from '../../terra-dev-site/doc/example/Misc/BackgroundColor';

class LineGraph extends React.Component {
    render() {
      debugger;
      return <div id = "canvasContainer" >
                <div id="tooltip" className="tooltip" style= { { display: "none" } }></div>
                <div id={this.props.graphID}></div>
            </div>
    }

    componentDidMount() {
        debugger;
        const graph = Carbon.api.graph(this.props.graphConfig);
        (utils.isArray(this.props.dataset)) ? (this.props.dataset.forEach((data) => {
            graph.loadContent(Carbon.api.line(data));
        })) : graph.loadContent(Carbon.api.line(this.props.dataset));
    }
  }

export default LineGraph;