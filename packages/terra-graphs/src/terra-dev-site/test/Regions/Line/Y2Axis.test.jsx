import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineTimesries from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries'
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/y2AxisData';

const graphConfig = utils.deepClone(lineTimesries('#y2Region'));
graphConfig.axis.y2.show = true;

const contentData = utils.deepClone(data[1])
contentData.regions = [
  {
    axis: 'y2',
    start: 50,
    end: 150,
  },
];
const dataArray = [data[0], contentData];

export default () => <LineGraph graphID="y2Region" graphConfig={graphConfig} dataset={dataArray} />;

