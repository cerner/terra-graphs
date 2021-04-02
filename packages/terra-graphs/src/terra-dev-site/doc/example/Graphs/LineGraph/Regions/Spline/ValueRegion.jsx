import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineTimesries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/valueRegionData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#simpleSpline'));
const contentData = utils.deepClone(data);
contentData[0].type = Carbon.helpers.LINE_TYPE.SPLINE;

export default () => <LineGraph graphID="simpleSpline" graphConfig={graphConfig} dataset={contentData} />;