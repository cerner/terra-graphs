import React from 'react';
import getDemoData from '../../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../../components/LineGraph';
import utils from '../../../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#valueRegion', 'LINE_TIMESERIES'));
const data = axisData.data[4];
const dataArray = [data];

export default () => <LineGraph graphID="valueRegion" graphConfig={axisData} dataset={dataArray} />;

