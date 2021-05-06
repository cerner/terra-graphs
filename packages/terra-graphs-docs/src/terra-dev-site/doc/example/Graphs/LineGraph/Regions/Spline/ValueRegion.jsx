import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/valueRegionData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#simpleSpline'));
const contentData = utils.deepClone(data);
contentData[0].type = Carbon.helpers.LINE_TYPE.SPLINE;

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="simpleSpline" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
