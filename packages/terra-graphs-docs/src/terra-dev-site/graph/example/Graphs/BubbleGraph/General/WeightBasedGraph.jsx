import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BubbleSingleDataset from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bubble/BubbleSingleDataset';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataWeightBased from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataWeightBased.js';

/*
Please refer to the documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(getSimpleAxisData('#weightBasedBubbleGraph'));
const dataset = [utils.deepClone(bubbleDataWeightBased)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BubbleSingleDataset graphID="weightBasedBubbleGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
