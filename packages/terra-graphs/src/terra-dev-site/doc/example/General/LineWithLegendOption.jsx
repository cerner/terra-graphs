import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault.js'
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/defaultMultiLineData'

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#lineWithLegendOption'));

const contentData = utils.deepClone(data);
contentData[0].showShapes = false;
contentData[0].color = Carbon.helpers.COLORS.BLUE;
contentData[0].style = { strokeDashArray: '2,2' };

export default () => <LineGraph graphID="lineWithLegendOption" graphConfig={graphConfig} dataset={contentData} />;

