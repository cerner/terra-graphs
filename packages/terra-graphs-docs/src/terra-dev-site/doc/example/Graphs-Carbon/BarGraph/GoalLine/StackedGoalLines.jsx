import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import data1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedGoalLinesData1';
import data2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedGoalLinesData2';
import data3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedGoalLinesData3';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getBarConfig('#stackedGoalLineBargraph'));
const dataset = [
  utils.deepClone(data1),
  utils.deepClone(data2),
  utils.deepClone(data3),
];

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
