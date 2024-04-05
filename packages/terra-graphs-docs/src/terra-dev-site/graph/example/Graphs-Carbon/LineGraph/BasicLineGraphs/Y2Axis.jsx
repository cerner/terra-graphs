import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getLineTimeseriesY2Config from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesY2';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries2';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getLineTimeseriesY2Config('#lineY2Axis'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
];

const Y2AxisLineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.line(data));
    });
  }, []);

  return (
    <ExampleGraphContainer id="lineY2Axis" />
  );
};

export default Y2AxisLineExample;

