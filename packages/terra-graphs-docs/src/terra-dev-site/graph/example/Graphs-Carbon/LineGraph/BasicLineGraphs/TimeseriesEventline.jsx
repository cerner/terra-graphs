import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getLineTimeseriesDatelineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesEventline';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getLineTimeseriesDatelineConfig('#timeseriesEventLine'));
const dataset = utils.deepClone(exampleData);

const TimeseriesEventlineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset));
  }, []);

  return (
    <ExampleGraphContainer id="timeseriesEventLine" />
  );
};

export default TimeseriesEventlineExample;

