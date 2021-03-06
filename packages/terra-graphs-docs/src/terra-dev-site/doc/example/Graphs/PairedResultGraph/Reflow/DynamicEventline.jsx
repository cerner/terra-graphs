import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getPairedResultTimeseriesPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/simplePanningData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getPairedResultTimeseriesPanningConfig('#PairedResultDynamicEventline'));
graphConfig.eventline = [
  {
    color: Carbon.helpers.COLORS.GREY,
    style: {
      strokeDashArray: '4,4',
    },
    value: new Date(2016, 0, 1, 8).toISOString(),
  },
];
const initialState = {
  initial: 0,
  factor: 3,
  dataset: [utils.deepClone(data[0])],
  graphConfig,
};

const PairedResultPanningExample = () => {
  const reducer = (panState, action) => {
    const newGraphState = utils.deepClone(panState.graphConfig);
    let hour;
    const newDataset = [utils.deepClone(data[0])];

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
        color: Carbon.helpers.COLORS.BLACK,
        style: {
          strokeDashArray: '2,2',
        },
        value: new Date(2016, 0, 1, 12).toISOString(),
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
      <PairedResultGraph graphID="PairedResultDynamicEventline" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </React.Fragment>
  );
};

export default PairedResultPanningExample;
