import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const data = utils.deepClone(
  getDemoData('#graphContainer', 'LINE_TIMESERIES'),
);
data.bindLegendTo = '#legendContainer';

export default () => (
  <div id="customLegendPlacement">
    <div className="bindto-container">
      <div id="legendContainer" className="legend-bindto-container" />
      <div id="graphContainer" className="legend-bindto-graph-container" />
    </div>
    <LineGraph graphID="graphContainer" graphConfig={data} dataset={[data.data[0], data.data[2]]} />
  </div>
);
