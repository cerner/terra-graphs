import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultXAxisOverlapping';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/datasetTimeseries1';

const graphConfig = utils.deepClone(getGraphConfig('#xAxisTicksVlauesOverlapping'));
const dataset = [utils.deepClone(exampleData)];

const timeoutArray = [0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="xAxisTicksVlauesOverlapping" graphConfig={graphConfig} dataset={dataset} timeout={timeoutArray} />
    ;
  </>
);
