import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import getDemoData from '../../../../../../../carbon-graphs/dev/examples/data';
import { tickValues } from '../../../../../../../carbon-graphs/dev/examples/controls/line';
import '../../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#datetimeBucket', 'LINE_TIMESERIES'));
axisData.axis.x.lowerLimit = new Date(2016, 0, 0, 23, 59).toISOString();
axisData.axis.x.upperLimit = new Date(2016, 0, 2, 1, 0).toISOString();
axisData.axis.x.ticks = {
  values: tickValues,
  format: '%H',
  lowerStepTickValues: [
    new Date(2016, 0, 1, 6).toISOString(),
    new Date(2016, 0, 1, 12).toISOString(),
    new Date(2016, 0, 1, 18).toISOString(),
  ],
  midpointTickValues: [
    new Date(2016, 0, 1, 3).toISOString(),
    new Date(2016, 0, 1, 9).toISOString(),
    new Date(2016, 0, 1, 15).toISOString(),
    new Date(2016, 0, 1, 21).toISOString(),
  ],
  upperStepTickValues: [
    new Date(2016, 0, 1, 0).toISOString(),
    new Date(2016, 0, 1, 24).toISOString(),
  ],
};
const data = axisData.data[0];
const dataArray = [data];

export default () => <LineGraph graphID="datetimeBucket" graphConfig={axisData} dataset={dataArray} />;
