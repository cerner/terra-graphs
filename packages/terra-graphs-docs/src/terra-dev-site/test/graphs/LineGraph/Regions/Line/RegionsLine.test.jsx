import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/multiRegionData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';

const graphConfig = utils.deepClone(lineDefault('#regionLine'));
const contentData = utils.deepClone(exampleData);

contentData[0].regions = [
  {
    start: 10,
    end: 10,
    color: '#bcbfc0',
  },
];

const LineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    contentData.forEach((data) => {
      graph.loadContent(Carbon.api.line(data));
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="regionLine" />
    </React.Fragment>
  );
};

export default LineExample;

