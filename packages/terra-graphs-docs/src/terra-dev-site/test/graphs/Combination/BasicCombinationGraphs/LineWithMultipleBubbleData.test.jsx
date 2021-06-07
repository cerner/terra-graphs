import React from 'react';
import CombinationGraph from '@cerner/terra-graphs/lib/components/Combination/CombinationGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineWithMultipleBubbleData';

const graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithMultipleBubbleData'));
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <CombinationGraph graphID="lineWithMultipleBubbleData" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
