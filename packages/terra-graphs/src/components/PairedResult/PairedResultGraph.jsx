/* eslint import/no-unresolved: off */
import React from 'react';
import PropTypes from 'prop-types';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../Graph.module.scss';
import './PairedResultGraph.module.scss';
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
};

const PaiedResultGraph = ({
  graphConfig, dataset, graphID,
}) => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    if (dataset) {
      dataset.forEach((data) => {
        graph.loadContent(Carbon.api.pairedResult(data));
      });
    }
  }, [graphConfig, dataset]);

  return (
    <div id= { `${graphID}-canvasContainer` }>
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div id="tooltip" className="tooltip" style={{ display: 'none' }} />
      <div id={graphID} />
    </div>
  );
};

PaiedResultGraph.propTypes = propTypes;

export default PaiedResultGraph;
