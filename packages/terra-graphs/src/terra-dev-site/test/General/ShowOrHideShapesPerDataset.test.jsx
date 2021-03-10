import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#showOrHideShapesPerDataset', 'LINE_DEFAULT'));

const data1 = axisData.data[3];
const data2 = axisData.data[4];

const dataArray = [axisData.data[1], data1, data2];

export default () => <LineGraph graphID="showOrHideShapesPerDataset" graphConfig={axisData} dataset={dataArray} />;
