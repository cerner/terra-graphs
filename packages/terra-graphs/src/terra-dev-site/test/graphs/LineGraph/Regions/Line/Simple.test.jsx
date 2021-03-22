import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/simpleLineData';
=======
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/simpleLineData';
>>>>>>> 3b63910... Made changes to folder structure

const regions = [
  {
    axis: 'y',
    start: 2,
    end: 10,
    color: '#f4f4f4',
  },
];

const graphConfig = utils.deepClone(lineDefault('#simpleRegionLine'));
const contentData = utils.deepClone(data);
<<<<<<< HEAD
contentData[0].regions = [regions[0]];

export default () => <LineGraph graphID="simpleRegionLine" graphConfig={graphConfig} dataset={contentData} />;
=======
contentData.regions = [regions[0]];
const dataArray = [contentData];

export default () => <LineGraph graphID="simpleRegionLine" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure
