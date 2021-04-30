import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import barDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Bar/barDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Bar/groupedBarData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(barDefault('#groupedBarGraph'));
const dataset = utils.deepClone(data);

export default () => <BarGraph graphID="groupedBarGraph" graphConfig={graphConfig} dataset={dataset} />;
