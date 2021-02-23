import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/Line/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../css/Dev.module.scss';
import {
  loadPopup,
} from '../../helpers/popup';

const colorData = utils.deepClone(getDemoData('#backgroundColor', 'LINE_DEFAULT'));
const data = colorData.data[0];
data.onClick = loadPopup;

export default () => (
  <div>
    <div style={{ backgroundColor: '#176ba0' }}>
      <LineGraph graphID="backgroundColor" graphConfig={colorData} dataset={[data]} />
    </div>
  </div>
);
