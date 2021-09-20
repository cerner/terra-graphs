import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getPairedResultY2AxisTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseriesWithY2Axis';
import dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultY2AxisDataset1';
import dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultY2AxisDataset2';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getPairedResultY2AxisTimeseriesConfig('#timeseriesY2AxisPairedResultGraph'));
const dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="timeseriesY2AxisPairedResultGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
