import React from 'react';
import BubbleSingleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleSingleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Graph.module.scss';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/SimpleAxisData';
import bubbleDataBasic from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';

/*
Please refer to the documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(getSimpleAxisData('#simpleBubbleGraph'));
const dataset = utils.deepClone(bubbleDataBasic);

export default () => (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <BubbleSingleDataset graphID="simpleBubbleGraph" graphConfig={graphConfig} dataset={[dataset]} />;
    </React.Fragment>
);