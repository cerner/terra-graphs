import React from 'react';
import GanttChart from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttDatetimeBucketConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDatetimeBucketConfig';
import dateTimeBucketData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dateTimeBucketData';

const graphConfig = utils.deepClone(getGanttDatetimeBucketConfig('#ganttDatetimeBucket'));
const dataset = [utils.deepClone(dateTimeBucketData)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttDatetimeBucket" graphConfig={graphConfig} dataset={dataset} />
  </>
);
