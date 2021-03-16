import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../css/Dev.module.scss';
import lineDecimalAxes from '../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDecimalAxesConfig'
import data from '../../../../../carbon-graphs/dev/data/line/dataObjects/lineDecimalAxesData'

const graphConfig = utils.deepClone(lineDecimalAxes('#supressTickValue'));

export default () => <LineGraph graphID="supressTickValue" graphConfig={graphConfig} dataset={data} />;
