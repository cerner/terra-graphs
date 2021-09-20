import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineDecimalAxes from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/lineDecimalAxesConfig';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineDecimalAxes('#supressTickValue'));

const SupressTickValueGeneralExample = () => {
  React.useEffect(() => {
    Carbon.api.graph(graphConfig);
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="supressTickValue" className="example-graph-container" />
    </React.Fragment>
  );
};

export default SupressTickValueGeneralExample;
