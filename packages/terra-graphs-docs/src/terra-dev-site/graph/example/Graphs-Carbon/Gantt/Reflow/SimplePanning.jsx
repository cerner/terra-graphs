import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';
import graphData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/simplePanningData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGanttPanningConfig('#simpleGanttPanning'));
const dataset = [utils.deepClone(graphData)];

let graph;

const initialState = {
  initial: 0,
  factor: 3,
};

const SimpleGanttPanningExample = () => {
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

    graph.reflowMultipleDatasets();
  }, [panState.initial]);

  return (
    <>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <ExampleGraphContainer id="simpleGanttPanning" />
    </>
  );
};

export default SimpleGanttPanningExample;
