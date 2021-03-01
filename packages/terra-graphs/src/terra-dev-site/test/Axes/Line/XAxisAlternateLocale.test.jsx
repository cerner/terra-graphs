import React from 'react';
import Carbon from '../../../../../../carbon-graphs/src/js/carbon';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import { tickValues } from '../../../../../../carbon-graphs/dev/examples/controls/line';
import {
  loadPopup,
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#xAxisAlternateLocale', 'LINE_TIMESERIES'));
axisData.locale = Carbon.helpers.LOCALE.de_DE;
axisData.axis.x.ticks = {
  values: tickValues,
  format: '%A %e %B %Y, %X',
};
const data = axisData.data[0];
data.onClick = loadPopup;
const dataArray = [data];

export default () => <LineGraph graphID="xAxisAlternateLocale" graphConfig={axisData} dataset={dataArray} />;
