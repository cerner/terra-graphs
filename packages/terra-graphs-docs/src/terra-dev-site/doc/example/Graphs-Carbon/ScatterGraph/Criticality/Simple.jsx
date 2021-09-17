import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/simpleLineData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#simpleCriticalScattergraph'));

const dataContent = utils.deepClone(exampleData);
dataContent[0].values[0].isCritical = true;
dataContent[0].values[5].isCritical = true;
dataContent[0].values[10].isCritical = true;

const SimpleCriticalityScatterExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataContent.forEach((data) => {
      graph.loadContent(Carbon.api.scatter(data));
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="simpleCriticalScattergraph" class="example-graph-container" />
    </React.Fragment>
  );
};

export default SimpleCriticalityScatterExample;
