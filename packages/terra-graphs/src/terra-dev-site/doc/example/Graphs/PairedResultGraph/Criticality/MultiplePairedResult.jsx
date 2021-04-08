import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/pairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultTimeseries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/pairedResult/pairedResultTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/pairedResult/pairedResultY2AxisData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultTimeseries('#timeseriesPairedResultGraph'));
graphConfig.axis.y2.show = true;
const contentData = utils.deepClone(data);

contentData[0].values[3].high.isCritical = true;
contentData[0].values[3].mid.isCritical = true;
contentData[0].values[0].low.isCritical = true;

contentData[1].values[1].high.isCritical = true;
contentData[1].values[1].mid.isCritical = true;
contentData[1].values[1].low.isCritical = true;

export default () => <PairedResultGraph graphID="timeseriesPairedResultGraph" graphConfig={graphConfig} dataset={contentData} />;
