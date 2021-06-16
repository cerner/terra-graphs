import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';
import './PairedResultGraph.module.scss';

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
   * dynamic data to update the initial data
   */
  panData: PropTypes.object,
  /**
   * Timeout to display multiple data contents in specific time interval.
   */
  timeout: PropTypes.arrayOf(PropTypes.number),
};

const PaiedResultGraph = ({
  graphConfig, dataset, panData, graphID, timeout,
}) => {
  const [graph, setGraph] = React.useState();
  const graphLoadedRef = React.useRef();

  // creation of canvas
  React.useEffect(() => {
    if (!graph) {
      setGraph(Carbon.api.graph(graphConfig));
    }
  }, [graph, graphConfig]);

  // initial dataset load
  React.useEffect(() => {
    if (!graph || graphLoadedRef.current) {
      return;
    }
    const timeoutIds = [];

    if (dataset) {
      if (timeout) {
        dataset.forEach((data, index) => {
          const timeoutId = setTimeout(
            () => (graph.graphContainer
              ? graph.loadContent(Carbon.api.pairedResult(data))
              : ''),
            timeout[index],
          );

          timeoutIds.push(timeoutId);
        });
      } else {
        dataset.forEach((data) => {
          graph.loadContent(Carbon.api.pairedResult(data));
        });
      }
    }
    graphLoadedRef.current = true;

    // eslint-disable-next-line consistent-return
    return () => {
      timeoutIds.forEach((id) => { clearTimeout(id); });
    };
  }, [graph, dataset, timeout]);

  // panning
  React.useEffect(() => {
    if (!graph) {
      return;
    }

    graph.config.axis.x.upperLimit = graphConfig.axis.x.upperLimit;
    graph.config.axis.x.lowerLimit = graphConfig.axis.x.lowerLimit;
    graph.reflowMultipleDatasets(panData);
  }, [graph, graphConfig, panData]);
  return (
    <div id={`${graphID}-canvasContainer`}>
      <div id={graphID} />
    </div>
  );
};

PaiedResultGraph.propTypes = propTypes;

export default PaiedResultGraph;
