import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Pie/PieChart.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/simplePieConfig';
import dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset1';
import dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset2';
import dataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset3';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getPieConfig('#simplePie'));
const dataset = [
  utils.deepClone(dataset1),
  utils.deepClone(dataset2),
  utils.deepClone(dataset3),
];

const SimplePieExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.pie(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="simplePie" class="example-graph-container" />
    </React.Fragment>
  );
};

export default SimplePieExample;
