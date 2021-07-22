import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/src/components/Bar/BarGraph.module.scss';
import barDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/simpleBarData';

const regions = [
  {
    axis: 'y',
    x: 1,
    start: 7,
    end: 7,
  },
  {
    axis: 'y',
    x: 2,
    start: 13,
    end: 13,
  },
  {
    axis: 'y',
    x: 3,
    start: 17,
    end: 17,
  },
  {
    axis: 'y',
    x: 4,
    start: 4,
    end: 4,
  },
];

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(barDefault('#simpleGoalLineBargraph'));

const dataset = utils.deepClone(exampleData);
dataset[0].regions = regions;

export default () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.bar(data));
    });
  }, []);

  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="simpleGoalLineBargraph"> </div>
    </React.Fragment>
  );
};