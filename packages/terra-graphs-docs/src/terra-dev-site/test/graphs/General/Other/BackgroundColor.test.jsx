import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#backgroundColor'));
const dataset = utils.deepClone(data);

export default () => (
  <div className="background-color-class">
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="backgroundColor" graphConfig={graphConfig} dataset={dataset} />
  </div>
);
