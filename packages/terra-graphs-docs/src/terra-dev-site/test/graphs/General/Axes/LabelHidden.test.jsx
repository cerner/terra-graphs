import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';

const graphConfig = utils.deepClone(lineDefault('#labelHidden'));
graphConfig.showLabel = false;

export default () => <LineGraph graphID="labelHidden" graphConfig={graphConfig} />;
