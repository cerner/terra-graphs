import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/Line/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#shapesHidden', 'LINE_DEFAULT'));
axisData.showShapes = false;
const dataArray = [axisData.data[0]];

export default () => <LineGraph graphID="shapesHidden" graphConfig={axisData} dataset={dataArray} />;
