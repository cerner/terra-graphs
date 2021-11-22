import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset2';
import exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset3';
import exampleData4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset4';
import exampleData5 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset5';
import exampleData6 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset6';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getLineDefaultConfig('#multiLine'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
  utils.deepClone(exampleData3),
  utils.deepClone(exampleData4),
  utils.deepClone(exampleData5),
  utils.deepClone(exampleData6),
];
const timeout = [0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6];

const MultiLineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data, index) => {
      setTimeout(
        () => (graph.graphContainer
          ? graph.loadContent(Carbon.api.line(data))
          : ''),
        timeout[index],
      );
    });
  }, []);
  return (
    <ExampleGraphContainer id="multiLine" />
  );
};

export default MultiLineExample;
