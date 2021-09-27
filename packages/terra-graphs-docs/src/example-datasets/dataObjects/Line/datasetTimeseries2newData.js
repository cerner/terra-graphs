import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'uid_2',
  label: {
    display: 'Data Label 2',
  },
  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadPopup,
  yAxis: 'y2',
  values: [
    {
      x: new Date(2016, 0, 1, 1, 5).toISOString(),
      y: 100,
    },
    {
      x: new Date(2016, 0, 1, 2, 15).toISOString(),
      y: 50,
    },
    {
      x: new Date(2016, 0, 1, 3, 15).toISOString(),
      y: 60,
    },
    {
      x: new Date(2016, 0, 1, 4, 15).toISOString(),
      y: 80,
    },
    {
      x: new Date(2016, 0, 1, 5, 15).toISOString(),
      y: 120,
    },
    {
      x: new Date(2016, 0, 1, 6, 15).toISOString(),
      y: 130,
    },
    {
      x: new Date(2016, 0, 1, 8, 15).toISOString(),
      y: 185,
    },
    {
      x: new Date(2016, 0, 1, 9, 45).toISOString(),
      y: 200,
    },
    {
      x: new Date(2016, 0, 1, 12, 15).toISOString(),
      y: 220,
    },
  ],
};

export default data;
