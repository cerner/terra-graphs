import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { loadPopup } from '@cerner/carbon-graphs/dev/examples/popup';

const tasksData = [
  {
    key: 'task1',
    onClick: loadTaskPopup,
    label: {
      display: 'Story Apex',
    },
    startDate: new Date(2016, 0, 1, 8).toISOString(),
    endDate: new Date(2016, 0, 1, 12).toISOString(),
  },
  {
    key: 'task2',
    onClick: loadTaskPopup,
    label: {
      display: 'Story Broccoli',
    },
    startDate: new Date(2016, 0, 1, 15).toISOString(),
    endDate: new Date(2016, 0, 1, 23).toISOString(),
  },
];

const actionsData = [
  {
    key: 'uid_action_1',
    onClick: loadPopup,
    values: [new Date(2016, 0, 1, 6, 15).toISOString()],
  },
  {
    key: 'uid_action_2',
    onClick: loadPopup,
    values: [new Date(2016, 0, 1, 7, 15).toISOString()],
  },
];

const simplePanningData = [{
  key: 'track 0',
  trackLabel: {
    display: 'Default',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: tasksData,
  actions: actionsData,
},
];

export default simplePanningData;
