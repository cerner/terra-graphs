import React, { Component } from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const colorData = utils.deepClone(getDemoData('#backgroundColor', 'LINE_DEFAULT'));
const data = colorData.data[0];
data.onClick = loadPopup;

export default () => (
    <div style={{ backgroundColor: '#176ba0' }}>
      <LineGraph graphID="backgroundColor" graphConfig={colorData} dataset={data} />
    </div>
);
