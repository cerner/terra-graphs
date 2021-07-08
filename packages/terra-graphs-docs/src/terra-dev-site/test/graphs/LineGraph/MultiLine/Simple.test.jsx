import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/multiLineData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';

const graphConfig = utils.deepClone(lineDefault('#multiLine'));
const dataset = utils.deepClone(exampleData);
const timeout = [0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6];

const LineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data, index) => {
      setTimeout(
        () => (graph.graphContainer
          ? graph.loadContent(Carbon.api.line(data))
          : ''),
        timeout[index],
      );
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="multiLine" />
    </React.Fragment>
  );
};

export default LineExample;
