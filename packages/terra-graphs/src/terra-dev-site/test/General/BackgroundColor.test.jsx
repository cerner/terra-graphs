import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../css/Dev.module.scss';

const colorData = utils.deepClone(getDemoData('#backgroundColor', 'LINE_DEFAULT'));
const data = colorData.data[0];
const dataArray = [data];

export default () => (
  <div className="backgroundColorClass">
    <LineGraph graphID="backgroundColor" graphConfig={colorData} dataset={dataArray} />
  </div>
);
