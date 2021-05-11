import React from 'react';
import BubbleMultipleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleMultipleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataBasic from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';
import bubbleDataCustomRadius from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js';

const graphConfig = utils.deepClone(getSimpleAxisData('#simpleBubbleGraph'));
const dataset1 = utils.deepClone(bubbleDataBasic);
const dataset2 = utils.deepClone(bubbleDataCustomRadius);

export default () => <BubbleMultipleDataset graphID="simpleBubbleGraph" graphConfig={graphConfig} dataset={[dataset1, dataset2]} />;
