import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import lineTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineTimeseries('#timeseriesEventLine'));
graphConfig.eventline = [
  {
    color: Carbon.helpers.COLORS.GREY,
    style: {
      strokeDashArray: '4,4',
    },
    value: new Date(2016, 0, 1, 8).toISOString(),
  },
  {
    color: Carbon.helpers.COLORS.BLACK,
    style: {
      strokeDashArray: '2,2',
    },
    value: new Date(2016, 0, 1, 12).toISOString(),
  },
];
const dataset = utils.deepClone(exampleData);

const TimeseriesEventlineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.line(data));
    });
  }, []);
  return (
    <ExampleGraphContainer id="timeseriesEventLine" />
  );
};

export default TimeseriesEventlineExample;

