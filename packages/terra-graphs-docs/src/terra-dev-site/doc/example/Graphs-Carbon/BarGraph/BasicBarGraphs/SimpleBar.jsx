import React from 'react';
// eslint no-unused-vars off
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefaultNegativeAxis';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/negativeBarData';

/*
 Please refer to the documentation below to see the graphConfig and data objects
 */

const graphConfig = utils.deepClone(getBarConfig('#simpleBargraph'));
const dataset = utils.deepClone(exampleData);

export default () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.bar(dataset));
  }, []);

  return (
    <ExampleGraphContainer id="simpleBargraph" />
  );
};
