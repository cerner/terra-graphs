import React from 'react';
import getDemoData from '../../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../../components/Line/LineGraph';
import utils from '../../../../../../../carbon-graphs/src/js/helpers/utils';
import { regions } from '../../../../../../../carbon-graphs/dev/examples/controls/line';
import {
  loadPopup,
} from '../../../../helpers/popup';
import '../../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#regionLine', 'LINE_DEFAULT'));
const data = axisData.data[5];
data.regions = [
  {
    start: 15,
    end: 15,
    color: '#bcbfc0',
  },
];
data.onClick = loadPopup;

export default () => <LineGraph graphID="regionLine" graphConfig={axisData} dataset={[data]} />;
