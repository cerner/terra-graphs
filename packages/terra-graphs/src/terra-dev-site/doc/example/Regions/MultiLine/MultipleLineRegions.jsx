import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '../../../../../../../carbon-graphs/dev/data/line/dataObjects/defaultMultiLineData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#multipleline'));
const contentData = utils.deepClone(data);
contentData[0].regions = [
  {
    start: 2,
  },
];

contentData[2].regions = [
  {
    start: 2,
    end: 14,
  },
];

export default () => <LineGraph graphID="multipleline" graphConfig={graphConfig} dataset={contentData} />;

