import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#regionLine', 'LINE_DEFAULT'));
const data = axisData.data[5];
data.regions = [
  {
    start: 15,
    end: 15,
    color: '#bcbfc0',
  },
];
const dataArray = [data];

export default () => <LineGraph graphID="regionLine" graphConfig={axisData} dataset={dataArray} />;

