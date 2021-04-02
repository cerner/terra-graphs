import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/defaultMultiLineData';

const graphConfig = utils.deepClone(lineDefault('#multipleline'));
const contentData = utils.deepClone(data[0]);
contentData.regions = [
  {
    start: 2,
  },
];

const contentData1 = utils.deepClone(data[2]);
contentData1.regions = [
  {
    start: 2,
    end: 14,
  },
];
const dataArray = [contentData, contentData1, data[1]];

export default () => <LineGraph graphID="multipleline" graphConfig={graphConfig} dataset={dataArray} />;

