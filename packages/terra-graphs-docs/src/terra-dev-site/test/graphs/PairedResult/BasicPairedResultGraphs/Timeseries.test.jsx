import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import pairedResultTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultTimeseriesData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultTimeseries('#timeseriesPairedResultGraph'));
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="timeseriesPairedResultGraph" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
