import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const taskDataset4 = [
  {
    key: 'task6',
    onClick: loadTaskPopup,
    label: {
      display: 'Story Apex',
    },
    startDate: new Date(2018, 6, 1).toISOString(),
    endDate: new Date(2018, 9, 10).toISOString(),
  },
];

export default taskDataset4;
