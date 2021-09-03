import {
  loadXAndYAxisLabelPopup,
  loadTaskPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const barTypesDataset5 = {
  key: 'track 4',
  trackLabel: {
    display: 'Task Hashed',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'task_hash',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
      style: {
        isHashed: true,
      },
    },
  ],
};

export default barTypesDataset5;
