import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BubbleSingleDataset from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bubble/BubbleSingleDataset';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataCustomRadius from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js';

const graphConfig = utils.deepClone(getSimpleAxisData('#customWeightGraph'));
const dataset = [utils.deepClone(bubbleDataCustomRadius)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BubbleSingleDataset graphID="customWeightGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
