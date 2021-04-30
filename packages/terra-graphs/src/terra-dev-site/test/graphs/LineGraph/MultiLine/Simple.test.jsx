import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/multiLineData';

const graphConfig = utils.deepClone(lineDefault('#multiLine'));
const timeoutArray = [0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6];
const dataset = utils.deepClone(data);

export default () => <LineGraph graphID="multiLine" graphConfig={graphConfig} dataset={dataset} timeout={timeoutArray} />;
