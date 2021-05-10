import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultY2AxisData';

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

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="timeseriesPairedResultGraph" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
