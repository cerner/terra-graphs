import React, { useState } from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/multipleDatasets';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const initialState = {
  initial: 0,
  factor: 3,
  dataset: utils.deepClone(data.initialData),
  graphConfig: utils.deepClone(getConfigLineTimeseriesPanning('#multipleDatasetsExample')),
};

const LinePanningExample = () => {
  const reducer = (panState, action) => {
    const newGraphState = utils.deepClone(panState.graphConfig);
    let hour;
    let newDataset;

    switch (action.type) {
      case 'panLeft':
        newDataset = utils.deepClone(data.initialData);
        break;
      case 'panRight':
        newDataset = utils.deepClone(data.panData);
        break;
    }

    return {
      initial: hour,
      factor: panState.factor,
      dataset: newDataset,
      graphConfig: utils.deepClone(newGraphState),
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Button className="buttonPanLeft" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="buttonPanRight" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="tooltip" className="initial-tooltip" />
      <LineGraph graphID="multipleDatasetsExample" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </React.Fragment>
  );
};

export default LinePanningExample;
