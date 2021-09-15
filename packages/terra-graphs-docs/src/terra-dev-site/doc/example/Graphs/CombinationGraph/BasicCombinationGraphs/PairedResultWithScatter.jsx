import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import CombinationGraph from '@cerner/terra-graphs/lib/components/Combination/CombinationGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';
import scatterDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/scatterDataset';
import pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultDataset';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineAndPairedResultConfig('#pairedResultWithScatter'));
const dataset = [utils.deepClone(scatterDataset), utils.deepClone(pairedResultDataset)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <CombinationGraph graphID="pairedResultWithScatter" graphConfig={graphConfig} dataset={dataset} />
  </>
);
