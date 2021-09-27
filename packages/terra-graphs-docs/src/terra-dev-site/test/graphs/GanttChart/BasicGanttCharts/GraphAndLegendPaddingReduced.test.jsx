import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import GanttChart from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttReducedPaddingConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';
import actionDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset2';

const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttGraphAndLegendPaddingReduced'));
const actions = [utils.deepClone(actionDataset1), utils.deepClone(actionDataset2)];
const dataset = loadTracks([], [], [], actions, 2);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttGraphAndLegendPaddingReduced" graphConfig={graphConfig} dataset={dataset} />
  </>
);
