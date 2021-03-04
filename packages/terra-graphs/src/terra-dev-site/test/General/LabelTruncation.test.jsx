import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#labelTruncation', 'LABEL_TRUNCATION'));

const data = axisData.data[0];
const dataArray = [data];

export default () => <LineGraph graphID="labelTruncation" graphConfig={axisData} dataset={dataArray} />;

