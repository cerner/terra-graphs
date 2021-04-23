import React from 'react';
import BubbleMultipleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleMultipleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Graph.module.scss';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import getSimpleAxisData from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Bubble/SimpleAxisData';
import data  from '@cerner/carbon-graphs/dev/data/dataObjects/Bubble/bubbleDataBasic.js';
import bubbleDataCustomRadius from '@cerner/carbon-graphs/dev/data/dataObjects/Bubble/bubbleDataCustomRadius.js';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(getSimpleAxisData('#simpleBubbleGraph'));

export default () => <BubbleMultipleDataset graphID="simpleBubbleGraph" graphConfig={graphConfig} dataset={[bubbleDataCustomRadius, data]} />;
