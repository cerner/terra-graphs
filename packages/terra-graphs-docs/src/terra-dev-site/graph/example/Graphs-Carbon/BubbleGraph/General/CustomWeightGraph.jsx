import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';

/*
Please refer to the documentation below to see graphConfig and data objects.
*/

const graphConfig = utils.deepClone(getSimpleAxisData('#customWeightGraph'));
const dataset = utils.deepClone(bubbleDataBasic);

export default () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset));
  }, []);

  return (
    <ExampleGraphContainer id="customWeightGraph" />
  );
};
