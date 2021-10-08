import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset1';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGraphConfig('#backgroundColor'));
const dataset = utils.deepClone(exampleData);

const BackgroundColorGeneralExample = () => {
  React.useEffect(() => {å
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.line(data));
    });
  }, []);
  return (
    <ExampleGraphContainer id="backgroundColor" />
  );
};

export default BackgroundColorGeneralExample;
