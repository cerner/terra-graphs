import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import CombinationGraph from '@cerner/terra-graphs/lib/components/Combination/CombinationGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';
import lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset2';
import pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultDataset';

const graphConfig = utils.deepClone(lineAndPairedResultConfig('#lineWithPairedResult'));
const dataset = [utils.deepClone(lineDataset), utils.deepClone(pairedResultDataset)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <CombinationGraph graphID="lineWithPairedResult" graphConfig={graphConfig} dataset={dataset} />
  </>
);
