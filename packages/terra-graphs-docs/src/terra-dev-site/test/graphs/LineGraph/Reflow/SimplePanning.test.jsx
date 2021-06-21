import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';

const dataset = utils.deepClone(data);

const initialState =  {
  initial: 0,
  factor: 3,
  graphConfig: utils.deepClone(getConfigLineTimeseriesPanning('#linePanningExample'))
};

const LinePanningTest = () => {
 
  const reducer = (panState, action) => {

    const newGraphState = utils.deepClone(panState.graphConfig);
    let hour;

    switch(action.type){
      case "panLeft":
        hour = panState.initial - panState.factor;
        break;
      case "panRight":
        hour = panState.initial + panState.factor;
        break;
    }

    newGraphState.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    newGraphState.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();

    return {
      initial: hour,
      factor: panState.factor,
      graphConfig: utils.deepClone(newGraphState)
    };

  };
  
  const [panState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Button id="buttonPanLeft" text="<"  onClick={() => dispatch({type: "panLeft"})} />
      <Button id="buttonPanRight" text=">" onClick={() => dispatch({type: "panRight"})} />
      <div id="tooltip" className="initial-tooltip" />
      <LineGraph graphID="linePanningExample" graphConfig={panState.graphConfig} dataset={dataset} />
    </React.Fragment>
  );
};

export default LinePanningTest;
