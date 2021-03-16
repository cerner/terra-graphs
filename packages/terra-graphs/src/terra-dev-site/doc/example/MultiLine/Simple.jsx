import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault.js'
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/multiLineData'

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#multiLine'));

export default () => <LineGraph graphID="multiLine" graphConfig={graphConfig} dataset={data} timeout={[0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6]} />;
