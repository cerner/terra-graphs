import React from 'react';
import Carbon from '@cerner/carbon-graphs';

const graphConfig = {
  bindTo: '#custom-legend-dom-example',
  bindLegendTo: '#custom-legend-node',
  axis: {
    x: {
      show: true,
      label: 'x axis',
      lowerLimit: 80,
      upperLimit: 280,
    },
    y: {
      show: true,
      label: 'y axis',
      lowerLimit: -18,
      upperLimit: 18,
    },
  },
};

const dataset1 = {
  key: 'uid_1',
  label: {
    display: 'Data Label 1',
  },
  color: Carbon.helpers.COLORS.BLACK,
  values: [
    { x: 87, y: -2 },
    { x: 95, y: 1 },
    { x: 160, y: 0 },
    { x: 200, y: 14 },
    { x: 213, y: 11 },
    { x: 246, y: 1 },
  ],
};

const NoDataGeneralExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset1));
  }, []);
  return (
    <>
      <div id="custom-legend-node" />
      <div id="custom-legend-dom-example" />
    </>
  );
};

export default NoDataGeneralExample;
