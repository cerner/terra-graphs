import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#legendItemDisable', 'LINE_DEFAULT'));

const data = axisData.data[0];
data.label.isDisabled = true;
data.onClick = loadPopup;

const data1 = axisData.data[4];
data1.onClick = loadPopup;

export default () => <LineGraph graphID="legendItemDisable" graphConfig={axisData} dataset={[data, data1]} />;
