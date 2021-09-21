import React from 'react';
import BubbleSingleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleSingleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';

const graphConfig = utils.deepClone(getSimpleAxisData('#simpleBubbleGraph'));
const dataset = [utils.deepClone(bubbleDataBasic)];

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <BubbleSingleDataset graphID="simpleBubbleGraph" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
