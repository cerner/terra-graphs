import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineTimesries from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries'
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/timeseriesData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#lineTimeseries'));

export default () => <LineGraph graphID="lineTimeseries" graphConfig={graphConfig} dataset={[data]} />;
