import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Bar/BarGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import barTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barTimeseries';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/timeseriesData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(barTimeseries('#timeseriesBarWithEventline'));

graphConfig.eventline = [
  {
    color: Carbon.helpers.COLORS.GREY,
    style: {
      strokeDashArray: '4,4',
    },
    value: new Date(2017, 12, 2).toISOString(),
  },
  {
    color: Carbon.helpers.COLORS.BLACK,
    style: {
      strokeDashArray: '2,2',
    },
    value: new Date(2017, 12, 3).toISOString(),
  },
];
graphConfig.clickPassThrough = {
  dateline: false,
};
graphConfig.showVGrid = false;
const dataset = utils.deepClone(exampleData);

export default () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.bar(data));
    });
  }, []);

  return (
    <ExampleGraphContainer id="timeseriesBarWithEventline" />
  );
};
