import React from 'react';
import GanttChart from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttEventlineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttEventlineConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import taskDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset1';
import taskDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset2';
import taskDataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset3';
import taskDataset4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset4';

const graphConfig = utils.deepClone(getGanttEventlineConfig('#ganttEventline'));
const tasksData = [utils.deepClone(taskDataset1), utils.deepClone(taskDataset2), utils.deepClone(taskDataset3), utils.deepClone(taskDataset4)];
const dataset = loadTracks(tasksData, [], [], [], 4);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttEventline" graphConfig={graphConfig} dataset={dataset} />
  </>
);
