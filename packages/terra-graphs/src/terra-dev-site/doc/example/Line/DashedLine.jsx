import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#dashedLine', 'LINE_DEFAULT'));

export default () => <LineGraph graphID="dashedLine" graphConfig={axisData} dataset={axisData.data[1]} />;

