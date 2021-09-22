import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import GanttChart from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttActionConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import activityDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset1';
import taskDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset1';
import eventDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/eventDataset2';
import actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';

const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttTrackSelection'));
graphConfig.clickPassThrough = {
  tasks: true,
  activities: true,
  events: true,
  actions: true,
  datelines: true,
};
graphConfig.showActionLegend = false;
graphConfig.dateline = [
  {
    showDatelineIndicator: true,
    label: {
      display: 'DST Start',
    },
    color: '#405978',
    shape: Carbon.helpers.SHAPES.DIAMOND,
    value: new Date(2018, 2, 10).toISOString(),
  },
  {
    showDatelineIndicator: true,
    label: {
      display: 'Current Date',
    },
    color: '#C97318',
    shape: Carbon.helpers.SHAPES.SQUARE,
    value: new Date(2018, 8, 5).toISOString(),
  },
];

const dataset = loadTracks(
  [taskDataset1],
  [activityDataset1],
  [eventDataset2],
  [actionDataset1],
  1,
  true,
);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttTrackSelection" graphConfig={graphConfig} dataset={dataset} />
  </>
);

