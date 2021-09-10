import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Gantt/GanttChart.module.scss';
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
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="ganttDatetimeBucket" />
    </React.Fragment>
  );
};

export default GanttDatetimeBucketExample;
