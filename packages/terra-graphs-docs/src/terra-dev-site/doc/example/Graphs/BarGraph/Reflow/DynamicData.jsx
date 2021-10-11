import React from 'react';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BarGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barPanning';
import initialData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1';
import updatedData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1newData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const initialState = {
  initial: 0,
  factor: 3,
  dataset: [utils.deepClone(initialData)],
  graphConfig: utils.deepClone(getBarConfig('#BarPanningDynamicData')),
};

const BarPanningExample = () => {
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
      <BarGraph graphID="BarPanningDynamicData" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </>
  );
};

export default BarPanningExample;
