import React from 'react';
import ScatterGraph from '@cerner/terra-graphs/lib/components/Scatter/ScatterGraph';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#timeseriesEventLine'));
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
    <ScatterGraph graphID="timeseriesEventLine" graphConfig={graphConfig} dataset={dataset} />
  </>
);
