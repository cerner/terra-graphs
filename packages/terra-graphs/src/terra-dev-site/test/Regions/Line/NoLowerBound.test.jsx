import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#noLowerBound'));
const contentData = utils.deepClone(data);
contentData.regions = [
  {
    end: 10,
  },
];
const dataArray = [contentData];

export default () => <LineGraph graphID="noLowerBound" graphConfig={graphConfig} dataset={dataArray} />;

