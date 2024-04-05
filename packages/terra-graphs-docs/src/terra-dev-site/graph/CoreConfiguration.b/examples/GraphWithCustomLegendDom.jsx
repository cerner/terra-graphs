/* eslint-disable react/forbid-dom-props */
import React from 'react';
import Carbon from '@cerner/carbon-graphs';

//  graph configuration object

const graphConfig = {
  bindTo: '#custom-legend-graph',
  bindLegendTo: '#custom-legend-node',
  axis: {
    x: {
      label: 'x axis',
      lowerLimit: 80,
      upperLimit: 280,
    },
    y: {
      label: 'y axis',
      lowerLimit: -18,
      upperLimit: 18,
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

const CustomLegendDomExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset1));
  }, []);
  return (
    <div id="custom-legend-example" style={{ display: 'flex', width: '100%' }}>
      <div id="custom-legend-node" style={{ width: '20%' }} />
      <div style={{ width: '80%' }}>
        <div id="custom-legend-graph" />
      </div>
    </div>
  );
};

export default CustomLegendDomExample;
