import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefaultConfig';
import barTypesDatset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset1';
import barTypesDatset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset2';
import barTypesDatset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset3';
import barTypesDatset4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset4';
import barTypesDatset5 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset5';
import barTypesDatset6 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset6';
import barTypesDatset7 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset7';
import barTypesDatset8 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset8';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttBarType'));
graphConfig.showActionLegend = false;
graphConfig.dateline = [];
const contentArray = [barTypesDatset1, barTypesDatset2, barTypesDatset3, barTypesDatset4, barTypesDatset5, barTypesDatset6, barTypesDatset7, barTypesDatset8];
const dataset = utils.deepClone(contentArray);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttBarType" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
