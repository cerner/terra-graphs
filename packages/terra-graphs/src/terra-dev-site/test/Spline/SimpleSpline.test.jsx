import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../../../css/Dev.module.scss';
import lineTimeseries from '../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '../../../../../carbon-graphs/dev/data/line/dataObjects/timeseriesData';

const graphConfig = utils.deepClone(lineTimeseries('#simpleSpline'));
const contentData = utils.deepClone(data);
contentData.type = Carbon.helpers.LINE_TYPE.SPLINE;
const dataArray = [contentData];

export default () => <LineGraph graphID="simpleSpline" graphConfig={graphConfig} dataset={dataArray} />;
