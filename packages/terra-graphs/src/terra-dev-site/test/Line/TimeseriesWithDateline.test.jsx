import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadDatelinePopup,
  loadPopup,
} from '../../helpers/popup';
import '../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#timeseriesDateLine', 'LINE_TIMESERIES_DATELINE'));
axisData.dateline[0].onClick = loadDatelinePopup;

const data = axisData.data[0];
data.onClick = loadPopup;
const dataArray = [data]

export default () => <LineGraph graphID="timeseriesDateLine" graphConfig={axisData} dataset={dataArray} />;
