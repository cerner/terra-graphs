import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/multiLineData';

const graphConfig = utils.deepClone(lineDefault('#multiLine'));
const timeoutArray = [0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6];
const dataset = utils.deepClone(data);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="multiLine" graphConfig={graphConfig} dataset={dataset} timeout={timeoutArray} />
  </>
);
