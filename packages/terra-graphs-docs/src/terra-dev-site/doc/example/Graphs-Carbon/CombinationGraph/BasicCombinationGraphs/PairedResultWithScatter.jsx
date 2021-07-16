import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph.module.scss';
import lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/PairedResultWithScatterData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineAndPairedResultConfig('#pairedResultWithScatter'));
const dataset = utils.deepClone(data);

const PairedResultWithScatterCombinationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.scatter(dataset[0]));
    graph.loadContent(Carbon.api.pairedResult(dataset[1]));
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="pairedResultWithScatter" />
    </React.Fragment>
  );
};

export default PairedResultWithScatterCombinationExample;
