import React from 'react';
import getDemoData from '../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../components/Line/LineGraph';
import utils from '../../../../../carbon-graphs/src/js/helpers/utils';

const axisData = utils.deepClone(getDemoData('#nodata', 'NO_DATA_VIEW'));

export default () => <LineGraph graphID="nodata" graphConfig={axisData} dataset={[axisData.data[0]]} />;

