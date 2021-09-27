import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/multiLineData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineDefault('#multiLine'));
const dataset = utils.deepClone(exampleData);
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
