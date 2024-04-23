import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getLineTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions10';

const graphConfig = utils.deepClone(getLineTimeseriesConfig('#valueRegion'));
const dataset = [utils.deepClone(exampleData)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="valueRegion" graphConfig={graphConfig} dataset={dataset} />
  </>
);
