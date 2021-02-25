import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/Line/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../helpers/popup';
import '../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#multiLine', 'LINE_DEFAULT'));
axisData.axis.y2.show = true;

const data = axisData.data[0];
data.onClick = loadPopup;

const data1 = axisData.data[1];
data1.onClick = loadPopup;

const data2 = axisData.data[2];
data2.onClick = loadPopup;

const data3 = axisData.data[3];
data3.onClick = loadPopup;

const data4 = axisData.data[4];
data4.onClick = loadPopup;

const data5 = axisData.data[5];
data5.onClick = loadPopup;

const data6 = axisData.data[6];
data6.onClick = loadPopup;

const dataArray = [data, data1, data2, data3, data4, data5, data6];
const timeArray = [0, 750, 750*2, 750*3, 750*4, 750*5, 750*6]

export default () => <LineGraph graphID="multiLine" graphConfig={axisData} dataset={dataArray} timeOut={timeArray} />;