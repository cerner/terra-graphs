import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'panning_with_y2_axis_dataset_1',
  label: {
    high: {
      display: 'Dataset_1_High',
    },
    mid: {
      display: 'Dataset_1_Median',
    },
    low: {
      display: 'Dataset_1_Low',
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
        x: '2016-01-02T02:30:00.000Z',
        y: 110,
      },
      mid: {
        x: '2016-01-02T02:30:00.000Z',
        y: 70,
      },
      low: {
        x: '2016-01-02T02:30:00.000Z',
        y: 30,
      },
    },
  ],
};

export default data;
