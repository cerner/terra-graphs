import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const actionDataset1 = [
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
];

export default actionDataset1;
