import React from 'react';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGanttLabelTruncationConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttLabelTruncationConfig';
import labelTruncationDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/labelTruncationDataset';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGanttLabelTruncationConfig('#ganttLabelTruncation'));
const dataset = [utils.deepClone(labelTruncationDataset)];

const GanttLabelTruncationExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.gantt(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);

  return (
    <ExampleGraphContainer id="ganttLabelTruncation" />
  );
};

export default GanttLabelTruncationExample;
