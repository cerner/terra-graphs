import React from 'react';
import PieChart from '@cerner/terra-graphs/lib/components/Pie/PieChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/pieDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getPieConfig('#graphContainer'));
graphConfig.bindLegendTo = '#legendContainer';
graphConfig.removeContainerPadding = true;
graphConfig.legendPadding = {
  left: 2.5,
  right: 2.5,
  top: 2.5,
  bottom: 2.5,
};
const dataset = utils.deepClone(data);

export default () => (
  <div id="graphAndLegendPaddingReduced" className="custom-container-legend-style">
    <div id="tooltip" className="initial-tooltip" />
    <div className="bindto-container">
      <div id="legendContainer" className="legend-bindto-container" />
      <div id="graphContainer" className="legend-bindto-graph-container" />
    </div>
    <PieChart graphID="graphContainer" graphConfig={graphConfig} dataset={dataset} />
  </div>
);
