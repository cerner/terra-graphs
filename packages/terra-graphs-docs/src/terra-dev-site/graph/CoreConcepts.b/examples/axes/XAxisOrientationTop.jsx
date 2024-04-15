import React from 'react';
import Carbon from '@cerner/carbon-graphs';

//  graph configuration object

const graphConfig = {
  bindTo: '#x-axis-orientation-top-example',
  axis: {
    x: {
      label: 'x-axis',
      lowerLimit: 100,
      upperLimit: 200,
      orientation: Carbon.helpers.AXES_ORIENTATION.X.TOP,
    },
    y: {
      show: true,
      label: 'y-axis',
      lowerLimit: -5,
      upperLimit: 20,
    },
  },
};
// graph rendering

const YAxisHiddenExample = () => {
  React.useEffect(() => {
    Carbon.api.graph(graphConfig);
  }, []);
  return <div id="x-axis-orientation-top-example" />;
};

export default YAxisHiddenExample;
