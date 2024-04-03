import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataWeightBased from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataWeightBased.js';

/*
Please refer to the documentation below to see graphConfig and data objects.
*/

const graphConfig = utils.deepClone(getSimpleAxisData('#weightBasedBubbleGraph'));
const dataset = utils.deepClone(bubbleDataWeightBased);

export default () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset));
  }, []);

  return (
    <ExampleGraphContainer id="weightBasedBubbleGraph" />
  );
};
