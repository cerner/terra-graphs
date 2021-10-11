import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BarGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedGoalLinesData1';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedGoalLinesData2';
import exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedGoalLinesData3';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getBarConfig('#stackedGoalLineBarGraph'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
  utils.deepClone(exampleData3),
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BarGraph graphID="stackedGoalLineBarGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
