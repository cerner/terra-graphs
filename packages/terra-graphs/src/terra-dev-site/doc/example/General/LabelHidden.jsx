import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#labelHidden', 'LINE_DEFAULT'));
axisData.showLabel = false;

const data = axisData.data[0];
const dataArray = [data];

export default () => <LineGraph graphID="labelHidden" graphConfig={axisData} dataset={dataArray} />;

