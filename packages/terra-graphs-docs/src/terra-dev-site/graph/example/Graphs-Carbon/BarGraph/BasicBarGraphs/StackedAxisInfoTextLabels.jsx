import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData1AxisInfo';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData2.js';
import exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData3.js';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getBarConfig('#stackedAxisInfoTextLabelsBarGraph'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
  utils.deepClone(exampleData3),
];

export default () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.bar(data));
    });
  }, []);

  return (
    <ExampleGraphContainer id="stackedAxisInfoTextLabelsBarGraph" />
  );
};
