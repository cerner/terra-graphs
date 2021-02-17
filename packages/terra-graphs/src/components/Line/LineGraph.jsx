import React, { Component } from 'react';
import Carbon from '../../../../carbon-graphs/src/js/carbon';
import '../../css/Graph.module.scss';
import '../../css/LineGraph.module.scss';
import utils from '../../../../carbon-graphs/src/js/helpers/utils';

class LineGraph extends React.Component {
  render() {
    debugger;
    return (
      <div id="canvasContainer">
        <div id="tooltip" className="tooltip" style={{ display: 'none' }} />
        <div id={this.props.graphID} />
      </div>
    );
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
