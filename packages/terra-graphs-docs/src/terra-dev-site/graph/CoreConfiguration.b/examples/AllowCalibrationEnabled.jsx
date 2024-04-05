import React from 'react';
import Carbon from '@cerner/carbon-graphs';

//  graph configuration objects

const graphConfig1 = {
  bindTo: '#allow-calibration-enabled-example',
  axis: {
    x: {
      show: true,
      label: 'x-axis',
      lowerLimit: 80,
      upperLimit: 280,
    },
    y: {
      show: true,
      label: 'y-axis',
      lowerLimit: -5,
      upperLimit: 20,
    },
  },
  // allowCalibration is true by default
  // allowCalibration: true,
};

const graphConfig2 = {
  bindTo: '#allow-calibration-enabled-example2',
  axis: {
    x: {
      show: true,
      label: 'x-axis',
      lowerLimit: 80,
      upperLimit: 100,
    },
    y: {
      show: true,
      label: 'y-axis',
      lowerLimit: -5,
      upperLimit: 20,
    },
  },
  // allowCalibration is true by default
  // allowCalibration: true,
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
    { x: 160, y: -7 },
    { x: 200, y: 28 },
    { x: 213, y: 11 },
    { x: 246, y: 1 },
  ],
};

// graph rendering

const NoDataGeneralExample = () => {

  React.useEffect(() => {
    const graph1 = Carbon.api.graph(graphConfig1);
    graph1.loadContent(Carbon.api.line(dataset1));
    
    const graph2 = Carbon.api.graph(graphConfig2);
    graph2.loadContent(Carbon.api.line(dataset1));
  }, []);

  return (
    <>
      <div id="allow-calibration-enabled-example" />
      <div id="allow-calibration-enabled-example2" />
    </>
  );
};

export default NoDataGeneralExample;
