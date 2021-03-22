import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/multiRegionData';

const regions = [
  {
    axis: 'y',
    start: 2,
    end: 10,
    color: '#f4f4f4',
  },
  {
    axis: 'y',
    start: 12,
    end: 18,
    color: '#c8cacb',
  },
];
const graphConfig = utils.deepClone(lineDefault('#multipleRegions'));
const contentData = utils.deepClone(data);
contentData.regions = regions;
const dataArray = [contentData];

export default () => <LineGraph graphID="multipleRegions" graphConfig={graphConfig} dataset={dataArray} />;
