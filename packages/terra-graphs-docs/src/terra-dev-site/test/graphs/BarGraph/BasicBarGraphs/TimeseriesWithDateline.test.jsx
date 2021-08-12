import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BarGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barTimeseriesDateline';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/simpleBarDataTimeseries';

const graphConfig = utils.deepClone(getBarConfig('#timeseriesBarWithDateline'));
const dataset = [utils.deepClone(data)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BarGraph graphID="timeseriesBarWithDateline" graphConfig={graphConfig} dataset={dataset} />
  </>
);
