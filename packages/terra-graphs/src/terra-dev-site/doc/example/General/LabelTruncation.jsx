import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/simpleLineData'
import lineDefault from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/labelTruncation';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#labelTruncation'));

export default () => <LineGraph graphID="labelTruncation" graphConfig={graphConfig} dataset={[data]} />;

