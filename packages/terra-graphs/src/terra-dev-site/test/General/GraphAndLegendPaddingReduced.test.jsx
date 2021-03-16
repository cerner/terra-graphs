import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../css/Dev.module.scss';
import lineTimesries from '../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries'
import data from '../../../../../carbon-graphs/dev/data/line/dataObjects/multiTimeseriesData'

const graphConfig = utils.deepClone(lineTimesries('#graphContainer'));
graphConfig.bindLegendTo = '#legendContainer';
graphConfig.removeContainerPadding = true;
graphConfig.legendPadding = {
  left: 2.5,
  right: 2.5,
  top: 2.5,
  bottom: 2.5,
};

export default () => (
  <div id="graphAndLegendPaddingReduced" className="custom-container-legend-style">
    <div className="bindto-container">
      <div id="legendContainer" className="legend-bindto-container" />
      <div id="graphContainer" className="legend-bindto-graph-container" />
    </div>
    <LineGraph graphID="graphContainer" graphConfig={graphConfig} dataset={data} />
  </div>
);
