import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import ganttDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gnatt/ganttDefault';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import tasksData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/tasksData';
import activitiesData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activitiesData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(ganttDefault('#ganttTasksAndActivities'));
graphConfig.showActionLegend = false;
const dataset = loadTracks(tasksData, activitiesData, [], [], 4);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttTasksAndActivities" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
