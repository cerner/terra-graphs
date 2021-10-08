import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1critical';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset3critical';
import exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset4critical';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getLineDefaultConfig('#criticalityMultiLine'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
  utils.deepClone(exampleData3),
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="criticalityMultiLine" graphConfig={graphConfig} dataset={dataset} />
  </>
);
