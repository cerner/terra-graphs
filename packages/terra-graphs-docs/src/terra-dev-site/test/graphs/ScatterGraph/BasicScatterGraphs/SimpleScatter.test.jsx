import React from 'react';
import ScatterGraph from '@cerner/terra-graphs/lib/components/Scatter/ScatterGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/simpleLineData';

/*
Please refer to the documentation below to see the graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#simpleScattergraph'));
const dataset = utils.deepClone(data);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <ScatterGraph graphID="simpleScattergraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
