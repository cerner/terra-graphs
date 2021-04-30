import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import lineTimesries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/timeseriesData';
import {
  loadDatelinePopup,
} from '@cerner/carbon-graphs/dev/examples/popup';

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
const dataset = utils.deepClone(data);

export default () => <LineGraph graphID="timeseriesDateLine" graphConfig={graphConfig} dataset={dataset} />;
