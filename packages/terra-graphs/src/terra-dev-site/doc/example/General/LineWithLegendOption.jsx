import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#lineWithLegendOption', 'LINE_DEFAULT'));

const data = axisData.data[3];
data.onClick = loadPopup;

const data1 = axisData.data[4];
data1.onClick = loadPopup;

export default () => <LineGraph graphID="lineWithLegendOption" graphConfig={axisData} dataset={[axisData.data[1], data, data1]} />;

