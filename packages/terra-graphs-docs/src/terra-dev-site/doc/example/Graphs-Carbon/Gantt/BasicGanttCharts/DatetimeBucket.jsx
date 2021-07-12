import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Gantt/GanttChart.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefault';
import {
  dateTimeBucketData, lowerStepTickValues, midpointTickValues, upperStepTickValues,
} from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dateTimeBucketData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttBarType'));
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

const GanttExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.gantt(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);

  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="ganttBarType" />
    </React.Fragment>
  );
};

export default GanttExample;
