import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineTimesries from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries'
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/y2AxisData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#lineY2Axis'));
graphConfig.axis.y2.show = true;

export default () => <LineGraph graphID="lineY2Axis" graphConfig={graphConfig} dataset={data} />;
