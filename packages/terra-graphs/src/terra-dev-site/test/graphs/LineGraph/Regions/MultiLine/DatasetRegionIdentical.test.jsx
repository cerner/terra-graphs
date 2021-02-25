import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/defaultMultiLineData';

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
