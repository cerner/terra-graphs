import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultTimeseries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/PairedResult/pairedResultTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/PairedResult/pairedResultY2AxisData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultTimeseries('#timeseriesPairedResultGraph'));
graphConfig.axis.y2.show = true;
const dataset = utils.deepClone(data);

export default () => <PairedResultGraph graphID="timeseriesPairedResultGraph" graphConfig={graphConfig} dataset={dataset} />;