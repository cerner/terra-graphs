import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import barDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData';

const region = [
  {
    axis: 'y',
    x: 1,
    start: 10,
    end: 10,
  },
  {
    axis: 'y',
    x: 2,
    start: 40,
    end: 40,
  },
  {
    axis: 'y',
    x: 3,
    start: 55,
    end: 55,
  },
  {
    axis: 'y',
    x: 4,
    start: 30,
    end: 30,
  },
];

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(barDefault('#stackedGoalLineBargraph'));

const dataset = utils.deepClone(exampleData);
dataset[0].regions = region;
dataset[1].regions = region;
dataset[2].regions = region;

export default () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.bar(data));
    });
  }, []);

  return (
    <ExampleGraphContainer id="stackedGoalLineBargraph" />
  );
};
