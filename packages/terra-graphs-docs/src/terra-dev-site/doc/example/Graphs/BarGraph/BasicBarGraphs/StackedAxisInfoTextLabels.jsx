import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BarGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import data1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData1AxisInfo';
import data2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData2.js';
import data3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData3.js';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getBarConfig('#stackedAxisInfoTextLabelsBargraph'));
const dataset = [
  utils.deepClone(data1),
  utils.deepClone(data2),
  utils.deepClone(data3),
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BarGraph graphID="stackedAxisInfoTextLabelsBargraph" graphConfig={graphConfig} dataset={contentData} />
  </>
);
