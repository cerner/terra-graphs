import React from 'react';
import CombinationGraph from '@cerner/terra-graphs/lib/components/Combination/CombinationGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineWithSingleBubbleData';

const graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithPairedResult'));
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <CombinationGraph graphID="lineWithPairedResult" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
