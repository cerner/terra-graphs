import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions1';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getLineDefaultConfig('#simpleRegionLine'));
const dataset = utils.deepClone(exampleData);

const SimpleRegionLineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset));
  }, []);
  return (
    <ExampleGraphContainer id="simpleRegionLine" />
  );
};

export default SimpleRegionLineExample;
