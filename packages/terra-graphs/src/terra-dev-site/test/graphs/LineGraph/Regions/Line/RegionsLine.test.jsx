import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/multiRegionData';
=======
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/multiRegionData';
>>>>>>> 3b63910... Made changes to folder structure

const graphConfig = utils.deepClone(lineDefault('#regionLine'));
const contentData = utils.deepClone(data);

<<<<<<< HEAD
contentData[0].regions = [
=======
contentData.regions = [
>>>>>>> 3b63910... Made changes to folder structure
  {
    start: 10,
    end: 10,
    color: '#bcbfc0',
  },
];
<<<<<<< HEAD

export default () => <LineGraph graphID="regionLine" graphConfig={graphConfig} dataset={contentData} />;
=======
const dataArray = [contentData];

export default () => <LineGraph graphID="regionLine" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure

