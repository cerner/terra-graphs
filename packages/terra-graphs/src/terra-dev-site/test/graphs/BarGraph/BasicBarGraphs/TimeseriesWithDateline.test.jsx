import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import barTimeseries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Bar/barTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Bar/timeseriesData';
import {
  loadDatelinePopup,
} from '@cerner/carbon-graphs/dev/examples/popup';
/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(barTimeseries('#timeseriesBarWithDateline'));

graphConfig.dateline = [
  {
    showDatelineIndicator: true,
    label: {
      display: 'Action Date',
    },
    color: '#C97318',
    shape: Carbon.helpers.SHAPES.SQUARE,
    onClick: loadDatelinePopup,
    value: new Date(2017, 12, 2).toISOString(),
  },
];
graphConfig.clickPassThrough = {
  dateline: false,
};
graphConfig.showVGrid = false;
const dataset = utils.deepClone(data);

export default () => <BarGraph graphID="timeseriesBarWithDateline" graphConfig={graphConfig} dataset={dataset} />;
