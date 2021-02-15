
import React from 'react';
import { getDemoData } from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'

const axisData = utils.deepClone(getDemoData(`#supressTickValue`, 'LINE_DECIMAL_AXES_VALUES'));
axisData.axis.x.suppressTrailingZeros = true;
axisData.axis.y.suppressTrailingZeros = true;
axisData.axis.y2.suppressTrailingZeros = true;

export default () => <LineGraph graphID="supressTickValue" graphConfig={ axisData } dataset={ [ axisData.data[0], axisData.data[1] ] }/>
