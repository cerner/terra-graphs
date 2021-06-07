import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = [
  {
    key: 'uid_1',
    graphType: 'Line',
    label: {
      display: 'Line',
    },
    shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,
    color: Carbon.helpers.COLORS.BLUE,
    onClick: loadPopup,
    values: new Array(50).fill('').map((_, i) => ({
      y: Math.sin(i) * 5 + 10,
      x: 10 + i * 5,
    })),
  },
  {
    key: 'uid_2',
    graphType: 'Paired Result',
    label: {
      high: {
        display: 'High',
      },
      mid: {
        display: 'Median',
      },
      low: {
        display: 'Low',
      },
    },
    yAxis: 'y2',
    shape: {
      high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,
      mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,
      low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,
    },
    color: {
      high: Carbon.helpers.COLORS.BLACK,
      mid: Carbon.helpers.COLORS.BLACK,
      low: Carbon.helpers.COLORS.BLACK,
    },
    onClick: loadPopup,
    values: [
      {
        high: {
          x: 45,
          y: 200,
        },
        mid: {
          x: 45,
          y: 146,
        },
        low: {
          x: 45,
          y: 75,
        },
      },
      {
        high: {
          x: 160,
          y: 110,
        },
        mid: {
          x: 160,
          y: 70,
        },
        low: {
          x: 160,
          y: 30,
        },
      },
      {
        high: {
          x: 220,
          y: 110,
        },
        mid: {
          x: 220,
          y: 70,
        },
        low: {
          x: 220,
          y: 30,
        },
      },
    ],
  },
];

export default data;
