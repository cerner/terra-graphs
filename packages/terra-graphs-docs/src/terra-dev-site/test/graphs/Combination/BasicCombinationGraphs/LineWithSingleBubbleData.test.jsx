import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineWithSingleBubbleData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithSingleBubbleData'));
const dataset = utils.deepClone(data);

const CombinationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset[0]));
    graph.loadContent(Carbon.api.line(dataset[1]));
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="lineWithSingleBubbleData" />
    </React.Fragment>
  );
};

export default CombinationExample;

