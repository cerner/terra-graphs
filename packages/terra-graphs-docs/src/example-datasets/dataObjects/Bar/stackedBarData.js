import Carbon from '@cerner/carbon-graphs';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = [
  {
    key: 'uid_bar_1',
    label: {
      display: 'Data Label 1',
    },
    color: Carbon.helpers.COLORS.GREEN,
    onClick: loadBarPopup,
    values: [
      {
        x: 1,
        y: 30,
      },
      {
        x: 2,
        y: 10,
      },
      {
        x: 3,
        y: 13,
      },
      {
        x: 4,
        y: 15,
      },
      {
        x: 5,
        y: 18,
      },
    ],
  },
  {
    key: 'uid_bar_4',
    label: {
      display: 'Data Label 4',
    },
    group: 'uid_bar_1',
    color: Carbon.helpers.COLORS.LIGHT_PURPLE,
    onClick: loadBarPopup,
    values: [
      {
        x: 1,
        y: 30,
      },
      {
        x: 2,
        y: 5,
      },
      {
        x: 3,
        y: 8,
      },
      {
        x: 4,
        y: 10,
      },
      {
        x: 5,
        y: 10,
      },
      {
        x: 6,
        y: 10,
      },
    ],
  },
  {
    key: 'uid_bar_5',
    label: {
      display: 'Data Label 5',
    },
    group: 'uid_bar_1',
    color: Carbon.helpers.COLORS.BLUE,
    onClick: loadBarPopup,
    values: [
      {
        x: 1,
        y: 30,
      },
      {
        x: 2,
        y: 8,
      },
      {
        x: 3,
        y: 9,
      },
      {
        x: 4,
        y: 10,
      },
      {
        x: 5,
        y: 7,
      },
    ],
  },
];

export default data;
