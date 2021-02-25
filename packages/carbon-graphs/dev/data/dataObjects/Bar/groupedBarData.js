import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadBarPopup,
} from '../../../examples/popup';

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
    key: 'uid_bar_2',
    label: {
      display: 'Data Label 2',
    },
    color: Carbon.helpers.COLORS.LIGHT_PURPLE,
    onClick: loadBarPopup,
    yAxis: 'y2',
    values: [
      {
        x: 1,
        y: 10,
      },
      {
        x: 2,
        y: 15,
      },
      {
        x: 3,
        y: 18,
      },
      {
        x: 4,
        y: 6,
      },
      {
        x: 6,
        y: 10,
      },
    ],
  },
  {
    key: 'uid_bar_3',
    label: {
      display: 'Data Label 3',
    },
    color: Carbon.helpers.COLORS.BLUE,
    onClick: loadBarPopup,
    values: [
      {
        x: 1,
        y: 15,
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
        y: 8,
      },
    ],
  },
];

export default data;
