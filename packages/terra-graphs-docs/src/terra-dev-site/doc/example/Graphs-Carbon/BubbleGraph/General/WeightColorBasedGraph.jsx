import React from 'react';
import BubbleSingleDataset from '@cerner/terra-graphs/lib/components/Bubble/BubbleSingleDataset';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/simpleAxisData';
import bubbleDataColorWeightBased from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataColorWeightBased.js';

import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

/*
Please refer to the documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(getSimpleAxisData('#weightColorBasedBubbleGraph'));
const dataset = utils.deepClone(bubbleDataColorWeightBased);

export default () => {

    React.useEffect(() => {
        const graph = Carbon.api.graph(graphConfig);
        graph.loadContent(Carbon.api.bubbleSingleDataset(dataset));
    }, []);

    return (
        <React.Fragment >
            <div id = "weightColorBasedBubbleGraph" > </div> 
        </React.Fragment>
    );

};
