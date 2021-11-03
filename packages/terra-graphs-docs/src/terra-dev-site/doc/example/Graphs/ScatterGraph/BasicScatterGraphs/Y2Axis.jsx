import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import ScatterGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Scatter/ScatterGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
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

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <ScatterGraph graphID="scatterY2Axis" graphConfig={graphConfig} dataset={dataset} />
  </>
);
