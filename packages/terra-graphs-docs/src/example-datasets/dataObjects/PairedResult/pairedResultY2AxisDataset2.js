import Carbon from '@cerner/carbon-graphs';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'paired_result_y2_axis_dataset_2',
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
        x: '2017-05-01T11:00:00Z',
        y: 300,
      },
      mid: {
        x: '2017-05-01T11:00:00Z',
        y: 250,
      },
      low: {
        x: '2017-05-01T11:00:00Z',
        y: 175,
      },
    },
    {
      high: {
        x: '2017-08-17T13:00:00Z',
        y: 300,
      },
      mid: {
        x: '2017-08-17T13:00:00Z',
        y: 170,
      },
      low: {
        x: '2017-08-17T13:00:00Z',
        y: 130,
      },
    },
    {
      high: {
        x: '2017-10-17T15:00:00Z',
        y: 250,
      },
      mid: {
        x: '2017-10-17T15:00:00Z',
        y: 220,
      },
      low: {
        x: '2017-10-17T15:00:00Z',
        y: 200,
      },
    },
  ],
};

export default data;
