import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/Line/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../helpers/popup';
import '../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#showOrHideShapesPerDataset', 'LINE_DEFAULT'));

const data1 = axisData.data[3];
data1.onClick = loadPopup;

const data2 = axisData.data[4];
data2.onClick = loadPopup;

export default () => <LineGraph graphID="showOrHideShapesPerDataset" graphConfig={axisData} dataset={[axisData.data[1], data1, data2]} />;
