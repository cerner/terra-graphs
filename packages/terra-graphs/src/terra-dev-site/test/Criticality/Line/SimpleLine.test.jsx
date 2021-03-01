
import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#criticalitySimpleLine', 'LINE_TIMESERIES'));
const data = axisData.data[0];
data.onClick = loadPopup;

data.regions = [
  {
    axis: 'y',
    start: 2,
    end: 10,
  },
];

data.values[0].isCritical = true;
data.values[10].isCritical = true;
const dataArray = [data];

export default () => <LineGraph graphID="criticalitySimpleLine" graphConfig={axisData} dataset={dataArray} />;

