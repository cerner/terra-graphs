import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset1';
import barDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/barDataset';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getCombinationGraphConfig('#barGraphWithLine'));
const dataset = [
  utils.deepClone(barDataset),
  utils.deepClone(lineDataset),
];

const BarGraphWithLineCombinationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.bar(dataset[0]));
    graph.loadContent(Carbon.api.line(dataset[1]));
  }, []);
  return (
    <ExampleGraphContainer id="barGraphWithLine" />
  );
};

export default BarGraphWithLineCombinationExample;
