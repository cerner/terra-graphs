import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import {
  loadPopup
} from '../../../helpers/popup';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(
  getDemoData('#graphContainer', 'LINE_TIMESERIES'),
);
axisData.bindLegendTo = '#legendContainer';

const data = axisData.data[0];
data.onClick = loadPopup;

const data1 = axisData.data[2];
data1.onClick = loadPopup;

export default () => (
  <div id="customLegendPlacement">
    <div className="bindto-container">
      <div id="legendContainer" className="legend-bindto-container" />
      <div id="graphContainer" className="legend-bindto-graph-container" />
    </div>
    <LineGraph graphID="graphContainer" graphConfig={axisData} dataset={[data, data1]} />
  </div>
);
