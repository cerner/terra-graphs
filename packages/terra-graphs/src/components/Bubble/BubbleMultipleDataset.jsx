import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';
import './BubbleMultipleDataset.module.scss';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';

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

const BubbleMultipleDataset = ({
  graphConfig, dataset, graphID, timeout,
}) => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    if (!(utils.isUndefined(dataset))) {
      if (!(utils.isUndefined(timeout))) {
        dataset.forEach((data, index) => {
          setTimeout(
            () => (graph.graphContainer
              ? graph.loadContent(Carbon.api.bubbleMultipleDataset(data))
              : ''),
            timeout[index],
          );
        });
      } else {
        dataset.forEach((data) => {
          graph.loadContent(Carbon.api.bubbleMultipleDataset(data));
        });
      }
    }
  }, [graphConfig, dataset, timeout]);

  return (
    <div id={`${graphID}-canvasContainer`}>
      <div id="initial_tooltip" className="tooltip"/>
      <div id={graphID} />
    </div>
  );
};

BubbleMultipleDataset.propTypes = propTypes;

export default BubbleMultipleDataset;
