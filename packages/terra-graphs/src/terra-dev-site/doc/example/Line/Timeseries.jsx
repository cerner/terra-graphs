
import React from 'react';
import { getDemoData } from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';


export default () => <LineGraph graphID="lineTimeseries" graphConfig={ getDemoData('#lineTimeseries', 'LINE_TIMESERIES') } dataset={ getDemoData('#lineTimeseries', 'LINE_TIMESERIES').data[0]  }/>
