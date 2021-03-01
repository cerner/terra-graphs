import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#simpleLinegraph', 'LINE_TIMESERIES'));
const data = axisData.data[2];
data.onClick = loadPopup;

export default () => <LineGraph graphID="simpleLinegraph" graphConfig={axisData} dataset={[data]} />;
