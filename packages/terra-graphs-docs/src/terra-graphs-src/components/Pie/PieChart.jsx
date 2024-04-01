import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs';
import '../Graph.module.scss';
import './PieChart.module.scss';

const propTypes = {
  /**
   * The unique identifier for the graph and prefix for the canvas.
   */
  graphID: PropTypes.string.isRequired,
  /**
   * Graph configuration object.
   */
  graphConfig: PropTypes.object.isRequired,
  /**
   * Data to be displayed in graph.
   */
  dataset: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const PieChart = ({
  graphConfig, dataset, graphID,
}) => {
  React.useEffect(() => {
    const graph = Carbon.api.pie(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, [graphConfig, dataset]);

  return (
    <div id={`${graphID}-canvasContainer`}>
      <div id={graphID} />
    </div>
  );
};

PieChart.propTypes = propTypes;

export default PieChart;
