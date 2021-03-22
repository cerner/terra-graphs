import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#noLowerBound'));
const contentData = utils.deepClone(data);
contentData[0].regions = [
=======
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#noLowerBound'));
const contentData = utils.deepClone(data);
contentData.regions = [
>>>>>>> 3b63910... Made changes to folder structure
  {
    end: 10,
  },
];
<<<<<<< HEAD

export default () => <LineGraph graphID="noLowerBound" graphConfig={graphConfig} dataset={contentData} />;
=======
const dataArray = [contentData];

export default () => <LineGraph graphID="noLowerBound" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure

