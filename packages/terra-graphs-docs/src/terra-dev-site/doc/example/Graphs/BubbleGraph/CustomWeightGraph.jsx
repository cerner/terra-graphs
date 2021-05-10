import React from 'react';
import BubbleSingleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleSingleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Graph.module.scss';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/SimpleAxisData';
import bubbleDataCustomRadius from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js';

/*
Please refer to the documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(getSimpleAxisData('#customWeightGraph'));
const dataset = utils.deepClone(bubbleDataCustomRadius);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <BubbleSingleDataset graphID="customWeightGraph" graphConfig={graphConfig} dataset={[dataset]} />
  </React.Fragment>
);
