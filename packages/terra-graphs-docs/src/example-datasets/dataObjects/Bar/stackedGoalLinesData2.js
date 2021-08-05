import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadBarPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'stacked_bar_5',
  label: {
    display: 'Dataset 5',
  },
  group: 'stacked_bar_4',
  color: Carbon.helpers.COLORS.LIGHT_PURPLE,
  onClick: loadBarPopup,
  values: [
    {
      x: 1,
      y: 30,
    },
    {
      x: 2,
      y: 5,
    },
    {
      x: 3,
      y: 8,
    },
    {
      x: 4,
      y: 10,
    },
    {
      x: 5,
      y: 10,
    },
    {
      x: 6,
      y: 10,
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
