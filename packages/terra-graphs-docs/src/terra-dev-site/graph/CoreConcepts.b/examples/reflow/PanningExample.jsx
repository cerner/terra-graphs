import React from 'react';

import Button from 'terra-button';
import { IconLeft, IconRight } from 'terra-icon';

import Carbon from '@cerner/carbon-graphs';

//  graph configuration object

const graphConfig = {
  bindTo: '#panning-example',
  axis: {
    x: {
      label: 'x-axis',
      lowerLimit: 80,
      upperLimit: 280,
      rangeRounding: false,
    },
    y: {
      label: 'y-axis',
      lowerLimit: -5,
      upperLimit: 20,
    },
  },
  panning: {
    enabled: true,
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
let graph;
const panningFactor = 10;

const PanningExample = () => {
  React.useEffect(() => {
    graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset1));
  }, []);

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
        return {
          newLowerLimit,
          newUpperLimit,
        };
    }

    return {
      newLowerLimit,
      newUpperLimit,
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, panningFactor);

  React.useLayoutEffect(() => {
    if (!graph) { return; }

    graph.config.axis.x.lowerLimit = panState.newLowerLimit;
    graph.config.axis.x.upperLimit = panState.newUpperLimit;

    graph.reflowMultipleDatasets();
  }, [panState]);

  return (
    <>
      <Button icon={<IconLeft />} isIconOnly onClick={() => dispatch({ type: 'panLeft' })} />
      <Button icon={<IconRight />} isIconOnly onClick={() => dispatch({ type: 'panRight' })} />
      <div id="panning-example" />
    </>
  );
};

export default PanningExample;
