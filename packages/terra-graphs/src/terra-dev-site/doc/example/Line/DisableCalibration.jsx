import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#disableCalibration', 'LINE_DEFAULT'));
axisData.allowCalibration = false;
const data = axisData.data[6];
data.onClick = loadPopup;

export default () => <LineGraph graphID="disableCalibration" graphConfig={axisData} dataset={[data]} />;

