import React from 'react';
import Carbon from '../../../../../../carbon-graphs/src/js/carbon';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#simpleSpline', 'LINE_TIMESERIES'));
const data = axisData.data[0];
data.type = Carbon.helpers.LINE_TYPE.SPLINE;
const dataArray = [data];

export default () => <LineGraph graphID="simpleSpline" graphConfig={axisData} dataset={dataArray} />;
