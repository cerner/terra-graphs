import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import { regions } from '../../../../../../carbon-graphs/dev/examples/controls/line';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#simpleRegionLine', 'LINE_DEFAULT'));
const data = axisData.data[0];
data.regions = [regions[0]];
const dataArray = [data];

export default () => <LineGraph graphID="simpleRegionLine" graphConfig={axisData} dataset={dataArray} />;

