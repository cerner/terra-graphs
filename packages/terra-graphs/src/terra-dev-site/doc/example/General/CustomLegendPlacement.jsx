import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineTimesries from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries'
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/multiTimeseriesData'

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#graphContainer'));
graphConfig.bindLegendTo = '#legendContainer';

export default () => (
  <div id="customLegendPlacement">
    <div className="bindto-container">
      <div id="legendContainer" className="legend-bindto-container" />
      <div id="graphContainer" className="legend-bindto-graph-container" />
    </div>
    <LineGraph graphID="graphContainer" graphConfig={graphConfig} dataset={data} />
  </div>
);
