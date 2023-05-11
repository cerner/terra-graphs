import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import CombinationGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Combination/CombinationGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset1';
import barDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/barDataset';

const graphConfig = utils.deepClone(getCombinationGraphConfig('#barGraphWithLine'));
const dataset = [
  utils.deepClone(barDataset),
  utils.deepClone(lineDataset),
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <CombinationGraph graphID="barGraphWithLine" graphConfig={graphConfig} dataset={dataset} />
  </>
);
