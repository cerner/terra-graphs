import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const actionsData = [
  [
    {
      key: 'uid_action_1',
      onClick: loadPopup,
      values: [new Date(2018, 2, 1, 6, 15).toISOString()],
    },
    {
      key: 'uid_action_2',
      onClick: loadPopup,
      values: [new Date(2018, 7, 1, 6, 15).toISOString()],
    },
  ],
  [
    {
      key: 'uid_action_1',
      onClick: loadPopup,
      values: [
        new Date(2018, 3, 1, 6, 15).toISOString(),
        new Date(2018, 4, 1, 7, 15).toISOString(),
      ],
    },
    {
      key: 'uid_action_2',
      onClick: loadPopup,
      values: [new Date(2018, 5, 1, 9, 15).toISOString()],
    },
  ],
  [
    {
      key: 'uid_action_1',
      onClick: loadPopup,
      values: [new Date(2016, 4, 1, 6, 15).toISOString()],
    },
    {
      key: 'uid_action_2',
      onClick: loadPopup,
      values: [new Date(2016, 4, 1, 7, 15).toISOString()],
    },
  ],
];

export default actionsData;
