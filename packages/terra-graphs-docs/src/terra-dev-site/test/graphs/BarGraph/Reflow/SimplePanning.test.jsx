import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getBarPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barPanning';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/simplePanningData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const dataset = utils.deepClone(data);

const initialState = {
  initial: 0,
  factor: 3,
  graphConfig: utils.deepClone(getBarPanningConfig('#simpleBarPanning')),
};

const BarPanningExample = () => {
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
      <BarGraph graphID="simpleBarPanning" graphConfig={panState.graphConfig} dataset={dataset} />
    </>
  );
};

export default BarPanningExample;
