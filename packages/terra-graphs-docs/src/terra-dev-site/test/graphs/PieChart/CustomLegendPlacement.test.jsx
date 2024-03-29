import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import PieChart from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Pie/PieChart';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/customLegendPlacementConfig';
import dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset1';
import dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset2';
import dataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset3';

const graphConfig = utils.deepClone(getPieConfig('#graphContainer'));
const dataset = [
  utils.deepClone(dataset1),
  utils.deepClone(dataset2),
  utils.deepClone(dataset3),
];

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
