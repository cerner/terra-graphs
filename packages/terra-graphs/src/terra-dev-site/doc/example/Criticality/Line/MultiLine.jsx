import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '../../../../../../../carbon-graphs/dev/data/line/dataObjects/defaultMultiLineData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#criticalityMultiLine'));

const contentData = utils.deepClone(data);
contentData[0].values[0].isCritical = true;
contentData[0].values[5].isCritical = true;
contentData[0].values[10].isCritical = true;

contentData[1].values[6].isCritical = true;
contentData[1].values[11].isCritical = true;

export default () => <LineGraph graphID="criticalityMultiLine" graphConfig={graphConfig} dataset={contentData} />;

