import React from 'react';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/multiRegionData';

const regions = [
  {
    axis: 'y',
    start: 2,
    end: 10,
    color: '#f4f4f4',
  },
  {
    axis: 'y',
    start: 12,
    end: 18,
    color: '#c8cacb',
  },
];
const graphConfig = utils.deepClone(lineDefault('#multipleRegions'));
const contentData = utils.deepClone(data);
contentData[0].regions = regions;

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="multipleRegions" graphConfig={graphConfig} dataset={contentData} />
  </>
);
