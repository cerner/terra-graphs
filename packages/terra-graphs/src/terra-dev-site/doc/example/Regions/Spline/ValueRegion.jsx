import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../../css/Dev.module.scss';
import lineTimesries from '../../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries'
import data from '../../../../../../../carbon-graphs/dev/data/line/dataObjects/valueRegionData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#simpleSpline'));
const contentData = utils.deepClone(data);
contentData.type = Carbon.helpers.LINE_TYPE.SPLINE;

export default () => <LineGraph graphID="simpleSpline" graphConfig={graphConfig} dataset={[contentData]} />;
