import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#dashedLine', 'LINE_DEFAULT'));
const dataArray = [axisData.data[1]];

export default () => <LineGraph graphID="dashedLine" graphConfig={axisData} dataset={dataArray} />;

