import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import PieChart from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Pie/PieChart';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/simplePieConfig';
import dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset1';
import dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset2';
import dataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset3';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getPieConfig('#simplePie'));
const dataset = [
  utils.deepClone(dataset1),
  utils.deepClone(dataset2),
  utils.deepClone(dataset3),
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <PieChart graphID="simplePie" graphConfig={graphConfig} dataset={dataset} />
  </>
);
