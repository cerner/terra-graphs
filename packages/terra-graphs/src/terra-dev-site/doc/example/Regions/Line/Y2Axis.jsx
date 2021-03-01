import React from 'react';
import getDemoData from '../../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../../components/LineGraph';
import utils from '../../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup,
} from '../../../../helpers/popup';
import '../../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#y2Region', 'LINE_TIMESERIES'));
axisData.axis.y2.show = true;
const dataValueObject = axisData.data[1];
dataValueObject.regions = [
  {
    axis: 'y2',
    start: 50,
    end: 150,
  },
];
dataValueObject.onClick = loadPopup;

const dataAlt = axisData.data[0];
dataAlt.onClick = loadPopup;

export default () => <LineGraph graphID="y2Region" graphConfig={axisData} dataset={[dataValueObject, dataAlt]} />;

