import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttReducedPaddingConfig';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';
import actionDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset2';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttGraphAndLegendPaddingReduced'));
const actions = [utils.deepClone(actionDataset1), utils.deepClone(actionDataset2)];
const dataset = loadTracks([], [], [], actions, 2);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttGraphAndLegendPaddingReduced" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
