import React from 'react';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/multiRegionData';

const graphConfig = utils.deepClone(lineDefault('#regionLine'));
const contentData = utils.deepClone(data);

contentData[0].regions = [
  {
    start: 10,
    end: 10,
    color: '#bcbfc0',
  },
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="regionLine" graphConfig={graphConfig} dataset={contentData} />
  </>
);
