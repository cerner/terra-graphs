import React from 'react';
import BubbleSingleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleSingleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataColorBased from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataColorBased.js';

/*
Please refer to the documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(getSimpleAxisData('#colorBasedBubbleGraph'));
const dataset = [utils.deepClone(bubbleDataColorBased)];

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <BubbleSingleDataset graphID="colorBasedBubbleGraph" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
