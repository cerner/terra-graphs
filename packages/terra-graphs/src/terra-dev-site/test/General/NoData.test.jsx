import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';

const axisData = utils.deepClone(getDemoData('#nodata', 'NO_DATA_VIEW'));
const dataArray = [axisData.data[0]];

export default () => <LineGraph graphID="nodata" graphConfig={axisData} dataset={dataArray} />;

