import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import '../../../../css/Dev.module.scss';

const axisData = getDemoData('#nodata', 'NO_DATA_VIEW');
const dataArray = [axisData.data[0]];

export default () => <LineGraph graphID="nodata" graphConfig={axisData} dataset={dataArray} />;

