import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#noUpperBound'));
const contentData = utils.deepClone(data);
contentData.regions = [
  {
    start: 2,
  },
];
const dataArray = [contentData];

export default () => <LineGraph graphID="noUpperBound" graphConfig={graphConfig} dataset={dataArray} />;

