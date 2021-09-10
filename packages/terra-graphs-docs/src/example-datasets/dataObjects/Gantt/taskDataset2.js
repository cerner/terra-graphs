import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const taskDataset2 = [
  {
    key: 'task3',
    onClick: loadTaskPopup,
    label: {
      display: 'Story Apex',
    },
    startDate: new Date(2018, 3, 1).toISOString(),
    endDate: new Date(2018, 7, 10).toISOString(),
  },
];

export default taskDataset2;
