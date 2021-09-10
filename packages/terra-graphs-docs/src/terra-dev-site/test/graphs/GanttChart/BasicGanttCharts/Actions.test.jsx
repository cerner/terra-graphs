import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getGanttActionConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttActionConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';
import actionDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset2';

const graphConfig = utils.deepClone(getGanttActionConfig('#ganttActions'));
graphConfig.showActionLegend = true;
const actions = [utils.deepClone(actionDataset1), utils.deepClone(actionDataset2)];
const dataset = loadTracks([], [], [], actions, 2);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttActions" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
