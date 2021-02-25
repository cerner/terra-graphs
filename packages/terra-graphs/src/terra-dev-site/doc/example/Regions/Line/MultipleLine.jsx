import React from 'react';
import getDemoData from '../../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../../components/Line/LineGraph';
import utils from '../../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../../helpers/popup';
import '../../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#multipleline', 'LINE_DEFAULT'));
const data = axisData.data[0];
data.onClick = loadPopup;
data.regions = [
  {
    start: 2,
  },
];

const dataAlt = axisData.data[2];
dataAlt.onClick = loadPopup;
dataAlt.regions = [
  {
    start: 2,
    end: 14,
  },
];

const data1 = axisData.data[4];
data1.onClick = loadPopup;

const data2 = axisData.data[3];
data2.onClick = loadPopup;

export default () => <LineGraph graphID="multipleline" graphConfig={axisData} dataset={[data, dataAlt, data1, data2]} />;

