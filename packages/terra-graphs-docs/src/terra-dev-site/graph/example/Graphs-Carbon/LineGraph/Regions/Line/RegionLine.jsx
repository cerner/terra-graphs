import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions2';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getLineDefaultConfig('#regionLine'));
const dataset = utils.deepClone(exampleData);

// contentData[0].regions = [
//   {
//     start: 10,
//     end: 10,
//     color: '#bcbfc0',
//   },
// ];

const RegionLineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset));
  }, []);
  return (
    <ExampleGraphContainer id="regionLine" />
  );
};

export default RegionLineExample;

