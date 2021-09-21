import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanningEventline';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/panningData-eventline';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const initialState = {
  initial: 0,
  factor: 3,
  dataset: [utils.deepClone(data[0])],
  graphConfig: utils.deepClone(getConfigLineTimeseriesPanning('#dynamicEventlineExample')),
};

const LinePanningExample = () => {
  const reducer = (panState, action) => {
    const newGraphState = utils.deepClone(panState.graphConfig);
    const newDataset = [utils.deepClone(data[1])];
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

    const newEventline = [
      {
        color: Carbon.helpers.COLORS.GREEN,
        style: {
          strokeDashArray: '4,4',
        },
        value: new Date(2016, 0, 1, 9, 45).toISOString(),
      },
    ];

    return {
      initial: hour,
      factor: panState.factor,
      dataset: {
        panData: newDataset,
        eventline: newEventline,
      },
      graphConfig: utils.deepClone(newGraphState),
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="tooltip" className="initial-tooltip" />
      <LineGraph graphID="dynamicEventlineExample" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </React.Fragment>
  );
};

export default LinePanningExample;
