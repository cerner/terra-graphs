import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultDecimalAxes';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGraphConfig('#supressTickValue'));

const SupressTickValueGeneralExample = () => {
  React.useEffect(() => {
    Carbon.api.graph(graphConfig);
  }, []);
  return (
    <ExampleGraphContainer id="supressTickValue" />
  );
};

export default SupressTickValueGeneralExample;
