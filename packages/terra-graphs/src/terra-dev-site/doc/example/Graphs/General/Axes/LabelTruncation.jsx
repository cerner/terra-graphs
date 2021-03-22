import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/simpleLineData';
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/labelTruncation';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#labelTruncation'));

export default () => <LineGraph graphID="labelTruncation" graphConfig={graphConfig} dataset={[data]} />;

