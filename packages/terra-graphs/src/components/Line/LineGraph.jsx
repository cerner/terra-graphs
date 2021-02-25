import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '../../../../carbon-graphs/src/js/carbon';
import '../../css/Graph.module.scss';
import '../../css/LineGraph.module.scss';
import utils from '../../../../carbon-graphs/src/js/helpers/utils';

const propTypes = {
  graphConfig: PropTypes.object,
  dataset: PropTypes.array,
  graphID: PropTypes.string,
  timeOut: PropTypes.array
};

const LineGraph = ({ graphConfig, dataset, graphID, timeOut}) => {
  debugger;
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    if (!(utils.isUndefined(dataset))) {
      if (!(utils.isUndefined(timeOut))) {
        let count = 0;
        dataset.forEach((data) => {
          setTimeout(
            () => (graph.graphContainer
              ? graph.loadContent(Carbon.api.line(data))
              : ''),
            timeOut[count],
          );
          count += 1;
        });
      }else {
        dataset.forEach((data) => {
        graph.loadContent(Carbon.api.line(data));
      });
    }
  }
}, [graphConfig, dataset, timeOut]);

  return (
    <div id="canvasContainer">
      <div id="tooltip" className="tooltip" style={{ display: 'none' }} />
      <div id={graphID} />
    </div>
  );
};

LineGraph.propTypes = propTypes;

export default LineGraph;
