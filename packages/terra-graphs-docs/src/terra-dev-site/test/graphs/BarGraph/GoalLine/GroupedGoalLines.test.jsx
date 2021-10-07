import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BarGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1regions';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset2regions';
import exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset3regions';

const graphConfig = utils.deepClone(getBarConfig('#groupedGoalLineBarGraph'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
  utils.deepClone(exampleData3),
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BarGraph graphID="groupedGoalLineBarGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
