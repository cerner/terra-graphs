import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import '@cerner/terra-graphs/lib/components/Bar/BarGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/BarGraphWithLineData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getCombinationGraphConfig('#barGraphWithLine'));
const dataset = utils.deepClone(data);

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
