import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import pairedResultTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseriesWithY2Axis';
import dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultRegionDataset1';
import dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultRegionDataset2';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(pairedResultTimeseries('#timeseriesPairedResultGraph'));
const dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];

const MultipleRegionPiaredResultExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.pairedResult(data));
    });
  }, []);
  return (
    <ExampleGraphContainer id="timeseriesPairedResultGraph" />
  );
};

export default MultipleRegionPiaredResultExample;
