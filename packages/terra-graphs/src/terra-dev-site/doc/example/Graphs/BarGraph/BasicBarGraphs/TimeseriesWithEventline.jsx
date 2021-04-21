import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import barTimeseries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Bar/barTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Bar/timeseriesData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(barTimeseries('#timeseriesBarWithEventline'));

graphConfig.eventline = [
    {
      color: Carbon.helpers.COLORS.GREY,
      style: {
        strokeDashArray: '4,4',
      },
      value: new Date(2017, 12, 2).toISOString(),
    },
    {
      color: Carbon.helpers.COLORS.BLACK,
      style: {
        strokeDashArray: '2,2',
      },
      value: new Date(2017, 12, 3).toISOString(),
    },
  ],
  graphConfig.clickPassThrough = {
    dateline: false,
  },
  graphConfig.showVGrid = false;

export default () => <BarGraph graphID="timeseriesBarWithEventline" graphConfig={graphConfig} dataset={data} />;
