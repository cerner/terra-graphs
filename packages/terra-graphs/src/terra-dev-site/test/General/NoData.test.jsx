import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/Line/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';

const axisData = utils.deepClone(getDemoData('#nodata', 'NO_DATA_VIEW'));
const dataArray = [axisData.data[0]];

export default () => <LineGraph graphID="nodata" graphConfig={axisData} dataset={dataArray} />;

