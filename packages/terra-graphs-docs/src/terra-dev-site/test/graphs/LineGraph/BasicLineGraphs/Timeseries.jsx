import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineTimesries('#lineTimeseries'));
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="lineTimeseries" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
