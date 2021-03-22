import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineTimesries from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/valueRegionData';

const graphConfig = utils.deepClone(lineTimesries('#valueRegion'));
const dataArray = [data];

export default () => <LineGraph graphID="valueRegion" graphConfig={graphConfig} dataset={dataArray} />;

