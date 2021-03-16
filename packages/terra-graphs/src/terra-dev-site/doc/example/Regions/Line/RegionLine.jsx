import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '../../../../../../../carbon-graphs/dev/data/line/dataObjects/multiRegionData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#regionLine'));
const contentData = utils.deepClone(data);

contentData.regions = [
  {
    start: 10,
    end: 10,
    color: '#bcbfc0',
  },
];

export default () => <LineGraph graphID="regionLine" graphConfig={graphConfig} dataset={[contentData]} />;

