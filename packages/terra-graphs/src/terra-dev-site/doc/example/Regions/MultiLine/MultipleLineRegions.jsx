import React from 'react';
import getDemoData from '../../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#multipleline', 'LINE_DEFAULT'));
const data = axisData.data[0];
data.regions = [
  {
    start: 2,
  },
];

const dataAlt = axisData.data[2];
dataAlt.regions = [
  {
    start: 2,
    end: 14,
  },
];

const data1 = axisData.data[4];
const data2 = axisData.data[3];

const dataArray = [data, dataAlt, data1, data2];

export default () => <LineGraph graphID="multipleline" graphConfig={axisData} dataset={dataArray} />;

