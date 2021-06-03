/* eslint import/no-unresolved: off */
import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';
import './LineGraph.module.scss';
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
  dataset: PropTypes.arrayOf(PropTypes.object),
  /**
   * timeout to display multiple data contents in specific time interval.
   */
  timeout: PropTypes.arrayOf(PropTypes.number),
};

const LineGraph = ({
  graphConfig, dataset, graphID, timeout,
}) => {

  const [graph, setGraph] = React.useState();
  const graphLoadedRef = React.useRef();

  React.useEffect(() => {
    if (!graph) {
      setGraph(Carbon.api.graph(graphConfig));
    }
  }, []);

// Initial load
  React.useEffect(() => {

    console.log("1");
    console.log(graph);

    if (!graph) {
      return;
    }
    // graphLoadedRef.current = true;

    // const graph = Carbon.api.graph(graphConfig);
    // setGraph(Carbon.api.graph(graphConfig));
    // return;
    const timeoutIds = [];

    // console.log(graph);

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
  }, [graph]);

  // panning
  React.useEffect(() => {
    console.log("2");
    if (!graph) {
      return;
    }
    console.log("reflow effect called");

    graph.config.axis.x.upperLimit = graphConfig.axis.x.upperLimit;
    graph.config.axis.x.lowerLimit = graphConfig.axis.x.lowerLimit;

    graph.reflowMultipleDatasets(dataset);
  }, [graph, graphConfig, dataset]);

  return (
    <div id={`${graphID}-canvasContainer`}>
      <div id={graphID} />
    </div>
  );
};

LineGraph.propTypes = propTypes;

export default LineGraph;
