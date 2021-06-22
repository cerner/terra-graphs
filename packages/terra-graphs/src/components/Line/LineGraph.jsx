/* eslint import/no-unresolved: off */
/* eslint react-hooks/exhaustive-deps: off */
/* eslint consistent-return: off */

import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';
import './LineGraph.module.scss';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';

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

const LineGraph = ({
  graphConfig, dataset, graphID, timeout,
}) => {
  const [graph, setGraph] = React.useState();
  const graphLoadedRef = React.useRef();
  const skipreflowRef = React.useRef();

  // creation of canvas
  React.useEffect(() => {
    if (!graph) {
      setGraph(Carbon.api.graph(graphConfig));
    }
  }, []);

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
              ? graph.loadContent(Carbon.api.line(data))
              : ''),
            timeout[index],
          );

          timeoutIds.push(timeoutId);
        });
      } else {
        dataset.forEach((data) => {
          graph.loadContent(Carbon.api.line(data));
        });
      }
    }
    graphLoadedRef.current = true;
    return () => {
      timeoutIds.forEach((id) => { clearTimeout(id); });
    };
  }, [graph, dataset, timeout]);

  // panning
  React.useEffect(() => {
    if (!graph) {
      return;
    }
    if (!skipreflowRef.current) {
      skipreflowRef.current = true;
      return;
    }

    graph.config.axis.x.upperLimit = graphConfig.axis.x.upperLimit;
    graph.config.axis.x.lowerLimit = graphConfig.axis.x.lowerLimit;

    const newDataset = { panData: utils.deepClone(dataset) };

    graph.reflowMultipleDatasets(newDataset);
  }, [graph, dataset, graphConfig]);

  return (
    <div id={`${graphID}-canvasContainer`}>
      <div id={graphID} />
    </div>
  );
};

LineGraph.propTypes = propTypes;

export default LineGraph;
