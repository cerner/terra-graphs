import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefault';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import tasksData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/tasksData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttDefaultConfig('#simpleGantt'));
graphConfig.showActionLegend = false;
const dataset = loadTracks(tasksData, [], [], [], 4);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="simpleGantt" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
