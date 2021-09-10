import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefaultConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import taskDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset1';
import taskDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset2';
import taskDataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset3';
import taskDataset4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset4';
import activityDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset1';
import activityDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset2';
import activityDataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset3';
import activityDataset4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset4';

const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttTasksAndActivities'));
const tasksData = [utils.deepClone(taskDataset1), utils.deepClone(taskDataset2), utils.deepClone(taskDataset3), utils.deepClone(taskDataset4)];
const activitiesData = [utils.deepClone(activityDataset1), utils.deepClone(activityDataset2), utils.deepClone(activityDataset3), utils.deepClone(activityDataset4)];
const dataset = loadTracks(tasksData, activitiesData, [], [], 4);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttTasksAndActivities" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
