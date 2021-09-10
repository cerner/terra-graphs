import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';
import dynamicPanningDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dynamicPanningDataset1';
import dynamicPanningDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dynamicPanningDataset2';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const initialState = {
  initial: 0,
  factor: 3,
  dataset: [utils.deepClone(dynamicPanningDataset1)],
  graphConfig: utils.deepClone(getGanttPanningConfig('#GanttPanningDynamicData')),
};

const GanttPanningExample = () => {
  const reducer = (panState, action) => {
    const newGraphState = utils.deepClone(panState.graphConfig);
    let hour;
    const newDataset = [utils.deepClone(dynamicPanningDataset2)];

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
      <GanttChart graphID="GanttPanningDynamicData" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </React.Fragment>
  );
};

export default GanttPanningExample;
