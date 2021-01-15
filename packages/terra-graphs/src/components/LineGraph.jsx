import Carbon from '../../../carbon-graphs/src/js/carbon';
import React, {Component} from 'react';


class LineGraph extends React.Component {
    render() {
      return <div id={this.props.graphID}></div>;
    }

    componentDidMount() {
        const graph = Carbon.api.graph(this.props.graphConfig);
        graph.loadContent(Carbon.api.line(this.props.dataset));
    }

  }

export default LineGraph;