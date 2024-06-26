import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getLineDefaultY2Config from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultY2';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions1';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions2';
import exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions3';
import exampleData4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions13';

const graphConfig = utils.deepClone(getLineDefaultY2Config('#multipleline'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
  utils.deepClone(exampleData3),
  utils.deepClone(exampleData4),
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="multipleline" graphConfig={graphConfig} dataset={dataset} />
  </>
);
