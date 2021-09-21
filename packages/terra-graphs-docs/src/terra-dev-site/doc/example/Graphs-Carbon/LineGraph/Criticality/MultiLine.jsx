import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/defaultMultiLineData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineDefault('#criticalityMultiLine'));

const contentData = utils.deepClone(exampleData);
contentData[0].values[0].isCritical = true;
contentData[0].values[5].isCritical = true;
contentData[0].values[10].isCritical = true;

contentData[1].values[6].isCritical = true;
contentData[1].values[11].isCritical = true;

const CriticalityMultiLineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    contentData.forEach((data) => {
      graph.loadContent(Carbon.api.line(data));
    });
  }, []);
  return (
    <ExampleGraphContainer id="criticalityMultiLine" />
  );
};

export default CriticalityMultiLineExample;

