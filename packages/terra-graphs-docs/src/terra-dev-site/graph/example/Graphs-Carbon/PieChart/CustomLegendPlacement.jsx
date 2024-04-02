import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Pie/PieChart.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/customLegendPlacementConfig';
import dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset1';
import dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset2';
import dataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset3';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getPieConfig('#graphContainer'));
const dataset = [
  utils.deepClone(dataset1),
  utils.deepClone(dataset2),
  utils.deepClone(dataset3),
];

const CustomLegendPlacementPieExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.pie(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);
  return (
    <>
      <div className="bindto-container">
        <div id="legendContainer" className="legend-bindto-container" />
        <div id="graphContainer" className="legend-bindto-graph-container" />
      </div>
      <ExampleGraphContainer id="pieGraphContainer" />
    </>
  );
};

export default CustomLegendPlacementPieExample;
