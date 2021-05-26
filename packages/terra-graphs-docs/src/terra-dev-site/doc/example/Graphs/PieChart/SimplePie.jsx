import React from 'react';
import PieChart from '@cerner/terra-graphs/lib/components/Pie/PieChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/pieDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieData';

const graphConfig = utils.deepClone(getPieConfig('#simplePie'));
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <PieChart graphID="simplePie" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
