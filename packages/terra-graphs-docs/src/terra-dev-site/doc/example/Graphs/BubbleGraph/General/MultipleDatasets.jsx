import React from 'react';
import BubbleMultipleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleMultipleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';
import bubbleDataCustomRadius from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js';

/*
Please refer to the documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(getSimpleAxisData('#multipleDatasetBubbleGraph'));
const dataset = [utils.deepClone(bubbleDataBasic), utils.deepClone(bubbleDataCustomRadius)];

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <BubbleMultipleDataset graphID="multipleDatasetBubbleGraph" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);