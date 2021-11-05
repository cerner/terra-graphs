import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '../../popup';

const scheduled = {
  path: [
    {
      id: 'calendar',
      d:
        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'
        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',
    },
    {
      id: 'circle',
      fill: '#78C346',
      d:
        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',
    },
    {
      id: 'check',
      fill: '#FFF',
      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',
    },
  ],
  options: {
    x: -7,
    y: -7,
    scale: 0.4,
  },
};

const tasksData = [
  {
    key: 'task10',
    onClick: loadTaskPopup,
    label: {
      display: 'Story Apex',
    },
    startDate: new Date(2016, 0, 1, 9).toISOString(),
    endDate: new Date(2016, 0, 1, 12).toISOString(),
  },
  {
    key: 'task11',
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

const eventData = [
  {
    key: 'uid_event_4',
    label: {
      display: 'Defect A',
    },
    onClick: loadPopup,
    shape: scheduled,
    color: Carbon.helpers.COLORS.BLACK,
    values: [new Date(2016, 0, 1, 5, 15).toISOString()],
  },
];

const activitiesData = [
  {
    key: 'activity5',
    label: {
      display: 'activity5',
    },
    onClick: () => {},
    color: '#FFDF00',
    startDate: new Date(2016, 0, 1, 12).toISOString(),
    endDate: new Date(2016, 0, 1, 15).toISOString(),
    style: {
      isDotted: false,
      isHollow: false,
    },
  },
];

const dynamicPanningDataset1 = {
  key: 'track 0',
  trackLabel: {
    display: 'Default',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: tasksData,
  actions: actionsData,
  events: eventData,
  activities: activitiesData,
};
export default dynamicPanningDataset1;
