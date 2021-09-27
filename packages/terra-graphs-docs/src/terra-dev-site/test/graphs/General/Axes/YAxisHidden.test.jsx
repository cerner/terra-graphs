import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';

const graphConfig = utils.deepClone(lineDefault('#yAxisHidden'));
graphConfig.axis.y.show = false;

export default () => <LineGraph graphID="yAxisHidden" graphConfig={graphConfig} />;
