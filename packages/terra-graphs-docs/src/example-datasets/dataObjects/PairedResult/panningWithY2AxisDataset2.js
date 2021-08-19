import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'panning_with_y2_axis_dataset_2',
  label: {
    high: {
      display: 'Dataset_2_High',
    },
    mid: {
      display: 'Dataset_2_Median',
    },
    low: {
      display: 'Dataset_2_Low',
    },
  },
  shape: {
    high: Carbon.helpers.SHAPES.DARK.TRIANGLE,
    mid: Carbon.helpers.SHAPES.DARK.SQUARE,
    low: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,
  },
  color: {
    high: Carbon.helpers.COLORS.BLACK,
    mid: Carbon.helpers.COLORS.ORANGE,
    low: Carbon.helpers.COLORS.BLACK,
  },
  onClick: loadPopup,
  yAxis: 'y2',
  values: [
    {
      high: {
        x: '2016-01-02T03:30:00.000Z',
        y: 180,
      },
      mid: {
        x: '2016-01-02T03:30:00.000Z',
        y: 60,
      },
      low: {
        x: '2016-01-02T03:30:00.000Z',
        y: 20,
      },
    },
    {
      high: {
        x: '2016-01-02T05:30:00.000Z',
        y: 90,
      },
      mid: {
        x: '2016-01-02T05:30:00.000Z',
        y: 40,
      },
      low: {
        x: '2016-01-02T05:30:00.000Z',
        y: 10,
      },
    },
  ],
};

export default data;
