import Carbon from '@cerner/carbon-graphs';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'paired_result_dataset',
  graphType: 'Paired Result',
  label: {
    high: {
      display: 'Paired Result High',
    },
    mid: {
      display: 'Paired Result Median',
    },
    low: {
      display: 'Paired Result Low',
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
};

export default data;
