import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/pairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/pairedResult/pairedResultDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/pairedResult/pairedResultSimpleData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultDefault('#simplePairedResultGraph'));

export default () => <PairedResultGraph graphID="simplePairedResultGraph" graphConfig={graphConfig} dataset={data} />;
