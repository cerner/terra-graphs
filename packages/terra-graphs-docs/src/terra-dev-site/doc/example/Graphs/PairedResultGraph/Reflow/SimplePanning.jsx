import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getPairedResultTimeseriesPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimplePanningData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const dataset = [utils.deepClone(data)];

const initialState = {
  initial: 0,
  factor: 3,
  graphConfig: utils.deepClone(getPairedResultTimeseriesPanningConfig('#simplePairedResultPanning')),
};

const PairedResultPanningExample = () => {
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
      <div id="tooltip" className="initial-tooltip" />
      <PairedResultGraph graphID="simplePairedResultPanning" graphConfig={panState.graphConfig} dataset={dataset} />
    </>
  );
};

export default PairedResultPanningExample;
