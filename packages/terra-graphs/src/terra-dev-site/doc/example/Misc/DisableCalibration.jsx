
import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'

const axisData = utils.deepClone(getDemoData(`#disableCalibration`, 'LINE_DEFAULT'));
axisData.allowCalibration = false;

export default () => <LineGraph graphID="disableCalibration" graphConfig={ axisData } dataset={ axisData.data[6]  }/>


 