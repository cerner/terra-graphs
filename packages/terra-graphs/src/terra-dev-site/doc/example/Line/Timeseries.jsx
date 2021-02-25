import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#lineTimeseries', 'LINE_TIMESERIES'));
const data = axisData.data[0];
data.onClick = loadPopup;

export default () => <LineGraph graphID="lineTimeseries" graphConfig={axisData} dataset={[data]} />;
