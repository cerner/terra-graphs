import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import dateTimeBucket from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/dateTimeBucket';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/timeseriesData';

const graphConfig = utils.deepClone(dateTimeBucket('#datetimeBucket'));
const dataArray = [data];

export default () => <LineGraph graphID="datetimeBucket" graphConfig={graphConfig} dataset={dataArray} />;
