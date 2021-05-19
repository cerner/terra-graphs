import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import ganttDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gnatt/ganttDefault';
import contentArray from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(ganttDefault('#ganttBarType'));
graphConfig.showActionLegend = false;
graphConfig.dateline = [];

const dataset = utils.deepClone(contentArray);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttBarType" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
