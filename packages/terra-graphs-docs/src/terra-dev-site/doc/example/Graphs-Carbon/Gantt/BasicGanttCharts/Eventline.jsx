import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Gantt/GanttChart.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getGanttEventlineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttEventlineConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import taskDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset1';
import taskDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset2';
import taskDataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset3';
import taskDataset4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset4';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGanttEventlineConfig('#ganttEventline'));
const tasksData = [utils.deepClone(taskDataset1), utils.deepClone(taskDataset2), utils.deepClone(taskDataset3), utils.deepClone(taskDataset4)];
const dataset = loadTracks(tasksData, [], [], [], 4);

const GanttEventlineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.gantt(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);

  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="ganttEventline" />
    </React.Fragment>
  );
};

export default GanttEventlineExample;
