import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import pairedResultTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseriesWithY2Axis';
import dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultRegionDataset1';
import dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultRegionDataset2';

const graphConfig = utils.deepClone(pairedResultTimeseries('#timeseriesPairedResultGraph'));
graphConfig.axis.y2.show = true;
const dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="timeseriesPairedResultGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
