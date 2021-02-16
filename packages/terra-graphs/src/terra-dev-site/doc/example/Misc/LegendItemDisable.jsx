import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'

const data = utils.deepClone(getDemoData('legendItemDisable', 'LINE_DEFAULT').data[0]);
data.label.isDisabled = true;

export default () => <LineGraph graphID="legendItemDisable" graphConfig={ getDemoData('#legendItemDisable', 'LINE_DEFAULT')} dataset={ [ data, getDemoData('#legenditemDiable', 'LINE_DEFAULT').data[4]] }/>