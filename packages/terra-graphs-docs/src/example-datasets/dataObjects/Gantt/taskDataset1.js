import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const taskDataset1 = [
  {
    key: 'task1',
    onClick: loadTaskPopup,
    label: {
      display: 'Story Apex',
    },
    startDate: new Date(2018, 2, 1).toISOString(),
    endDate: new Date(2018, 3, 10).toISOString(),
  },
  {
    key: 'task2',
    onClick: loadTaskPopup,
    label: {
      display: 'Story Broccoli',
    },
    startDate: new Date(2018, 8, 1).toISOString(),
    endDate: new Date(2018, 9, 10).toISOString(),
  },
];

export default taskDataset1;
