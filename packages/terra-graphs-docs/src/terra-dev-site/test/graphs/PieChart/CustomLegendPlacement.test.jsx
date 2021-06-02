import React from 'react';
import PieChart from '@cerner/terra-graphs/lib/components/Pie/PieChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/pieDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieData';

const graphConfig = utils.deepClone(getPieConfig('#graphContainer'));
graphConfig.bindLegendTo = '#legendContainer';
const dataset = utils.deepClone(data);

export default () => (
  <div id="customLegendPlacement">
    <div id="tooltip" className="initial-tooltip" />
    <div className="bindto-container">
      <div id="legendContainer" className="legend-bindto-container" />
      <div id="graphContainer" className="legend-bindto-graph-container" />
    </div>
    <PieChart graphID="graphContainer" graphConfig={graphConfig} dataset={dataset} />
  </div>
);
