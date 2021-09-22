import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BubbleSingleDataset from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bubble/BubbleSingleDataset';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataColorWeightBased from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataColorWeightBased.js';

const graphConfig = utils.deepClone(getSimpleAxisData('#weightColorBasedBubbleGraph'));
const dataset = [utils.deepClone(bubbleDataColorWeightBased)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BubbleSingleDataset graphID="weightColorBasedBubbleGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
