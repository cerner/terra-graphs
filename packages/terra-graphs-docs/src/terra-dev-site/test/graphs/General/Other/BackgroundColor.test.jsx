import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset1';

const graphConfig = utils.deepClone(getGraphConfig('#backgroundColor'));
const dataset = utils.deepClone(exampleData);

export default () => (
  <div className="background-color-class">
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="backgroundColor" graphConfig={graphConfig} dataset={dataset} />
  </div>
);
