import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/simpleLineData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#xAxisHidden'));
graphConfig.axis.x.show = false;

export default () => <LineGraph graphID="xAxisHidden" graphConfig={graphConfig} dataset={data} />;
