import Carbon from '@cerner/carbon-graphs';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'paired_result_y2_axis_dataset_1',
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
  onClick: loadPopup,
  values: [
    {
      high: {
        x: '2016-05-01T12:00:00Z',
        y: 150,
        isCritical: false,
      },
      mid: {
        x: '2016-05-01T12:00:00Z',
        y: 40,
      },
      low: {
        x: '2016-05-01T12:00:00Z',
        y: 10,
        isCritical: false,
      },
    },
    {
      high: {
        x: '2016-08-17T12:00:00Z',
        y: 110,
      },
      mid: {
        x: '2016-08-17T12:00:00Z',
        y: 70,
      },
      low: {
        x: '2016-08-17T12:00:00Z',
        y: 30,
      },
    },
    {
      high: {
        x: '2016-10-17T12:00:00Z',
        y: 160,
      },
      mid: {
        x: '2016-10-17T12:00:00Z',
        y: 120,
      },
      low: {
        x: '2016-10-17T12:00:00Z',
        y: 100,
      },
    },
    {
      high: {
        x: '2017-03-17T12:00:00Z',
        y: 190,
      },
      mid: {
        x: '2017-03-17T12:00:00Z',
        y: 90,
      },
      low: {
        x: '2017-03-17T12:00:00Z',
        y: 60,
      },
    },
    {
      low: {
        x: '2017-07-17T12:00:00Z',
        y: 10,
      },
    },
    {
      high: {
        x: '2018-02-17T12:00:00Z',
        y: 180,
      },
    },
  ],
};

export default data;
