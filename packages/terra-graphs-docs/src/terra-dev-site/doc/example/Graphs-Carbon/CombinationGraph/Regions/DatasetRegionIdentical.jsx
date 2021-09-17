import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/components/Line/LineGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/components/PairedResult/PairedResultGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineAndPairedResultData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineAndPairedResultConfig('#lineWithPairedResultRegion'));
const dataset = utils.deepClone(data);
dataset[1].yAxis = 'y';
dataset[0].regions = [
  {
    axis: 'y',
    start: 120,
    end: 180,
    color: '#c8cacb',
  },
];
dataset[1].regions = {
  high: [
    {
      axis: 'y',
      start: 120,
      end: 180,
      color: '#c8cacb',
    },
  ],
  mid: [
    {
      axis: 'y',
      start: 120,
      end: 180,
      color: '#c8cacb',
    },
  ],
  low: [
    {
      axis: 'y',
      start: 120,
      end: 180,
      color: '#c8cacb',
    },
  ],
};

const LineWithPairedResultRegionCombinationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset[0]));
    graph.loadContent(Carbon.api.pairedResult(dataset[1]));
  }, []);
  return (
    <ExampleGraphContainer id="lineWithPairedResultRegion" />
  );
};

export default LineWithPairedResultRegionCombinationExample;
