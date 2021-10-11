import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefault';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset1';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset2NoLegend';
import exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset3';

const graphConfig = utils.deepClone(getGraphConfig('#legendHidden'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
  utils.deepClone(exampleData3),
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="legendHidden" graphConfig={graphConfig} dataset={dataset} />
  </>
);
