
import React from 'react';
import getDemoData from '../../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../../components/LineGraph';
import utils from '../../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../../helpers/popup';
import '../../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#verticalGridHidden', 'LINE_DEFAULT'));
axisData.showVGrid = false;
const data = axisData.data[0];
data.onClick = loadPopup;
const dataArray = [data];

export default () => <LineGraph graphID="verticalGridHidden" graphConfig={axisData} dataset={dataArray} />;

