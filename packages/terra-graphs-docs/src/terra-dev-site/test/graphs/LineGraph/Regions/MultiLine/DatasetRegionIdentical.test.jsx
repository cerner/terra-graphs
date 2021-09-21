import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/defaultMultiLineData';

const graphConfig = utils.deepClone(lineDefault('#datasetRegionIdentical'));
const contentData = utils.deepClone(data);
contentData[0].regions = [
  {
    start: 2,
    end: 14,
  },
];

contentData[1].regions = [
  {
    start: 2,
    end: 14,
  },
];

contentData[2].regions = [
  {
    start: 2,
    end: 14,
  },
];

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="datasetRegionIdentical" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
