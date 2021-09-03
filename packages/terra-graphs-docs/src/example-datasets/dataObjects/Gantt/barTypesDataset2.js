import {
  loadXAndYAxisLabelPopup,
  loadTaskPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const barTypesDataset2 = {
  key: 'track 1',
  trackLabel: {
    display: 'Hollow only',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'default',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
      style: {
        isHollow: true,
      },
    },
  ],
};

export default barTypesDataset2;
