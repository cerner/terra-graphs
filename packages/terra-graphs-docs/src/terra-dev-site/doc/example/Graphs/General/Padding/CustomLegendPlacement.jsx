import React from 'react';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/multiTimeseriesData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineTimesries('#graphContainer'));
graphConfig.bindLegendTo = '#legendContainer';
const dataset = utils.deepClone(data);

export default () => (
  <div id="customLegendPlacement">
    <div id="tooltip" className="initial-tooltip" />
    <div className="bindto-container">
      <div id="legendContainer" className="legend-bindto-container" />
      <div id="graphContainer" className="legend-bindto-graph-container" />
    </div>
    <LineGraph graphID="graphContainer" graphConfig={graphConfig} dataset={dataset} />
  </div>
);
