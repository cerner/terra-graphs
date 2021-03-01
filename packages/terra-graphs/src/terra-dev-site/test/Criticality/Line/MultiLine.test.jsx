
import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#criticalityMultiLine', 'LINE_DEFAULT'));
const data = axisData.data[0];

data.values[0].isCritical = true;
data.values[5].isCritical = true;
data.values[10].isCritical = true;
data.regions = [
  {
    start: 2,
  },
];
data.onClick = loadPopup;

const dataAlt = axisData.data[2];
dataAlt.values[6].isCritical = true;
dataAlt.values[11].isCritical = true;
dataAlt.regions = [
  {
    start: 2,
    end: 14,
  },
];
dataAlt.onClick = loadPopup;

const data2 = axisData.data[4];
data2.onClick = loadPopup;
const dataArray = [data, dataAlt, data2];

export default () => <LineGraph graphID="criticalityMultiLine" graphConfig={axisData} dataset={[data, dataAlt, data2]} />;

