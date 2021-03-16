import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../css/Dev.module.scss';
import lineTimesries from '../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries'
import data from '../../../../../carbon-graphs/dev/data/line/dataObjects/nonContiguouslineData';

const graphConfig = utils.deepClone(lineTimesries('#simpleLinegraph'));
const dataArray = [data];

export default () => <LineGraph graphID="simpleLinegraph" graphConfig={graphConfig} dataset={dataArray} />;
