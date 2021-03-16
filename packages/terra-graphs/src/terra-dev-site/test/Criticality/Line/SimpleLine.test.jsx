import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#criticalitySimpleLine', 'LINE_TIMESERIES'));

data.values[0].isCritical = true;
data.values[10].isCritical = true;
const dataArray = [data];

export default () => <LineGraph graphID="criticalitySimpleLine" graphConfig={graphConfig} dataset={dataArray} />;

