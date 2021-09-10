import { loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const barTypesDataset6 = {
  key: 'track 5',
  trackLabel: {
    display: 'Activity',
    onClick: loadXAndYAxisLabelPopup,
  },
  activities: [
    {
      key: 'Activity',
      label: {
        display: 'Story Apex Activity',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
    },
  ],
};

export default barTypesDataset6;
