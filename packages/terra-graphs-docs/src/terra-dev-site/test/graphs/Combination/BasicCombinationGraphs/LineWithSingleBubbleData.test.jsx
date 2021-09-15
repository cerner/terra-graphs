import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import CombinationGraph from '@cerner/terra-graphs/lib/components/Combination/CombinationGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset1';
import singleBubbleDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/bubbleDataset1';

const graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithSingleBubbleData'));
const dataset = [utils.deepClone(singleBubbleDataset), utils.deepClone(lineDataset)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
<<<<<<< HEAD
    <CombinationGraph graphID="lineWithPairedResult" graphConfig={graphConfig} dataset={dataset} />
  </>
=======
    <CombinationGraph graphID="lineWithSingleBubbleData" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
>>>>>>> 401809bf... Updated Combination graph datasets and examples to maintain consistency.
);
