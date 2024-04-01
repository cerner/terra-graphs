import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttReducedPaddingConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';
import actionDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset2';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttGraphAndLegendPaddingReduced'));
const actions = [utils.deepClone(actionDataset1), utils.deepClone(actionDataset2)];
const dataset = loadTracks([], [], [], actions, 2);

const GanttGraphAndLegendPaddingReducedExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.gantt(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);

  return (
    <ExampleGraphContainer id="ganttGraphAndLegendPaddingReduced" />
  );
};

export default GanttGraphAndLegendPaddingReducedExample;
