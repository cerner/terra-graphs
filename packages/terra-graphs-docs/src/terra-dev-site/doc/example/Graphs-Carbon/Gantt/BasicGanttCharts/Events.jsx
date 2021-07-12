import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Gantt/GanttChart.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefault';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import tasksData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/tasksData';
import eventsData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/eventsData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttEvents'));
graphConfig.showActionLegend = false;
graphConfig.dateline = [];
const dataset = loadTracks([tasksData[1]], [], [eventsData[0]], [], 1);

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
      <div id="ganttEvents" />
    </React.Fragment>
  );
};

export default GanttExample;
