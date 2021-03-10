import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#timeseriesEventLine', 'LINE_TIMESERIES'));
axisData.eventline = [
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

const data = axisData.data[0];
const dataArray = [data];

export default () => <LineGraph graphID="timeseriesEventLine" graphConfig={axisData} dataset={dataArray} />;
