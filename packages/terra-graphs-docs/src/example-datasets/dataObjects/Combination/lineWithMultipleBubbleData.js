import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = [
  {
    key: 'uid_bar_1',
    label: {
      display: 'Data Label 1',
    },
    graphType: 'BubbleMultipleDataset',
    color: Carbon.helpers.COLORS.GREEN,
    onClick: loadPopup,
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
    graphType: 'BubbleMultipleDataset',
    color: Carbon.helpers.COLORS.BLUE,
    onClick: loadPopup,
    weight: {
      min: 40,
      max: 450,
    },
    values: [
      {
        x: 1,
        y: 25,
        weight: 150,
      },
      {
        x: 2,
        y: 15,
        weight: 300,
      },
      {
        x: 3,
        y: 2,
        weight: 200,
      },
      {
        x: 4,
        y: 28,
        weight: 400,
      },
      {
        x: 5,
        y: 23,
        weight: 450,
      },
    ],
  },
  {
    key: 'uid_1',
    label: {
      display: 'Data Label 3',
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
