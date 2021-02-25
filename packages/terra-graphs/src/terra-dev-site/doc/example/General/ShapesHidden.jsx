import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#shapesHidden', 'LINE_DEFAULT'));
axisData.showShapes = false;

export default () => <LineGraph graphID="shapesHidden" graphConfig={axisData} dataset={[axisData.data[0]]} />;
