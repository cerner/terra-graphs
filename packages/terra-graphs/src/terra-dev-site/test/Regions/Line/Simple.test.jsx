import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/simpleLineData';

const regions = [
    {
      axis: 'y',
      start: 2,
      end: 10,
      color: '#f4f4f4',
    }
  ];

const graphConfig = utils.deepClone(lineDefault('#simpleRegionLine'));
const contentData = utils.deepClone(data);
contentData.regions = [regions[0]];
const dataArray = [contentData];

export default () => <LineGraph graphID="simpleRegionLine" graphConfig={graphConfig} dataset={dataArray} />;
