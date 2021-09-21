import React from 'react';
import Timeline from '@cerner/terra-graphs/lib/components/Timeline/Timeline';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getTimelinePanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelinePanningConfig';
import dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset1.js';
import dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset2.js';

const dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];

const initialState = {
  initial: 0,
  factor: 3,
  graphConfig: utils.deepClone(getTimelinePanningConfig('#TimelinePanningExample')),
};

const TimelinePanningExample = () => {
  const reducer = (panState, action) => {
    const newGraphState = utils.deepClone(panState.graphConfig);

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
      graphConfig: utils.deepClone(newGraphState),
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="tooltip" className="initial-tooltip" />
      <Timeline graphID="TimelinePanningExample" graphConfig={panState.graphConfig} dataset={dataset} />
    </React.Fragment>
  );
};

export default TimelinePanningExample;
