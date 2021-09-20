import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Gantt/GanttChart.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';
import dynamicPanningDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dynamicPanningDataset1';
import dynamicPanningDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dynamicPanningDataset2';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGanttPanningConfig('#GanttPanningDynamicData'));
const dataset = [utils.deepClone(dynamicPanningDataset1)];

const initialState = {
  initial: 0,
  factor: 3,
};

let graph;

const GanttPanningDynamicDataExample = () => {
  React.useEffect(() => {
    graph = Carbon.api.gantt(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);

  const reducer = (panState, action) => {
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

    return {
      initial: hour,
      factor: panState.factor,
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, initialState);

  React.useLayoutEffect(() => {
    if (!graph) { return; }

    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();
    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();

    const newDataset = {
      panData: [utils.deepClone(utils.deepClone(dynamicPanningDataset2))],
    };

    graph.reflowMultipleDatasets(newDataset);
  }, [panState.initial]);

  return (
    <React.Fragment>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="tooltip" className="initial-tooltip" />
      <ExampleGraphContainer id="GanttPanningDynamicData" />
    </React.Fragment>
  );
};

export default GanttPanningDynamicDataExample;
