import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import { tickValues } from '../../../../../../../carbon-graphs/dev/examples/controls/line';
import '../../../../../css/Dev.module.scss';
import lineTimeseries from '../../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '../../../../../../../carbon-graphs/dev/data/line/dataObjects/timeseriesData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimeseries('#staticXAxisTicks'));
graphConfig.axis.x.ticks = {
  values: tickValues,
  format: '%H:%M:%S',
};

export default () => <LineGraph graphID="staticXAxisTicks" graphConfig={graphConfig} dataset={[data]} />;
