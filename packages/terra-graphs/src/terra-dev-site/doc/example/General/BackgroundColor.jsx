import React, { Component } from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const colorData = utils.deepClone(getDemoData('#backgroundColor', 'LINE_DEFAULT'));
const data = colorData.data[0];
const dataArray = [data];
export default () => (
  <div style={{ backgroundColor: '#176ba0' }}>
    <LineGraph graphID="backgroundColor" graphConfig={colorData} dataset={dataArray} />
  </div>
);
