import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BarGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefaultNegativeAxis';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/negativeBarData';

/*
 Please refer to the documentation below to see the graphConfig and data objects
 */

const graphConfig = utils.deepClone(getBarConfig('#negativeBargraph'));
const dataset = [utils.deepClone(data)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BarGraph graphID="negativeBargraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
