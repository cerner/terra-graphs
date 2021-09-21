import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineTimeseries('#timeseriesEventLine'));
graphConfig.eventline = [
  {
    color: Carbon.helpers.COLORS.GREY,
    style: {
      strokeDashArray: '4,4',
    },
    value: new Date(2016, 0, 1, 8).toISOString(),
  },
  {
    color: Carbon.helpers.COLORS.BLACK,
    style: {
      strokeDashArray: '2,2',
    },
    value: new Date(2016, 0, 1, 12).toISOString(),
  },
];
const dataset = utils.deepClone(data);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="timeseriesEventLine" graphConfig={graphConfig} dataset={dataset} />
  </>
);
