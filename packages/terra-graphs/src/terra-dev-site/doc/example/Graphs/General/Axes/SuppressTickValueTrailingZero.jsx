import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import lineDecimalAxes from '@cerner/carbon-graphs/dev/data/graphConfigObjects/General/lineDecimalAxesConfig';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDecimalAxes('#supressTickValue'));

export default () => <LineGraph graphID="supressTickValue" graphConfig={graphConfig} />;
