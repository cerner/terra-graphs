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

  var [graph, setGraph] = React.useState();
  const graphLoadedRef = React.useRef();

  // React.useEffect(() => {
  //   if (!graph) {
  //     setGraph(Carbon.api.graph(graphConfig));
  //   }
  // }, [graph, graphConfig]);

// Initial load
  React.useEffect(() => {

    // if (!graph || !dataset || graphLoadedRef.current) {
    //   return undefined;
    // }

    graphLoadedRef.current = true;

    const graph = Carbon.api.graph(graphConfig);
    setGraph(graph);
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

    return () => {
      timeoutIds.forEach((id) => { clearTimeout(id); });
    };
  }, []);

  React.useEffect(() => {
    if (!graph || !graphLoadedRef.current) {
      return;
    }

    graph.config = graphConfig;
    graph.reflow(dataset);
  }, [graphConfig, dataset]);

  return (
    <div id={`${graphID}-canvasContainer`}>
      <div id={graphID} />
    </div>
  );
};

LineGraph.propTypes = propTypes;

export default LineGraph;
