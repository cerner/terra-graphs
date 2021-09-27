import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'uid_1',
  label: {
    display: 'Data Label 1',
  },
  shape: Carbon.helpers.SHAPES.DARK.CIRCLE,
  onClick: loadPopup,
  values: [
    {
      x: new Date(2016, 0, 1, 1, 5).toISOString(),
      y: 5,
    },
    {
      x: new Date(2016, 0, 1, 2, 15).toISOString(),
      y: 11,
    },
    {
      x: new Date(2016, 0, 1, 3, 15).toISOString(),
      y: 12,
    },
    {
      x: new Date(2016, 0, 1, 4, 15).toISOString(),
      y: 16,
    },
    {
      x: new Date(2016, 0, 1, 5, 15).toISOString(),
      y: 17,
    },
    {
      x: new Date(2016, 0, 1, 6, 15).toISOString(),
      y: 9,
    },
    {
      x: new Date(2016, 0, 1, 7, 0).toISOString(),
      y: 11,
    },
    {
      x: new Date(2016, 0, 1, 8, 15).toISOString(),
      y: 12,
    },
    {
      x: new Date(2016, 0, 1, 9, 45).toISOString(),
      y: 16,
    },
    {
      x: new Date(2016, 0, 1, 12, 15).toISOString(),
      y: 17,
    },
    {
      x: new Date(2016, 0, 1, 13, 15).toISOString(),
      y: 28,
    },
    {
      x: new Date(2016, 0, 1, 14, 15).toISOString(),
      y: 12,
    },
    {
      x: new Date(2016, 0, 1, 19, 45).toISOString(),
      y: 13,
    },
    {
      x: new Date(2016, 0, 1, 21, 15).toISOString(),
      y: 14,
    },
  ],
  yAxis: 'y',
};

export default data;
