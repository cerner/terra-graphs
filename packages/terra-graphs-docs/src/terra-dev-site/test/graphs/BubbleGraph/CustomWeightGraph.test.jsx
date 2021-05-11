import React from 'react';
import BubbleSingleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleSingleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Graph.module.scss';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataCustomRadius from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js';

const graphConfig = utils.deepClone(getSimpleAxisData('#colorBasedBubbleGraph'));
const dataset = utils.deepClone(bubbleDataCustomRadius);

export default () => <BubbleSingleDataset graphID="colorBasedBubbleGraph" graphConfig={graphConfig} dataset={[dataset]} />;
