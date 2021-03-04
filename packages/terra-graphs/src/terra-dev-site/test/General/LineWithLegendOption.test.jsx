import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#lineWithLegendOption', 'LINE_DEFAULT'));

const data = axisData.data[3];
const data1 = axisData.data[4];
const dataArray = [axisData.data[1], data, data1];

export default () => <LineGraph graphID="lineWithLegendOption" graphConfig={axisData} dataset={dataArray} />;

