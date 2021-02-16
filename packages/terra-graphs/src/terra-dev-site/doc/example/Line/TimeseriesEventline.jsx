
import React from 'react';
import  getDemoData  from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'
import Carbon from '../../../../../../carbon-graphs/src/js/carbon';

const data = utils.deepClone(getDemoData('#timeseriesEventLine', 'LINE_TIMESERIES'));
data.eventline = [
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

export default () => <LineGraph graphID="timeseriesEventLine" graphConfig={ data } dataset={ getDemoData('#timeseriesEventline', 'LINE_TIMESERIES_DATELINE').data[0]  }/>