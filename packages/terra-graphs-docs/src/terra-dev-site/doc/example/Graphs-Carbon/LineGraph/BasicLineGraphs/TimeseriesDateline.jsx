import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';
import {
  loadDatelinePopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineTimesries('#timeseriesDateLine'));
graphConfig.dateline = [
  {
    showDatelineIndicator: true,
    label: {
      display: 'Current Date',
    },
    color: '#C97318',
    shape: Carbon.helpers.SHAPES.DARK.SQUARE,
    onClick: loadDatelinePopup,
    value: new Date(2016, 0, 1, 6).toISOString(),
  },
];
const dataset = utils.deepClone(exampleData);

const TimeseriesDatelineLineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.line(data));
    });
  }, []);
  return (
    <ExampleGraphContainer id="timeseriesDateLine" />
  );
};

export default TimeseriesDatelineLineExample;

