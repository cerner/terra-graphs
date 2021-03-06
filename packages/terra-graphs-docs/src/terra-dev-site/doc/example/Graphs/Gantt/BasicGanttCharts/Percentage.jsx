import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefault';
import percentageData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/percentageData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttPercentage'));
graphConfig.showActionLegend = false;
graphConfig.dateline = [];
const dataset = utils.deepClone(percentageData);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttPercentage" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
