import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';

const graphConfig = utils.deepClone(lineDefault('#xAxisHidden'));
graphConfig.axis.x.show = false;

export default () => <LineGraph graphID="xAxisHidden" graphConfig={graphConfig} />;
