import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
  loadBarPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = [
  {
    key: 'uid_bar_1',
    label: {
      display: 'Data Label 1',
    },
    graphType: 'Bar',
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
    key: 'uid_1',
    label: {
      display: 'Data Label 1',
    },
    graphType: 'Line',
    color: Carbon.helpers.COLORS.BLACK,
    onClick: loadPopup,
    values: new Array(7).fill('').map((_, i) => ({
      y: Math.sin(i) * Math.PI + 20,
      x: i + 0.5,
    })),
  },
];

export default data;
