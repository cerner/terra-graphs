import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../css/Dev.module.scss';
import lineDefault from '../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault.js'
import data from '../../../../../carbon-graphs/dev/data/line/dataObjects/multiLineData'

const graphConfig = utils.deepClone(lineDefault('#multiLine'));
const timeoutArray = [0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6];

export default () => <LineGraph graphID="multiLine" graphConfig={graphConfig} dataset={data} timeout={timeoutArray} />;
