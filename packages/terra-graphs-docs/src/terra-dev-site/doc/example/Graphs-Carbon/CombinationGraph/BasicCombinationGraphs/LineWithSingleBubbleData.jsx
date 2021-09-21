import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineWithSingleBubbleData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithSingleBubbleData'));
const dataset = utils.deepClone(data);

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

