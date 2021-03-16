import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../../css/Dev.module.scss';
import dateTimeBucket from '../../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/dateTimeBucket'
import data from '../../../../../../../carbon-graphs/dev/data/line/dataObjects/timeseriesData'

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(dateTimeBucket('#datetimeBucket'));

export default () => <LineGraph graphID="datetimeBucket" graphConfig={graphConfig} dataset={[data]} />;
