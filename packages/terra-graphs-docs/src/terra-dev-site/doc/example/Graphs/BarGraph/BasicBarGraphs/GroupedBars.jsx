import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import barDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/groupedBarData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(barDefault('#groupedBarGraph'));
const dataset = utils.deepClone(data);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BarGraph graphID="groupedBarGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
