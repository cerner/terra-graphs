import React from 'react';
import GanttChart from '@cerner/terra-graphs/lib/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefaultConfig';
import percentageData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/percentageData';

const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttPercentage'));
const dataset = [utils.deepClone(percentageData)];

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttPercentage" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
