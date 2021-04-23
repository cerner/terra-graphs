import React from 'react';
import BubbleSingleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleSingleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Graph.module.scss';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import getSimpleAxisData from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataColorBased from '@cerner/carbon-graphs/dev/data/dataObjects/Bubble/bubbleDataColorBased.js';

const graphConfig = utils.deepClone(getSimpleAxisData('#colorBasedBubbleGraph'));

export default () => <BubbleSingleDataset graphID="colorBasedBubbleGraph" graphConfig={graphConfig} dataset={[bubbleDataColorBased]} />;
