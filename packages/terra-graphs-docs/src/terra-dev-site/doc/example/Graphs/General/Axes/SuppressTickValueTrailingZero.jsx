import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDecimalAxes from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/lineDecimalAxesConfig';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineDecimalAxes('#supressTickValue'));

export default () => <LineGraph graphID="supressTickValue" graphConfig={graphConfig} />;
