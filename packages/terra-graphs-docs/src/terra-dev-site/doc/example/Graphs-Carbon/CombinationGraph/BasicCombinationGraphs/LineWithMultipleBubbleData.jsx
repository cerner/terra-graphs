import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineWithMultipleBubbleData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithMultipleBubbleData'));
const dataset = utils.deepClone(data);

const LineWithMultipleBubbleDataCombinationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset[0]));
    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset[1]));
    graph.loadContent(Carbon.api.line(dataset[2]));
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="lineWithMultipleBubbleData" />
    </React.Fragment>
  );
};

export default LineWithMultipleBubbleDataCombinationExample;
