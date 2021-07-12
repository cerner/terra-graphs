import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/y2AxisData';

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
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="y2Region" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
