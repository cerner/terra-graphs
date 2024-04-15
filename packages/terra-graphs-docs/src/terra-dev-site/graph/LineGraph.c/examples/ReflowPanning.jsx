import React from 'react';

import Button from 'terra-button';
import { IconLeft, IconRight } from 'terra-icon';

import Carbon from '@cerner/carbon-graphs';

// import React from 'react';
// import Button from 'terra-button/lib/Button';
// import Carbon from '@cerner/carbon-graphs';
// import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
// import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
// import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
// import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';
// import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';

//  graph configuration object

const graphConfig = {
  bindTo: '#line-graph-panning-example',
  axis: {
    x: {
      label: 'x-axis',
      lowerLimit: 80,
      upperLimit: 280,
      rangeRounding: false, // it's helpful to set rangeRounding to false for smoother panning
    },
    y: {
      label: 'y-axis',
      lowerLimit: -5,
      upperLimit: 20,
    },
  },
};

//  graph dataset

const dataset1 = {
  key: 'uid_1',
  label: {
    display: 'Data Label 1',
  },
  color: Carbon.helpers.COLORS.BLACK,
  values: [
    { x: 87, y: -2 },
    { x: 95, y: 1 },
    { x: 103, y: -4 },
    { x: 109, y: -2 },
    { x: 128, y: 3 },
    { x: 145, y: 28 },
    { x: 151, y: 7 },
    { x: 164, y: 10 },
    { x: 177, y: 1 },
    { x: 192, y: 6 },
    { x: 203, y: -21 },
    { x: 209, y: -3 },
    { x: 246, y: 3 },
  ],
};

// graph rendering

const state = {
  initial: 0,
  factor: 3,
};

let graph;
const panningFactor = 10;

const SimpleLinePanningExample = () => {
  // let graph = useRef({});

  const reducer = (panState, action) => {
    let newLowerLimit = graph.config.axis.x.lowerLimit;
    let newUpperLimit = graph.config.axis.x.upperLimit;

    switch (action.type) {
      case 'panLeft':
        newLowerLimit = graph.config.axis.x.lowerLimit - panningFactor;
        newUpperLimit = graph.config.axis.x.upperLimit - panningFactor;
        break;

      case 'panRight':
        newLowerLimit = graph.config.axis.x.lowerLimit + panningFactor;
        newUpperLimit = graph.config.axis.x.upperLimit + panningFactor;
        break;

      default:
        return panState;
    }

    return {
      newLowerLimit,
      newUpperLimit,
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, state);

  React.useLayoutEffect(() => {
    if (!graph) { return; }

    graph.config.axis.x.lowerLimit = panState.newLowerLimit;
    graph.config.axis.x.upperLimit = panState.newUpperLimit;

    graph.reflowMultipleDatasets();
  }, [panState]);

  React.useEffect(() => {
    graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset1));
  }, []);

  return (
    <>
      <Button icon={<IconLeft />} isIconOnly text="pan left" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button icon={<IconRight />} isIconOnly text="pan right" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="line-graph-panning-example" />
    </>
  );
};

export default SimpleLinePanningExample;
