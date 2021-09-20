import React from 'react';
import ScatterGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Scatter/ScatterGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';

/*
Please refer to the documentation below to see the graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#timeseriesScatterGraph'));
const dataset = utils.deepClone(data);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <ScatterGraph graphID="timeseriesScatterGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
