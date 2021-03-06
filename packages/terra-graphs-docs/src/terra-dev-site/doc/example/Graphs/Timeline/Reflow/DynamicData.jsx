import React from 'react';
import Timeline from '@cerner/terra-graphs/lib/components/Timeline/Timeline';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import data1 from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Timeline/defaultDataset';
import data2 from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Timeline/criticalDataset';
import getTimelinePanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelinePanningConfig';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const initialState = {
  initial: 0,
  factor: 3,
  dataset: utils.deepClone(data1),
  graphConfig: utils.deepClone(getTimelinePanningConfig('#TimelinePanningExample')),
};

const TimelinePanningExample = () => {
  const reducer = (panState, action) => {
    const newGraphState = utils.deepClone(panState.graphConfig);
    const newDataset = utils.deepClone(data2);

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
    <React.Fragment>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="tooltip" className="initial-tooltip" />
      <Timeline graphID="TimelinePanningExample" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </React.Fragment>
  );
};

export default TimelinePanningExample;
