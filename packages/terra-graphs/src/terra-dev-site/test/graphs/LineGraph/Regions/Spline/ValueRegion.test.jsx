import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineTimesries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/valueRegionData';
=======
import lineTimesries from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/valueRegionData';
>>>>>>> 3b63910... Made changes to folder structure

const graphConfig = utils.deepClone(lineTimesries('#simpleSpline'));
const contentData = utils.deepClone(data);
contentData.type = Carbon.helpers.LINE_TYPE.SPLINE;
<<<<<<< HEAD

export default () => <LineGraph graphID="simpleSpline" graphConfig={graphConfig} dataset={contentData} />;
=======
const dataArray = [contentData];

export default () => <LineGraph graphID="simpleSpline" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure
