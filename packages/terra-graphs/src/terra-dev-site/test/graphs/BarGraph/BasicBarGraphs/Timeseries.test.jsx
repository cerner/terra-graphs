import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import barTimeseries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Bar/barTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Bar/timeseriesData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(barTimeseries('#timeseriesBargraph'));

export default () => <BarGraph graphID="timeseriesBargraph" graphConfig={graphConfig} dataset={data} />;