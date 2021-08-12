import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import Button from 'terra-button/lib/Button';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BarGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barPanningEventline';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/simpleBarDataPanning';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getBarConfig('#barPanningDynamicEventline'));
const initialState = {
  initial: 0,
  factor: 3,
  dataset: utils.deepClone(data),
  graphConfig,
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

    const newEventline = [
      {
        color: Carbon.helpers.COLORS.BLACK,
        style: {
          strokeDashArray: '2,2',
        },
        value: new Date(2016, 0, 1, 7, 30).toISOString(),
      },
    ];

    newGraphConfig.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    newGraphConfig.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();

    return {
      initial: hour,
      factor: panState.factor,
      dataset: {
        eventline: newEventline,
      },
      graphConfig: utils.deepClone(newGraphConfig),
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <BarGraph graphID="barPanningDynamicEventline" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </>
  );
};

export default BarPanningExample;
