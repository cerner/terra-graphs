/* eslint import/no-unresolved: off */
import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';
import './LineGraph.module.scss';

const propTypes = {
  /**
   * ID for graph created.
   */
  graphID: PropTypes.string.isRequired,
  /**
   * Graph configuration object
   */
  graphConfig: PropTypes.object.isRequired,
  /**
   * data to be displayed in graph
   */
  dataset: PropTypes.arrayOf(PropTypes.object),
  /**
   * timeout to display multiple data contents in specific time interval.
   */
  timeout: PropTypes.arrayOf(PropTypes.number),
};

const LineGraph = ({
  graphConfig, dataset, graphID, timeout,
}) => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    if (dataset) {
      if (timeout) {
        dataset.forEach((data, index) => {
          setTimeout(
            () => (graph.graphContainer
              ? graph.loadContent(Carbon.api.line(data))
              : ''),
            timeout[index],
          );
        });
      } else {
        dataset.forEach((data) => {
          graph.loadContent(Carbon.api.line(data));
        });
      }
    }
  }, [graphConfig, dataset, timeout]);

  return (
    <div id={`${graphID}-canvasContainer`}>
      <div id="initial_tooltip" className="tooltip" />
      <div id={graphID} />
    </div>
  );
};

LineGraph.propTypes = propTypes;

export default LineGraph;
