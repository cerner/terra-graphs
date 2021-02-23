import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#noUpperBound', 'LINE_DEFAULT'));
const data = axisData.data[0];
data.regions = [
  {
    start: 2,
  },
];
data.onClick = loadPopup;

export default () => <LineGraph graphID="noUpperBound" graphConfig={axisData} dataset={data} />;

