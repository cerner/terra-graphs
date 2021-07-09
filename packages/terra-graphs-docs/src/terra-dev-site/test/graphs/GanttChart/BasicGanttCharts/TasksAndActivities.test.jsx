import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Gantt/GanttChart.module.scss';
import getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefault';
import loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';
import tasksData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/tasksData';
import activitiesData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activitiesData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttTasksAndActivities'));
graphConfig.showActionLegend = false;
const dataset = loadTracks(tasksData, activitiesData, [], [], 4);

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
      <div id="ganttTasksAndActivities" />
    </React.Fragment>
  );
};

export default GanttExample;
