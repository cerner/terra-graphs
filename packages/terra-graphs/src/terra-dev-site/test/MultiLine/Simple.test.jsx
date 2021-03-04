import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#multiLine', 'LINE_DEFAULT'));
axisData.axis.y2.show = true;

const data = axisData.data[0];
const data1 = axisData.data[1];
const data2 = axisData.data[2];
const data3 = axisData.data[3];
const data4 = axisData.data[4];
const data5 = axisData.data[5];
const data6 = axisData.data[6];
const dataArray = [data, data1, data2, data3, data4, data5, data6];
const timeArray = [0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6];

export default () => <LineGraph graphID="multiLine" graphConfig={axisData} dataset={dataArray} timeout={timeArray} />;
