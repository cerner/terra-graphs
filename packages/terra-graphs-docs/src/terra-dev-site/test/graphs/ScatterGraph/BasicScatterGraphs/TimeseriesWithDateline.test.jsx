import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import ScatterGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Scatter/ScatterGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterTimeseriesDateline';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1timeseries';

const graphConfig = utils.deepClone(getGraphConfig('#timeseriesDateLine'));
const dataset = [utils.deepClone(exampleData)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <ScatterGraph graphID="timeseriesDateLine" graphConfig={graphConfig} dataset={dataset} />
  </>
);
