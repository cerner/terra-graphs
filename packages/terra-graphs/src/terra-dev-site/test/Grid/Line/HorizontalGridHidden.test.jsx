import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault.js'
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/simpleLineData'

const graphConfig = utils.deepClone(lineDefault('#horizontalGridHidden'));
graphConfig.showHGrid = false;
const dataArray = [data];

export default () => <LineGraph graphID="horizontalGridHidden" graphConfig={graphConfig} dataset={dataArray} />;

