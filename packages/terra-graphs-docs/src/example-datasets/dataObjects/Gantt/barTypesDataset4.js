import {
  loadXAndYAxisLabelPopup,
  loadTaskPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const barTypesDataset4 = {
  key: 'track 3',
  trackLabel: {
    display: 'Percentage',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'percentage',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
      percentage: 30,
    },
  ],
};

export default barTypesDataset4;
