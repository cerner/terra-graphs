import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/PairedResult/pairedResultDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/PairedResult/pairedResultValueRegionData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultDefault('#simplePairedResultGraph'));
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="simplePairedResultGraph" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
