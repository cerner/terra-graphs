import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';

import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';

const id = 'no-data';

const graphConfig = {
  bindTo: `#${id}`,
  bindLegendTo: null,
  axis: {
    x: {
      show: true,
      label: 'Data',
      lowerLimit: 80,
      upperLimit: 280,
    },
    y: {
      show: true,
      label: 'Line Set A',
      lowerLimit: -18,
      upperLimit: 18,
    },
    y2: {
      show: false,
      label: 'Line Set B',
      lowerLimit: 0,
      upperLimit: 250,
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
  return <ExampleGraphContainer id={id} />;
};

export default NoDataGeneralExample;
