import React from 'react';
import BubbleSingleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleSingleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataWeightBased from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataWeightBased.js';

/*
Please refer to the documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(getSimpleAxisData('#weightBasedBubbleGraph'));
const dataset = utils.deepClone(bubbleDataWeightBased);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <BubbleSingleDataset graphID="weightBasedBubbleGraph" graphConfig={graphConfig} dataset={[dataset]} />
  </React.Fragment>
);
