import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '../../../../css/Dev.module.scss';
import lineTimeseries from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/timeseriesData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimeseries('#timeseriesEventLine'));
graphConfig.eventline = [
  {
    color: Carbon.helpers.COLORS.GREY,
    style: {
      strokeDashArray: '4,4',
    },
    value: new Date(2016, 0, 1, 8).toISOString(),
  },
  {
    color: Carbon.helpers.COLORS.BLACK,
    style: {
      strokeDashArray: '2,2',
    },
    value: new Date(2016, 0, 1, 12).toISOString(),
  },
];

export default () => <LineGraph graphID="timeseriesEventLine" graphConfig={graphConfig} dataset={[data]} />;
