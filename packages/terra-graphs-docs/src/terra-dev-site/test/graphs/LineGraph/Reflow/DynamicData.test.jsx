import React from 'react';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';
import initialData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';
import updatedData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1-newData';

const initialState = {
  initial: 0,
  factor: 3,
  dataset: [utils.deepClone(initialData)],
  graphConfig: utils.deepClone(getConfigLineTimeseriesPanning('#dynamicLineData')),
};

const LinePanningExample = () => {
  const reducer = (panState, action) => {
    const newGraphState = utils.deepClone(panState.graphConfig);
    const newDataset = [utils.deepClone(updatedData)];

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

    newGraphState.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    newGraphState.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();

    return {
      initial: hour,
      factor: panState.factor,
      dataset: { panData: newDataset },
      graphConfig: utils.deepClone(newGraphState),
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <LineGraph graphID="dynamicLineData" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </>
  );
};

export default LinePanningExample;
