import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/pairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultTimeseries from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/pairedResult/pairedResultTimeseries';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/pairedResult/pairedResultTimeseriesData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultTimeseries('#timeseriesPairedResultGraph'));

export default () => <PairedResultGraph graphID="timeseriesPairedResultGraph" graphConfig={graphConfig} dataset={data} />;
