import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Gantt/GanttChart.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefault';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import {
  passThroughActivities, passThroughTasks, passThroughEvents, passThroughActions,
} from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/trackSelectionData';

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

const GanttExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.gantt(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);

  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="ganttTrackSelection" />
    </React.Fragment>
  );
};

export default GanttExample;
