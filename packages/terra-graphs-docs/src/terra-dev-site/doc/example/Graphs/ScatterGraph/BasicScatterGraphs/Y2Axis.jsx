import React from 'react';
import ScatterGraph from '@cerner/terra-graphs/src/components/Scatter/ScatterGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/y2AxisData';
/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#scatterY2Axis'));
graphConfig.axis.y2.show = true;
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <ScatterGraph graphID="scatterY2Axis" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
