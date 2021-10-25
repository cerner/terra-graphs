import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import ScatterGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Scatter/ScatterGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1critical';

const graphConfig = utils.deepClone(getGraphConfig('#simpleScattergraph'));
const dataset = [utils.deepClone(exampleData)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <ScatterGraph graphID="simpleScattergraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
