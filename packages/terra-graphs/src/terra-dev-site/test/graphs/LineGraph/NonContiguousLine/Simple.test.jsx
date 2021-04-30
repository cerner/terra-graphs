import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineTimesries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/nonContiguousLineData';

const graphConfig = utils.deepClone(lineTimesries('#simpleLinegraph'));
const dataset = utils.deepClone(data);

export default () => <LineGraph graphID="simpleLinegraph" graphConfig={graphConfig} dataset={dataset} />;
