import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/PairedResult/pairedResultDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/PairedResult/pairedResultSimpleData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultDefault('#simplePairedResultGraph'));
const contentData = utils.deepClone(data);
contentData[0].label.high.isDisabled = true;
contentData[0].label.low.isDisabled = true;

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="simplePairedResultGraph" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
