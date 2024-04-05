import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset1';
import multipleBubbleDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/bubbleDataset1';
import multipleBubbleDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/bubbleDataset2';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithMultipleBubbleData'));
const dataset = [
  utils.deepClone(multipleBubbleDataset1),
  utils.deepClone(multipleBubbleDataset2),
  utils.deepClone(lineDataset),
];

const LineWithMultipleBubbleDataCombinationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset[0]));
    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset[1]));
    graph.loadContent(Carbon.api.line(dataset[2]));
  }, []);
  return (
    <ExampleGraphContainer id="lineWithMultipleBubbleData" />
  );
};

export default LineWithMultipleBubbleDataCombinationExample;
