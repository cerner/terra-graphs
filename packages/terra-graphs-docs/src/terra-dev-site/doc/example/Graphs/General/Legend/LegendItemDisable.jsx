import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import lineTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/multiTimeseriesData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimeseries('#legendItemDisable'));

const contentData = utils.deepClone(data);
contentData[0].label.isDisabled = true;

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="legendItemDisable" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);