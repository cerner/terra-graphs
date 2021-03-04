import React from 'react';
import Carbon from '../../../../../../../carbon-graphs/src/js/carbon';
import getDemoData from '../../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../../components/LineGraph';
import utils from '../../../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#xAxisOrientationTop', 'LINE_DEFAULT'));
axisData.axis.x.orientation = Carbon.helpers.AXES_ORIENTATION.X.TOP;
const data = axisData.data[0];
const dataArray = [data];

export default () => <LineGraph graphID="xAxisOrientationTop" graphConfig={axisData} dataset={dataArray} />;
