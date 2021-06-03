import React from 'react';
import CombinationGraph from '@cerner/terra-graphs/lib/components/Combination/CombinationGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/BarGraphWithLineData';

const graphConfig = utils.deepClone(getCombinationGraphConfig('#barGraphWithLine'));
graphConfig.axis.x.ticks = {
  values: [1, 2, 3, 4, 5, 6, 7],
  format: '.0f',
};
graphConfig.showVGrid = false;
graphConfig.axis.y2.show = true;
graphConfig.axis.y2.padDomain = false;

const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <CombinationGraph graphID="barGraphWithLine" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
