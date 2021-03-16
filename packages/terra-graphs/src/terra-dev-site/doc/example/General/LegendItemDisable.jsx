import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineTimeseries from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries.js'
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/multiTimeseriesData'

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimeseries('#legendItemDisable'));

const contentData = utils.deepClone(data);
contentData[0].label.isDisabled = true;

export default () => <LineGraph graphID="legendItemDisable" graphConfig={graphConfig} dataset={contentData} />;
