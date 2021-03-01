import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import { tickValues } from '../../../../../../carbon-graphs/dev/examples/controls/line';
import {
  loadPopup,
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#staticXAxisTicks', 'LINE_TIMESERIES'));
axisData.axis.x.ticks = {
    values: tickValues,
    format: '%H:%M:%S',
  };
const data = axisData.data[0];
data.onClick = loadPopup;
const dataArray = [data];

export default () => <LineGraph graphID="staticXAxisTicks" graphConfig={axisData} dataset={dataArray} />;
