import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import '../../../../css/Graph.module.scss';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#simpleLinegraph', 'LINE_DEFAULT'));
const data = axisData.data[0];
const dataArray = [data];

export default () => <LineGraph graphID="simpleLinegraph" graphConfig={axisData} dataset={dataArray} />;
