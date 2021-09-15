import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
<<<<<<< HEAD
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineWithSingleBubbleData';
=======
import lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset1';
import singleBubbleDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/bubbleDataset1';
>>>>>>> 401809bf... Updated Combination graph datasets and examples to maintain consistency.

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithSingleBubbleData'));
const dataset = [utils.deepClone(singleBubbleDataset), utils.deepClone(lineDataset)];

const LineWithSingleBubbleDataCombinationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset[0]));
    graph.loadContent(Carbon.api.line(dataset[1]));
  }, []);
  return (
    <ExampleGraphContainer id="lineWithSingleBubbleData" />
  );
};

export default LineWithSingleBubbleDataCombinationExample;

