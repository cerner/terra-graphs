import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultLabelHidden';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGraphConfig('#labelHidden'));
graphConfig.showLabel = false;

const LabelHiddenGeneralExample = () => {
  React.useEffect(() => {
    Carbon.api.graph(graphConfig);
  }, []);
  return (
    <ExampleGraphContainer id="labelHidden" />
  );
};

export default LabelHiddenGeneralExample;
