import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';
<<<<<<< HEAD
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineAndPairedResultData';
=======
import lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineSimpleRegionDataset';
import pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultSimpleRegionDataset';
>>>>>>> 401809bf... Updated Combination graph datasets and examples to maintain consistency.

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineAndPairedResultConfig('#lineWithPairedResultRegion'));
const dataset = [utils.deepClone(lineDataset), utils.deepClone(pairedResultDataset)];

const LineWithPairedResultRegionCombinationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset[0]));
    graph.loadContent(Carbon.api.pairedResult(dataset[1]));
  }, []);
  return (
    <ExampleGraphContainer id="lineWithPairedResultRegion" />
  );
};

export default LineWithPairedResultRegionCombinationExample;
