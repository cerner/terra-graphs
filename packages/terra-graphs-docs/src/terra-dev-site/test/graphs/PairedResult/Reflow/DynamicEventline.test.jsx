import React from 'react';
import Button from 'terra-button/lib/Button';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import PairedResultGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getPairedResultTimeseriesPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultPanningWithEventline';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimplePanningData';

const graphConfig = utils.deepClone(getPairedResultTimeseriesPanningConfig('#PairedResultDynamicEventline'));
const initialState = {
  initial: 0,
  factor: 3,
  dataset: [utils.deepClone(data)],
  graphConfig,
};

const PairedResultPanningExample = () => {
  const reducer = (panState, action) => {
    const newGraphState = utils.deepClone(panState.graphConfig);
    let hour;
    const newDataset = [utils.deepClone(data)];

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
    <>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <PairedResultGraph graphID="PairedResultDynamicEventline" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </>
  );
};

export default PairedResultPanningExample;
