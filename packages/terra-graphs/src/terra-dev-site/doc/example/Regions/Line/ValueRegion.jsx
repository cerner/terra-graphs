import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../../css/Dev.module.scss';
import lineTimesries from '../../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries'
import data from '../../../../../../../carbon-graphs/dev/data/line/dataObjects/valueRegionData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#valueRegion'));

export default () => <LineGraph graphID="valueRegion" graphConfig={graphConfig} dataset={[data]} />;

