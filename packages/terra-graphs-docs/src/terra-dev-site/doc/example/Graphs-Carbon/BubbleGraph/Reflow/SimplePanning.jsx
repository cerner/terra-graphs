import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import Button from 'terra-button/lib/Button';
import getSimpleAxisData from '@cerner/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/simplePanningAxisData';
import bubbleDataBasic from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const dataset = utils.deepClone(bubbleDataBasic);

const initialState = {
  initial: 0,
  factor: 3,
};

const graphConfig = utils.deepClone(getSimpleAxisData('#simpleBubblePanning'));
let graph;

const BubblePanningExample = () => {
  React.useEffect(() => {
    if (!graph) {
      graph = Carbon.api.graph(graphConfig);
      graph.loadContent(Carbon.api.bubbleSingleDataset(dataset));
    }
  }, []);

  const reducer = (panState, action) => {
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

    graph.reflowMultipleDatasets();

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
      <div id="simpleBubblePanning"> </div>
    </React.Fragment>
  );
};

export default BubblePanningExample;
