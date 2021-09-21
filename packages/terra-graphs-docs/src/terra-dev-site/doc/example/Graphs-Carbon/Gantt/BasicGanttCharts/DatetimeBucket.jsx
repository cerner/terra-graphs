import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Gantt/GanttChart.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getGanttDatetimeBucketConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDatetimeBucketConfig';
import dateTimeBucketData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dateTimeBucketData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getGanttDatetimeBucketConfig('#ganttDatetimeBucket'));
const dataset = [utils.deepClone(dateTimeBucketData)];

const GanttDatetimeBucketExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.gantt(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);

  return (
    <ExampleGraphContainer id="ganttDatetimeBucket" />
  );
};

export default GanttDatetimeBucketExample;
