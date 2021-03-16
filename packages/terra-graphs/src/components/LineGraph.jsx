import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '../../../carbon-graphs/src/js/carbon';
import '../css/Graph.module.scss';
import '../css/LineGraph.module.scss';
import utils from '../../../carbon-graphs/src/js/helpers/utils';

const propTypes = {
  /**
   * Graph configuration object
   */
  graphConfig: PropTypes.object.isRequired,
  /**
   * data to be displayed in graph
   */
  dataset: PropTypes.array,
  /**
   * ID for graph created.
   */
  graphID: PropTypes.string,
  /**
   * timeout to display multiple contents in specific time interval.
   */
  timeout: PropTypes.array,
};

const LineGraph = ({
  graphConfig, dataset, graphID, timeout,
}) => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    if (!(utils.isUndefined(dataset))) {
      if (!(utils.isUndefined(timeout))) {
        let count = 0;
        dataset.forEach((data) => {
          setTimeout(
            () => (graph.graphContainer
              ? graph.loadContent(Carbon.api.line(data))
              : ''),
            timeout[count],
          );
          count += 1;
        });
      } else {
        dataset.forEach((data) => {
          graph.loadContent(Carbon.api.line(data));
        });
      }
    }
  }, [graphConfig, dataset, timeout]);

  return (
    <div id="canvasContainer">
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div id="tooltip" className="tooltip" style={{ display: 'none' }} />
      <div id={graphID} />
    </div>
  );
};

LineGraph.propTypes = propTypes;

export default LineGraph;
