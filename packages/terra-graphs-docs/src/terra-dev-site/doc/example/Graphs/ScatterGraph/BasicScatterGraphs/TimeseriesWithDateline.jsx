import React from 'react';
import ScatterGraph from '@cerner/terra-graphs/lib/components/Scatter/ScatterGraph';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';
import {
  loadDatelinePopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#timeseriesDateLine'));
graphConfig.dateline = [
  {
    showDatelineIndicator: true,
    label: {
      display: 'Current Date',
    },
    color: '#C97318',
    shape: Carbon.helpers.SHAPES.DARK.SQUARE,
    onClick: loadDatelinePopup,
    value: new Date(2016, 0, 1, 6).toISOString(),
  },
];
graphConfig.clickPassThrough = {
  dateline: false,
};
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <ScatterGraph graphID="timeseriesDateLine" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
