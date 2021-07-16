import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Pie/PieChart.module.scss';
import getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/pieDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getPieConfig('#graphContainer'));
graphConfig.bindLegendTo = '#legendContainer';
const dataset = utils.deepClone(exampleData);

const CustomLegendPlacementPieExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.pie(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div className="bindto-container">
        <div id="legendContainer" className="legend-bindto-container" />
        <div id="graphContainer" className="legend-bindto-graph-container" />
      </div>
      <div id="graphContainer" />
    </React.Fragment>
  );
};

export default CustomLegendPlacementPieExample;
