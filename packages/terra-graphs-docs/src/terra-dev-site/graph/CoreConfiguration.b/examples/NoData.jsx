import React from 'react';
import Carbon from '@cerner/carbon-graphs';

const graphConfig = {
  bindTo: '#no-data-example',
  bindLegendTo: null,
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
  showLabel: true,
  showLegend: true,
  showShapes: true,
  showVGrid: true,
  showHGrid: true,
};

const NoDataGeneralExample = () => {
  React.useEffect(() => {
    Carbon.api.graph(graphConfig);
  }, []);
  return <div id="no-data-example" />;
};

export default NoDataGeneralExample;
