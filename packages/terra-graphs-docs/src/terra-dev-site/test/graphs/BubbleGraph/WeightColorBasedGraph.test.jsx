import React from 'react';
import BubbleSingleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleSingleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataColorWeightBased from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataColorWeightBased.js';

const graphConfig = utils.deepClone(getSimpleAxisData('#multipleDatasetBubbleGraph'));
const dataset = utils.deepClone(bubbleDataColorWeightBased);

export default () => (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <BubbleSingleDataset graphID="multipleDatasetBubbleGraph" graphConfig={graphConfig} dataset={[dataset]} />
    </React.Fragment>
  );
