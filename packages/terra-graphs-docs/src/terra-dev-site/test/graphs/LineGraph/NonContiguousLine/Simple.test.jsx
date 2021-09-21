import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/nonContiguousLineData';

const graphConfig = utils.deepClone(lineTimesries('#simpleLinegraph'));
const dataset = utils.deepClone(data);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="simpleLinegraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
