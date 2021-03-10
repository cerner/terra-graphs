import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#shapesHidden', 'LINE_DEFAULT'));
axisData.showShapes = false;
const dataArray = [axisData.data[0]];

export default () => <LineGraph graphID="shapesHidden" graphConfig={axisData} dataset={dataArray} />;
