import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineTimesries from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/timeseriesData';

const graphConfig = utils.deepClone(lineTimesries('#lineTimeseries'));
const dataArray = [data];

export default () => <LineGraph graphID="lineTimeseries" graphConfig={graphConfig} dataset={dataArray} />;
