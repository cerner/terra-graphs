import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph.module.scss';
import lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineAndPairedResultData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineAndPairedResultConfig('#lineWithPairedResult'));
const dataset = utils.deepClone(data);

const LineWithPairedResultCombinationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset[0]));
    graph.loadContent(Carbon.api.pairedResult(dataset[1]));
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="lineWithPairedResult" />
    </React.Fragment>
  );
};

export default LineWithPairedResultCombinationExample;
