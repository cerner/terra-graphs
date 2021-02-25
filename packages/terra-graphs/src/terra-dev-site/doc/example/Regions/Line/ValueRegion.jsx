import React from 'react';
import getDemoData from '../../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../../components/Line/LineGraph';
import utils from '../../../../../../../carbon-graphs/src/js/helpers/utils';
import { regions } from '../../../../../../../carbon-graphs/dev/examples/controls/line';
import {
  loadPopup,
} from '../../../../helpers/popup';
import '../../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#valueRegion', 'LINE_TIMESERIES'));
const data = axisData.data[4];
data.onClick = loadPopup;

export default () => <LineGraph graphID="valueRegion" graphConfig={axisData} dataset={[data]} />;

