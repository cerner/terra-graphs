import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanningY2';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/y2AxisData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const initialState =  {
  initial: 0,
  factor: 3,
  dataset: utils.deepClone(data),
  graphConfig: utils.deepClone(getConfigLineTimeseriesPanning('#linePanningExample'))
};

const LinePanningExample = () => {

  const reducer = (panState, action) => {

    const newGraphConfig = utils.deepClone(panState.graphConfig);
    let hour;
    let newDataset;

    switch(action.type){
      case "panLeft":
        newDataset = [utils.deepClone(data[0])]
        break;
      case "panRight":
        newDataset = [utils.deepClone(data[1])]
        break;
    }

    return {
      initial: hour,
      factor: panState.factor,
      dataset: newDataset,
      graphConfig: utils.deepClone(newGraphConfig)
    };

  };

  const [panState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Button id="buttonPanLeft" text="<"  onClick={() => dispatch({type: "panLeft"})} />
      <Button id="buttonPanRight" text=">" onClick={() => dispatch({type: "panRight"})} />
      <div id="tooltip" className="initial-tooltip" />
      <LineGraph graphID="linePanningExample" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </React.Fragment>
  );
};

export default LinePanningExample;
