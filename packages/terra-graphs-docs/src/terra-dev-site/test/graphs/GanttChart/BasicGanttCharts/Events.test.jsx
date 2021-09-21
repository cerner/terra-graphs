import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefaultConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import taskDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset2';
import eventDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/eventDataset1';

const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttEvents'));
graphConfig.showActionLegend = false;
graphConfig.dateline = [];
const dataset = loadTracks([taskDataset2], [], [eventDataset1], [], 1);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttEvents" graphConfig={graphConfig} dataset={dataset} />
  </>
);
