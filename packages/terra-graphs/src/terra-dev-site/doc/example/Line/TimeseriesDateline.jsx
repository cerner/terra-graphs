import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '../../../../components/Line/LineGraph.jsx';

export default () => <LineGraph graphID="timeseriesDateLine" graphConfig={getDemoData('#timeseriesDateLine', 'LINE_TIMESERIES_DATELINE')} dataset={getDemoData('#timeseriesDateLine', 'LINE_TIMESERIES_DATELINE').data[0]} />;
