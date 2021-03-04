import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#supressTickValue', 'LINE_DECIMAL_AXES_VALUES'));
axisData.axis.x.suppressTrailingZeros = true;
axisData.axis.y.suppressTrailingZeros = true;
axisData.axis.y2.suppressTrailingZeros = true;

const data = axisData.data[0];
const data1 = axisData.data[1];
const dataArray = [data, data1];

export default () => <LineGraph graphID="supressTickValue" graphConfig={axisData} dataset={dataArray} />;
