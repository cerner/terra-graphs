import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../css/Dev.module.scss';
import lineDefault from '../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault.js'
import data from '../../../../../carbon-graphs/dev/data/line/dataObjects/defaultMultiLineData'

const graphConfig = utils.deepClone(lineDefault('#showOrHideShapesPerDataset'));

const contentData = utils.deepClone(data);
contentData[0].showShapes = false;
contentData[0].color = Carbon.helpers.COLORS.BLUE;
contentData[0].style = { strokeDashArray: '2,2' };

export default () => <LineGraph graphID="showOrHideShapesPerDataset" graphConfig={graphConfig} dataset={contentData} />;
