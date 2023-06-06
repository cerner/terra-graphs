import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultXAxisOverflow';
import exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';
import exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset2';
import exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset3';
import exampleData4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset4';
import exampleData5 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset5';
import exampleData6 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset6';

const graphConfig = utils.deepClone(getGraphConfig('#xAxisTicksVlauesOverflow'));
const dataset = [
  utils.deepClone(exampleData1),
  utils.deepClone(exampleData2),
  utils.deepClone(exampleData3),
  utils.deepClone(exampleData4),
  utils.deepClone(exampleData5),
  utils.deepClone(exampleData6),
];

const timeoutArray = [0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="xAxisTicksVlauesOverflow" graphConfig={graphConfig} dataset={dataset} timeout={timeoutArray} />
    ;
  </>
);
