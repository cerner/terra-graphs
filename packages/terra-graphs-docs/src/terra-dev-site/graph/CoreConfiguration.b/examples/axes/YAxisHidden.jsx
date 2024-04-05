import React from 'react';
import Carbon from '@cerner/carbon-graphs';

//  graph configuration object

const graphConfig = {
  bindTo: '#y-axis-hidden-example',
  axis: {
    x: {
      // show is true by default
      // show: true,
      label: 'x-axis',
      lowerLimit: 100,
      upperLimit: 200,
      allowCalibration: true,
    },
    y: {
      show: false,
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

const YAxisHiddenExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset1));
  }, []);
  return <div id="y-axis-hidden-example" />;
};

export default YAxisHiddenExample;
