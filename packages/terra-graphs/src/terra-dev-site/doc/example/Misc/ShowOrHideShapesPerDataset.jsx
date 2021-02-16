
import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'

const axisData = utils.deepClone(getDemoData(`#showOrHideShapesPerDataset`, 'LINE_DEFAULT'));

export default () => <LineGraph graphID="showOrHideShapesPerDataset" graphConfig={ axisData } dataset={ [ axisData.data[1], axisData.data[3], axisData.data[4] ] }/>