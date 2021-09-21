import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/y2AxisData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineTimesries('#y2Region'));
graphConfig.axis.y2.show = true;

const contentData = utils.deepClone(data);
contentData[1].regions = [
  {
    axis: 'y2',
    start: 50,
    end: 150,
  },
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="y2Region" graphConfig={graphConfig} dataset={contentData} />
  </>
);

