import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefault';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import {
  passThroughActivities, passThroughTasks, passThroughEvents, passThroughActions,
} from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/trackSelectionData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
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
  passThroughTasks,
  passThroughActivities,
  passThroughEvents,
  passThroughActions,
  1,
  true,
);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttTrackSelection" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);

