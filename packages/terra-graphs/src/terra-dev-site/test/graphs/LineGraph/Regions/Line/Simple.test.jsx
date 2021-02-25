import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/simpleLineData';

const regions = [
  {
    axis: 'y',
    start: 2,
    end: 10,
    color: '#f4f4f4',
  },
];

const graphConfig = utils.deepClone(lineDefault('#simpleRegionLine'));
const contentData = utils.deepClone(data);
contentData[0].regions = [regions[0]];

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="simpleRegionLine" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
