import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import Button from 'terra-button/lib/Button';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simplePanningAxisData';
import bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';
import bubbleDataCustomRadius from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getSimpleAxisData('#BubbleMultipleDatasetsPanning'));
const dataset1 = utils.deepClone(bubbleDataBasic);
const dataset2 = utils.deepClone(bubbleDataCustomRadius);

const state = {
  initial: 0,
  factor: 3,
};

let graph;

const BubblePanningExample = () => {
  React.useEffect(() => {
    graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset1));
    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset2));
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

    return {
      initial: hour,
      factor: panState.factor,
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, state);

  React.useLayoutEffect(() => {
    if (!graph) { return; }

    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();
    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();

    graph.reflowMultipleDatasets();
  }, [panState.initial]);

  return (
    <>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <ExampleGraphContainer id="BubbleMultipleDatasetsPanning" />
    </>
  );
};

export default BubblePanningExample;
