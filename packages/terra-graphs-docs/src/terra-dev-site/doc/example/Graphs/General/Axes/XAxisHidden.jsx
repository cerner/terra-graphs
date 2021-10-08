import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultXAxisHidden';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGraphConfig('#xAxisHidden'));

export default () => <LineGraph graphID="xAxisHidden" graphConfig={graphConfig} />;
