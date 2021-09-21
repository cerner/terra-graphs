import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttActionConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import activityDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset1';
import taskDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset1';
import eventDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/eventDataset2';
import actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttTrackSelection'));
const dataset = loadTracks(
  [taskDataset1],
  [activityDataset1],
  [eventDataset2],
  [actionDataset1],
  1,
  true,
);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttTrackSelection" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);

