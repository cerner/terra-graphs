import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';

const axisData = utils.deepClone(getDemoData('#y2Region', 'LINE_TIMESERIES'));
axisData.axis.y2.show = true;
const dataValueObject = axisData.data[1];
dataValueObject.regions = [
  {
    axis: 'y2',
    start: 50,
    end: 150,
  },
];

const dataAlt = axisData.data[0];
const dataArray = [dataValueObject, dataAlt];

export default () => <LineGraph graphID="y2Region" graphConfig={axisData} dataset={dataArray} />;

