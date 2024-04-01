import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterDefaultY2';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset2';

/*
Please refer documentation below to see graphConfig and data objects.
*/

const graphConfig = utils.deepClone(getGraphConfig('#scatterY2Axis'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
];

const Y2AxisScatterExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.scatter(data));
    });
  }, []);
  return (
    <ExampleGraphContainer id="scatterY2Axis" />
  );
};

export default Y2AxisScatterExample;
