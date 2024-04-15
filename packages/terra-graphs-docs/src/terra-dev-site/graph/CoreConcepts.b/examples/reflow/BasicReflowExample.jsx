import React from 'react';

import Button from 'terra-button';

import Carbon from '@cerner/carbon-graphs';

//  graph configuration object

const graphConfig = {
  bindTo: '#basic-reflow-example',
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
  allowCalibration: false,
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

const BasicReflowExample = () => {
  React.useEffect(() => {
    graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset1));
  }, []);

  const handleClick = () => {
    if (!graph) { return; }



    // graph.config.axis.y.lowerLimit = -50;
    // graph.config.axis.y.upperLimit = 20;

    graph.config.axis.y.lowerLimit = -50;


    // graph.config.allowCalibration = !graph.config.allowCalibration;

    graph.reflowMultipleDatasets();
  };

  return (
    <>
      <Button text="Toggle Calibration" onClick={handleClick} />
      <div id="basic-reflow-example" />
    </>
  );
};

export default BasicReflowExample;
