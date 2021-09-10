import { loadXAndYAxisLabelPopup, loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const barTypesDataset1 = {
  key: 'track 0',
  trackLabel: {
    display: 'Default',
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
    },
  ],
};

export default barTypesDataset1;
