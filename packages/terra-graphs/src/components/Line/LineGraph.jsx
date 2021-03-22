import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD:packages/terra-graphs/src/components/LineGraph.jsx
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';
import './LineGraph.module.scss';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
=======
import Carbon from '../../../../carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';
import './LineGraph.module.scss';
import utils from '../../../../carbon-graphs/lib/js/helpers/utils';
>>>>>>> 3b63910... Made changes to folder structure:packages/terra-graphs/src/components/Line/LineGraph.jsx

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
  dataset: PropTypes.array,
  /**
   * timeout to display multiple data contents in specific time interval.
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
