import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import Button from 'terra-button/lib/Button';
import getSimpleAxisData from '@cerner/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/simplePanningAxisData';
import bubbleDynamicPanningData from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDynamicPanningData.js';
import bubbleDynamicPanningData2 from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDynamicPanningData2.js';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const dataset1 = utils.deepClone(bubbleDynamicPanningData[0]);
const dataset2 = utils.deepClone(bubbleDynamicPanningData2[0]);

const initialState = {
  initial: 0,
  factor: 3,
  graphConfig: utils.deepClone(getSimpleAxisData('#BubbleMultipleDatasetsPanning')),
};

let graph;

const BubblePanningExample = () => {
  React.useEffect(() => {
    graph = Carbon.api.graph(initialState.graphConfig);
    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset1));
    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset2));
  }, []);

  const reducer = (panState, action) => {
    const newDatasets = { panData: [utils.deepClone(bubbleDynamicPanningData[1]), utils.deepClone(bubbleDynamicPanningData2[1])] };
    let hour;

    switch (action.type) {
      case 'panLeft':
        hour = panState.initial - panState.factor;
        break;
      case 'panRight':
        hour = panState.initial + panState.factor;
        break;
      default:
        return panState;
    }

    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();

    graph.reflowMultipleDatasets(newDatasets);

    return {
      initial: hour,
      factor: panState.factor,
    };
  };

  const [, dispatch] = React.useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="BubbleMultipleDatasetsPanning"> </div>
    </React.Fragment>
  );
};

export default BubblePanningExample;
