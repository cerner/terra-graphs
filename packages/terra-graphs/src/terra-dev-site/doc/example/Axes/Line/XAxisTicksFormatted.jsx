import React from 'react';
import getDemoData from '../../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import { tickValues } from '../../../../../../../carbon-graphs/dev/examples/controls/line';
import '../../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#xAxisTicksFormatted', 'LINE_TIMESERIES'));
axisData.axis.x.ticks = {
  values: tickValues,
  format: '%a %b %e %X %Y',
};
const data = axisData.data[0];
const dataArray = [data];

export default () => <LineGraph graphID="xAxisTicksFormatted" graphConfig={axisData} dataset={dataArray} />;
