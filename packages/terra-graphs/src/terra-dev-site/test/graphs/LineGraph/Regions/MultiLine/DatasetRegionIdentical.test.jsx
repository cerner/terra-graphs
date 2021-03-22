import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/defaultMultiLineData';

const graphConfig = utils.deepClone(lineDefault('#datasetRegionIdentical'));
const contentData = utils.deepClone(data[0]);
contentData.regions = [
  {
    start: 2,
    end: 14,
  },
];

const contentData1 = utils.deepClone(data[1]);
contentData1.regions = [
  {
    start: 2,
    end: 14,
  },
];

const contentData2 = utils.deepClone(data[2]);
contentData2.regions = [
  {
    start: 2,
    end: 14,
  },
];
const dataArray = [contentData, contentData1, contentData2];

export default () => <LineGraph graphID="datasetRegionIdentical" graphConfig={graphConfig} dataset={dataArray} />;

