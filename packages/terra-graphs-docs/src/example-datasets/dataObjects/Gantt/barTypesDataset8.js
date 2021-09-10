import { loadXAndYAxisLabelPopup, loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const barTypesDataset8 = {
  key: 'track 7',
  trackLabel: {
    display: 'Activity and Task',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'Task',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex Task',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
    },
  ],
  activities: [
    {
      key: 'Activity and Task',
      label: {
        display: 'Combination',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
    },
  ],
};

export default barTypesDataset8;
