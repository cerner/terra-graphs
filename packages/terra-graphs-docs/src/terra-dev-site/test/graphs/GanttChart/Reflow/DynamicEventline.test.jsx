import React from 'react';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import GanttChart from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttPanningWithEventlineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanningWithEventline';
import graphData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/simplePanningData';
import Carbon from '@cerner/carbon-graphs';

const graphConfig = utils.deepClone(getGanttPanningWithEventlineConfig('#GanttPanningWithDynamicEventline'));
const dataset = [utils.deepClone(graphData)];

const initialState = {
  initial: 0,
  factor: 3,
  dataset,
  graphConfig,
};

const GanttPanningExample = () => {
  const reducer = (panState, action) => {
    const newGraphConfig = utils.deepClone(panState.graphConfig);
    let hour;
    const newDataset = [utils.deepClone(graphData)];

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

    const newEventline = [
      {
        color: Carbon.helpers.COLORS.BLACK,
        style: {
          strokeDashArray: '2,2',
        },
        value: new Date(2016, 0, 1, 6, 30).toISOString(),
      },
    ];

    return {
      initial: hour,
      factor: panState.factor,
      dataset: {
        panData: newDataset,
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
      <GanttChart graphID="GanttPanningWithDynamicEventline" graphConfig={panState.graphConfig} dataset={panState.dataset} />
    </>
  );
};

export default GanttPanningExample;
