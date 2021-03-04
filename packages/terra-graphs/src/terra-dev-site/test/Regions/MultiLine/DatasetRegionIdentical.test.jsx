import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#datasetRegionIdentical', 'LINE_DEFAULT'));
const data = axisData.data[0];
data.regions = [
  {
    start: 2,
    end: 14,
  },
];

const data1 = axisData.data[2];

data1.regions = [
  {
    start: 2,
    end: 14,
  },
];

const dataArray = [data, data1];

export default () => <LineGraph graphID="datasetRegionIdentical" graphConfig={axisData} dataset={dataArray} />;

