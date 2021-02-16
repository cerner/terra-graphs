
import React from 'react';
import  getDemoData from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'

const axisData = utils.deepClone(getDemoData('#labelHidden', 'LINE_DEFAULT'));
axisData.showLabel = false;

export default () => <LineGraph graphID="labelHidden" graphConfig={ axisData } dataset={ getDemoData('#labelHidden', 'LINE_DEFAULT').data[0]  }/>


 