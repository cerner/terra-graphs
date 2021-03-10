import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#simpleLinegraph', 'LINE_TIMESERIES'));
const data = axisData.data[2];
const dataArray = [data];

export default () => <LineGraph graphID="simpleLinegraph" graphConfig={axisData} dataset={dataArray} />;
