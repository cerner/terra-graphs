import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '../../../../carbon-graphs/src/js/carbon';
import '../../css/Graph.module.scss';
import '../../css/LineGraph.module.scss';

const propTypes = {
  graphConfig: PropTypes.object,
  dataset: PropTypes.object,
  graphID: PropTypes.string,
};

const LineGraph = ({ graphConfig, dataset, graphID }) => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.line(data));
    });
  }, [graphConfig, dataset]);

  return (
    <div id="canvasContainer">
      <div id="tooltip" className="tooltip" style={{ display: 'none' }} />
      <div id={graphID} />
    </div>
  );
};

LineGraph.propTypes = propTypes;

export default LineGraph;
