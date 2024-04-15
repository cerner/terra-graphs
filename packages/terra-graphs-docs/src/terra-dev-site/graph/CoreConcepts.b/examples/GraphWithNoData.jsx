import React from 'react';
import Carbon from '@cerner/carbon-graphs';

//  graph configuration object

const graphConfig = {
  bindTo: '#no-data-example',
  bindLegendTo: null,
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

// graph rendering

const NoDataGeneralExample = () => {
  React.useEffect(() => {
    Carbon.api.graph(graphConfig);
  }, []);
  return <div id="no-data-example" />;
};

export default NoDataGeneralExample;
