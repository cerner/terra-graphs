import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/y2AxisData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineTimesries('#lineY2Axis'));
graphConfig.axis.y2.show = true;
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="lineY2Axis" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
