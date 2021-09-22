import React from 'react';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BubbleMultipleDataset from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bubble/BubbleMultipleDataset';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simplePanningAxisData';
import bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';
import bubbleDataCustomRadius from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js';

const dataset = [utils.deepClone(bubbleDataBasic), utils.deepClone(bubbleDataCustomRadius)];

const initialState = {
  initial: 0,
  factor: 3,
  graphConfig: utils.deepClone(getSimpleAxisData('#BubbleMultipleDatasetsPanning')),
};

const BubblePanningExample = () => {
  const reducer = (panState, action) => {
    const newGraphConfig = utils.deepClone(panState.graphConfig);
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

    newGraphConfig.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    newGraphConfig.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();

    return {
      initial: hour,
      factor: panState.factor,
      graphConfig: utils.deepClone(newGraphConfig),
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <BubbleMultipleDataset graphID="BubbleMultipleDatasetsPanning" graphConfig={panState.graphConfig} dataset={dataset} />
    </>
  );
};

export default BubblePanningExample;
