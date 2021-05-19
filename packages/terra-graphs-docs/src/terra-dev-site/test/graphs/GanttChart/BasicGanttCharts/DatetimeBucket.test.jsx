import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import ganttDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gnatt/ganttDefault';
import {
  dateTimeBucketData, lowerStepTickValues, midpointTickValues, upperStepTickValues,
} from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dateTimeBucketData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(ganttDefault('#ganttDatetimeBucket'));
graphConfig.axis.x.lowerLimit = new Date(2018, 1, 1, 23).toISOString();
graphConfig.axis.x.upperLimit = new Date(2018, 1, 3, 1).toISOString();
graphConfig.axis.x.ticks = {
  format: '%H',
  lowerStepTickValues,
  midpointTickValues,
  upperStepTickValues,
};
graphConfig.showActionLegend = false;
graphConfig.dateline = [];

const dataset = utils.deepClone(dateTimeBucketData);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttDatetimeBucket" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
