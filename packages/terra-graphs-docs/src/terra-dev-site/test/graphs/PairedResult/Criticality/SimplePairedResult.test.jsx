import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimpleData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultDefault('#simplePairedResultGraph'));
const contentData = utils.deepClone(data);

contentData[0].values[3].high.isCritical = true;
contentData[0].values[2].mid.isCritical = true;
contentData[0].values[1].low.isCritical = true;

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="simplePairedResultGraph" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
