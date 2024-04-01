import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getLineDefaultY2Config from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultY2';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions1';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions2';
import exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions3';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getLineDefaultY2Config('#multipleline'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
  utils.deepClone(exampleData3),
];

const MultipleLineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.line(data));
    });
  }, []);
  return (
    <ExampleGraphContainer id="multipleline" />
  );
};

export default MultipleLineExample;

