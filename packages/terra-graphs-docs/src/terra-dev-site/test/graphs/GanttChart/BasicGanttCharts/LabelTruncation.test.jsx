import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefault';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttDefaultConfig('#simpleGantt'));
graphConfig.showActionLegend = false;
graphConfig.dateline = [];
const dataset = [{
  key: 'track 1',
  trackLabel: {
    display:
    'Really really long project name that cannot be shown realistically',
  },
}];

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="simpleGantt" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
