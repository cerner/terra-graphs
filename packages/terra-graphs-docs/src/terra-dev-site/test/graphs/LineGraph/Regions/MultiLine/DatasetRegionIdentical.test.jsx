import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getLineDefaultY2Config from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions1';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions8';
import exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions9';

const graphConfig = utils.deepClone(getLineDefaultY2Config('#datasetRegionIdentical'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
  utils.deepClone(exampleData3),
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="datasetRegionIdentical" graphConfig={graphConfig} dataset={dataset} />
  </>
);
