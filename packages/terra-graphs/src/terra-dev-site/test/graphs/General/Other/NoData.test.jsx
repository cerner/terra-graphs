import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/General/noDataView';

const graphConfig = utils.deepClone(lineDefault('#nodata'));
const dataset = utils.deepClone(data);

export default () => <LineGraph graphID="nodata" graphConfig={graphConfig} dataset={dataset} />;
