import {
  loadTaskPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const taskDataset3 = [
  {
    key: 'task4',
    onClick: loadTaskPopup,
    label: {
      display: 'Story Charming',
    },
    startDate: new Date(2018, 6, 1).toISOString(),
    endDate: new Date(2018, 7, 10).toISOString(),
  },
  {
    key: 'task5',
    onClick: loadTaskPopup,
    label: {
      display: 'Story Broccoli',
    },
    startDate: new Date(2018, 10, 1).toISOString(),
    endDate: new Date(2018, 10, 1).toISOString(),
  },
];

export default taskDataset3;
