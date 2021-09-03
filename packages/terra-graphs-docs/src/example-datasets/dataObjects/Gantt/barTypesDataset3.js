import {
  loadTaskPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const barTypesDataset3 = {
  key: 'track 2',
  trackLabel: {
    display: 'Dotted, Hollow',
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
        isDotted: true,
        isHollow: true,
      },
    },
  ],
};

export default barTypesDataset3;
