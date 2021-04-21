import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import barDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Bar/barDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Bar/stackedBarData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(barDefault('#stackedBargraph'));

export default () => <BarGraph graphID="stackedBargraph" graphConfig={graphConfig} dataset={data} />;
