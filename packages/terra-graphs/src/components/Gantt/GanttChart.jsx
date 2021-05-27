import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';
import './GanttChart.module.scss';

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

const GanttChart = ({
  graphConfig, dataset, graphID, timeout,
}) => {
  React.useEffect(() => {
    const graph = Carbon.api.gantt(graphConfig);
    const timeoutIds = [];
    if (dataset) {
      if (timeout) {
        dataset.forEach((data, index) => {
          const timeoutId = setTimeout(
            () => (graph.graphContainer
              ? graph.loadContent(data)
              : ''),
            timeout[index],
          );

          timeoutIds.push(timeoutId);
        });
      } else {
        dataset.forEach((data) => {
          graph.loadContent(data);
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

GanttChart.propTypes = propTypes;

export default GanttChart;
