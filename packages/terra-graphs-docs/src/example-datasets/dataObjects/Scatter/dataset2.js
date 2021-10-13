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
      x: 90,
      y: 0,
    },
    {
      x: 92,
      y: 50,
    },
    {
      x: 103,
      y: 60,
    },
    {
      x: 117,
      y: 80,
    },
    {
      x: 121,
      y: 120,
    },
    {
      x: 128,
      y: 130,
    },
    {
      x: 135,
      y: 180,
    },
    {
      x: 138,
      y: 185,
    },
    {
      x: 141,
      y: 200,
    },
    {
      x: 149,
      y: 220,
    },
  ],
};

export default data;
