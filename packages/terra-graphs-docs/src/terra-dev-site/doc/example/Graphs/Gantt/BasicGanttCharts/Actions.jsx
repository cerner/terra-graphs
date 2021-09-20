import React from 'react';
import GanttChart from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttActionConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttActionConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';
import actionDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset2';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttActionConfig('#ganttActions'));
graphConfig.showActionLegend = true;
const actions = [utils.deepClone(actionDataset1), utils.deepClone(actionDataset2)];
const dataset = loadTracks([], [], [], actions, 2);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttActions" graphConfig={graphConfig} dataset={dataset} />
  </>
);
