
import React from 'react';
import { getDemoData } from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'

const axisData = utils.deepClone(getDemoData('#lineY2Axis', 'LINE_TIMESERIES'));
axisData.axis.y2.show = true;

export default () => <LineGraph graphID="lineY2Axis" graphConfig={ axisData } dataset={ [ getDemoData('#lineY2Axis', 'LINE_TIMESERIES').data[0], getDemoData('#lineY2Axis', 'LINE_TIMESERIES').data[1] ]  }/>
