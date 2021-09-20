import React from 'react';
import GanttChart from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttSimpleConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttSimpleConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import taskDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset1';
import taskDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset2';
import taskDataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset3';
import taskDataset4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset4';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttSimpleConfig('#simpleGantt'));
const tasksData = [utils.deepClone(taskDataset1), utils.deepClone(taskDataset2), utils.deepClone(taskDataset3), utils.deepClone(taskDataset4)];
const dataset = loadTracks(tasksData, [], [], [], 4);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="simpleGantt" graphConfig={graphConfig} dataset={dataset} />
  </>
);
