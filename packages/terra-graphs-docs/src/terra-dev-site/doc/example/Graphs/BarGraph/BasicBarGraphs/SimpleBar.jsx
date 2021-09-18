import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Bar/BarGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import BarGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph';
import barDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/simpleBarData';

/*
 Please refer to the documentation below to see the graphConfig and data objects
 */
const graphConfig = utils.deepClone(barDefault('#simpleBargraph'));
const dataset = utils.deepClone(exampleData);

export default () => {
  return (
    <>
      <div id="tooltip" className="initial-tooltip" />
      <BarGraph graphID="simpleBargraph" graphConfig={graphConfig} dataset={dataset} />
    </>
  );
};
