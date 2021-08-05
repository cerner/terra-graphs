import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BarGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import data1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/groupedBarData1';
import data2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/groupedBarData2';
import data3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/groupedBarData3';

const graphConfig = utils.deepClone(getBarConfig('#groupedBarGraph'));
const dataset = [
  utils.deepClone(data1),
  utils.deepClone(data2),
  utils.deepClone(data3),
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BarGraph graphID="groupedBarGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
