import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs';
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

const datasetLoader = (dataset) => {
  let graphType = dataset.graphType.toUpperCase();
  graphType = graphType.replaceAll(' ', '');
  let apiData;
  switch (graphType) {
    case 'LINE':
      apiData = Carbon.api.line(dataset);
      break;
    case 'SCATTER':
      apiData = Carbon.api.scatter(dataset);
      break;
    case 'PAIREDRESULT':
      apiData = Carbon.api.pairedResult(dataset);
      break;
    case 'BAR':
      apiData = Carbon.api.bar(dataset);
      break;
    case 'BUBBLESINGLEDATASET':
      apiData = Carbon.api.bubbleSingleDataset(dataset);
      break;
    case 'BUBBLEMULTIPLEDATASET':
      apiData = Carbon.api.bubbleMultipleDataset(dataset);
      break;
    default:
      apiData = undefined;
  }
  return apiData;
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
              ? graph.loadContent(datasetLoader(data))
              : ''),
            timeout[index],
          );

          timeoutIds.push(timeoutId);
        });
      } else {
        dataset.forEach((data) => {
          graph.loadContent(datasetLoader(data));
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
