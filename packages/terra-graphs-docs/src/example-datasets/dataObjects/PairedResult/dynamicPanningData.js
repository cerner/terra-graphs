import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = [
  {
    key: 'uid_1',
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
    onClick: loadPopup,
    shape: {
      high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,
      mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,
      low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,
    },
    color: {
      high: Carbon.helpers.COLORS.BLACK,
      mid: Carbon.helpers.COLORS.BLUE,
      low: Carbon.helpers.COLORS.BLACK,
    },
    values: [
      {
        high: {
          x: '2016-01-02T00:30:00.000Z',
          y: 150,
        },
        mid: {
          x: '2016-01-02T00:30:00.000Z',
          y: 40,
        },
        low: {
          x: '2016-01-02T00:30:00.000Z',
          y: 10,
        },
      },
      {
        high: {
          x: '2016-01-02T05:30:00.000Z',
          y: 110,
        },
        mid: {
          x: '2016-01-02T05:30:00.000Z',
          y: 70,
        },
        low: {
          x: '2016-01-02T05:30:00.000Z',
          y: 30,
        },
      },
    ],
  },
  {
    key: 'uid_1',
    values: [
      {
        high: {
          x: '2016-01-02T00:30:00.000Z',
          y: 160,
        },
        mid: {
          x: '2016-01-02T00:30:00.000Z',
          y: 40,
        },
        low: {
          x: '2016-01-02T00:30:00.000Z',
          y: 10,
        },
      },
      {
        high: {
          x: '2016-01-02T03:30:00.000Z',
          y: 100,
        },
        mid: {
          x: '2016-01-02T03:30:00.000Z',
          y: 30,
        },
        low: {
          x: '2016-01-02T03:30:00.000Z',
          y: 10,
        },
      },
      {
        high: {
          x: '2016-01-02T05:30:00.000Z',
          y: 100,
        },
        mid: {
          x: '2016-01-02T05:30:00.000Z',
          y: 70,
        },
        low: {
          x: '2016-01-02T05:30:00.000Z',
          y: 30,
        },
      },
    ],
  },
];

export default data;
