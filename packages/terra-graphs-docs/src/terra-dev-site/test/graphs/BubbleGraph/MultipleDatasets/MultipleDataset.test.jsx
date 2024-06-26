import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BubbleMultipleDataset from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bubble/BubbleMultipleDataset';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';
import bubbleDataCustomRadius from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js';

const graphConfig = utils.deepClone(getSimpleAxisData('#multipleDatasetBubbleGraph'));
const dataset = [utils.deepClone(bubbleDataBasic), utils.deepClone(bubbleDataCustomRadius)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BubbleMultipleDataset graphID="multipleDatasetBubbleGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
