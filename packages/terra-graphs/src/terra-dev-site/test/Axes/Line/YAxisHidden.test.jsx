import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#yAxisHidden', 'LINE_DEFAULT'));
axisData.axis.y.show = false;
const data = axisData.data[0];
const dataArray = [data];

export default () => <LineGraph graphID="yAxisHidden" graphConfig={axisData} dataset={dataArray} />;
