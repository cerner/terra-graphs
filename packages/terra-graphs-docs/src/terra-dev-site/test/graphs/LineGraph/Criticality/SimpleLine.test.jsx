import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1critical';

const graphConfig = utils.deepClone(getLineDefaultConfig('#criticalitySimpleLine'));
const dataset = [utils.deepClone(exampleData)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="criticalitySimpleLine" graphConfig={graphConfig} dataset={dataset} />
  </>
);
