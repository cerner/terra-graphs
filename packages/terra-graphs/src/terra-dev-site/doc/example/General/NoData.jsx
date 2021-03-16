import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault.js'
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/noDataView'

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#nodata'));

export default () => <LineGraph graphID="nodata" graphConfig={graphConfig} dataset={[data]} />;

