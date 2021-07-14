import React from 'react';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Gantt/GanttChart.module.scss';
import getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';
import graphData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/multipleDatasetsPanningData';
import Carbon from '@cerner/carbon-graphs/src/js/carbon';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttPanningConfig('#ganttPanningMultipleDatasets'));
const dataset = utils.deepClone(graphData);

let graph;

const initialState = {
  initial: 0,
  factor: 3,
};

const GanttPanningMultipleDatasetsExample = () => {
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

    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();

    graph.reflowMultipleDatasets();

    return {
      initial: hour,
      factor: panState.factor,
    };
  };

  const [, dispatch] = React.useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="tooltip" className="initial-tooltip" />
      <div id="ganttPanningMultipleDatasets" />
    </React.Fragment>
  );
};

export default GanttPanningMultipleDatasetsExample;
