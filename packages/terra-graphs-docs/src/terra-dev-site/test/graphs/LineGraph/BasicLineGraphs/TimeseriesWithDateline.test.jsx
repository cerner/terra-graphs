import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';
import {
  loadDatelinePopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

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
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="timeseriesDateLine" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
