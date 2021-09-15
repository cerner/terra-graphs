import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';
import scatterDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/scatterDataset';
import pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultDataset';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineAndPairedResultConfig('#pairedResultWithScatter'));
const dataset = [utils.deepClone(scatterDataset), utils.deepClone(pairedResultDataset)];

const PairedResultWithScatterCombinationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.scatter(dataset[0]));
    graph.loadContent(Carbon.api.pairedResult(dataset[1]));
  }, []);
  return (
    <ExampleGraphContainer id="pairedResultWithScatter" />
  );
};

export default PairedResultWithScatterCombinationExample;
