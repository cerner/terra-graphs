import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterTimeseriesEventline';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1timeseries';

/*
Please refer documentation below to see graphConfig and data objects.
*/

const graphConfig = utils.deepClone(getGraphConfig('#timeseriesEventLine'));
const dataset = utils.deepClone(exampleData);

const TimelineWithEventlineScatterExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.scatter(dataset));
  }, []);
  return (
    <ExampleGraphContainer id="timeseriesEventLine" />
  );
};

export default TimelineWithEventlineScatterExample;
