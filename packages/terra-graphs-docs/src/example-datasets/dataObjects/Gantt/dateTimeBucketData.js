import { loadXAndYAxisLabelPopup, loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const dateTimeBucketData = {
  key: 'track 1',
  trackLabel: {
    display: 'Project A',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'task1',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 1, 2, 9).toISOString(),
      endDate: new Date(2018, 1, 2, 19).toISOString(),
    },
  ],
};

export default dateTimeBucketData;
