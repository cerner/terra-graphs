import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getlineDefaultNoShapesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultNoShapes';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset2';

const graphConfig = utils.deepClone(getlineDefaultNoShapesConfig('#shapesHidden'));
const dataset = [utils.deepClone(exampleData)];

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="shapesHidden" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
