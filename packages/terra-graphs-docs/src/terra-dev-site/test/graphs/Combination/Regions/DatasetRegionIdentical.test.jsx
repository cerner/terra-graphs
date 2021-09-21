import React from 'react';
import CombinationGraph from '@cerner/terra-graphs/lib/components/Combination/CombinationGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineAndPairedResultData';

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

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <CombinationGraph graphID="lineWithPairedResultRegion" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
