import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineDefault('#verticalGridHidden'));
graphConfig.showVGrid = false;

const GeneralExample = () => {
  React.useEffect(() => {
    Carbon.api.graph(graphConfig);
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="verticalGridHidden" />
    </React.Fragment>
  );
};

export default GeneralExample;
