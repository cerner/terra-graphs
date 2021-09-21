import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getPairedResultEventlineTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseriesWithEventline';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultTimeseriesData';

const graphConfig = utils.deepClone(getPairedResultEventlineTimeseriesConfig('#pairedResultWithEventline'));
const dataset = [utils.deepClone(data)];

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="pairedResultWithEventline" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
