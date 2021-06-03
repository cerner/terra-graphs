import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';
import '../Line/LineGraph.module.scss';
import '../Bar/BarGraph.module.scss';
import '../PairedResult/PairedResultGraph.module.scss';

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

// eslint-disable-next-line consistent-return
const datasetLoader = (graphConfig, dataset) => {
  let graphType = dataset.graphType.toUpperCase();
  graphType = graphType.replaceAll(' ', '');
  switch (graphType) {
    case 'LINE':
      graphConfig.loadContent(Carbon.api.line(dataset));
      break;
    case 'SCATTER':
      graphConfig.loadContent(Carbon.api.scatter(dataset));
      break;
    case 'PAIREDRESULT':
      graphConfig.loadContent(Carbon.api.pairedResult(dataset));
      break;
    case 'BAR':
      graphConfig.loadContent(Carbon.api.bar(dataset));
      break;
    case 'BUBBLESINGLEDATASET':
      graphConfig.loadContent(Carbon.api.bubbleSingleDataset(dataset));
      break;
    case 'BUBBLEMULTIPLEDATASET':
      graphConfig.loadContent(Carbon.api.bubbleMultipleDataset(dataset));
      break;
    default:
      return '';
  }
};
const CombinationGraph = ({
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
              ? datasetLoader(graph, data)
              : ''),
            timeout[index],
          );

          timeoutIds.push(timeoutId);
        });
      } else {
        dataset.forEach((data) => {
          datasetLoader(graph, data);
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

CombinationGraph.propTypes = propTypes;

export default CombinationGraph;
