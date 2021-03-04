import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#timeseriesDateLine', 'LINE_TIMESERIES_DATELINE'));
const data = axisData.data[0];
const dataArray = [data];

export default () => <LineGraph graphID="timeseriesDateLine" graphConfig={axisData} dataset={dataArray} />;
