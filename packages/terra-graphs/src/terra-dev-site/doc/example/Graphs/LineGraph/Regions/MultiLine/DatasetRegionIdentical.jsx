import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/defaultMultiLineData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
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

export default () => <LineGraph graphID="datasetRegionIdentical" graphConfig={graphConfig} dataset={contentData} />;

