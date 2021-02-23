import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/Line/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../helpers/popup';
import '../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#lineY2Axis', 'LINE_TIMESERIES'));
axisData.axis.y2.show = true;

const data = axisData.data[0];
data.onClick = loadPopup;
const data1 = axisData.data[1];
data1.onClick = loadPopup;

export default () => <LineGraph graphID="lineY2Axis" graphConfig={axisData} dataset={[data, data1]} />;
