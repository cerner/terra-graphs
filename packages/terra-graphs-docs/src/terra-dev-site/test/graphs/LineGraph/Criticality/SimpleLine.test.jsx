import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#criticalitySimpleLine', 'LINE_TIMESERIES'));

const contentData = utils.deepClone(data);
contentData[0].values[0].isCritical = true;
contentData[0].values[10].isCritical = true;

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="criticalitySimpleLine" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
