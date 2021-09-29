import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'stacked_bar_4',
  label: {
    display: 'Dataset 4',
  },
  color: Carbon.helpers.COLORS.GREEN,
  onClick: loadBarPopup,
  values: [
    {
      x: 1,
      y: 30,
    },
    {
      x: 2,
      y: 10,
    },
    {
      x: 3,
      y: 13,
    },
    {
      x: 4,
      y: 15,
    },
    {
      x: 5,
      y: 18,
    },
  ],
  regions: [
    {
      axis: 'y',
      x: 1,
      start: 10,
      end: 10,
    },
    {
      axis: 'y',
      x: 2,
      start: 40,
      end: 40,
    },
    {
      axis: 'y',
      x: 3,
      start: 55,
      end: 55,
    },
    {
      axis: 'y',
      x: 4,
      start: 30,
      end: 30,
    },
  ],
};

export default data;
