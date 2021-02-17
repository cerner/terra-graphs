import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';

const axisData = utils.deepClone(getDemoData('#shapesHidden', 'LINE_DEFAULT'));
axisData.showShapes = false;

export default () => <LineGraph graphID="shapesHidden" graphConfig={axisData} dataset={getDemoData('#shapesHidden', 'LINE_DEFAULT').data[0]} />;
