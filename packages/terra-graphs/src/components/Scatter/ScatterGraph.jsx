import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';

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
  dataset: PropTypes.arrayOf(PropTypes.object),
  /**
   * Timeout to display multiple data contents in specific time interval.
   */
  timeout: PropTypes.arrayOf(PropTypes.number),
};

const ScatterGraph = ({
  graphConfig, dataset, graphID, timeout,
}) => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    const timeoutIds = [];

    if (dataset) {
      if (timeout) {
        dataset.forEach((data, index) => {
          const timeoutId = setTimeout(
            () => (graph.graphContainer
              ? graph.loadContent(Carbon.api.scatter(data))
              : ''),
            timeout[index],
          );

          timeoutIds.push(timeoutId);
        });
      } else {
        dataset.forEach((data) => {
          graph.loadContent(Carbon.api.scatter(data));
        });
      }
    }

    return () => {
      timeoutIds.forEach((id) => { clearTimeout(id); });
    };
  }, [graphConfig, dataset, timeout]);

  return (
    <div id={`${graphID}-canvasContainer`}>
      <div id={graphID} />
    </div>
  );
};

ScatterGraph.propTypes = propTypes;

export default ScatterGraph;
