import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getPairedResultTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultCriticalDataset1';

const graphConfig = utils.deepClone(getPairedResultTimeseriesConfig('#simplePairedResultGraph'));
const dataset = [utils.deepClone(data)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="simplePairedResultGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
