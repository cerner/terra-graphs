import React from 'react';
import GanttChart from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getGanttLabelTruncationConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttLabelTruncationConfig';
import labelTruncationDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/labelTruncationDataset';

const graphConfig = utils.deepClone(getGanttLabelTruncationConfig('#ganttLabelTruncation'));
const dataset = [utils.deepClone(labelTruncationDataset)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <GanttChart graphID="ganttLabelTruncation" graphConfig={graphConfig} dataset={dataset} />
  </>
);
