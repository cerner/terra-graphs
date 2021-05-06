import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
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

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#multipleRegions'));
const contentData = utils.deepClone(data);

contentData[0].regions = regions;

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="multipleRegions" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
