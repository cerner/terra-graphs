import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#noUpperBound'));
const contentData = utils.deepClone(data);
contentData[0].regions = [
  {
    start: 2,
  },
];

export default () => <LineGraph graphID="noUpperBound" graphConfig={graphConfig} dataset={contentData} />;

