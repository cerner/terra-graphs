import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadBarPopup,
} from '@cerner/terra-graphs-docs/src/example-datasets/popup';

const data = {
  key: 'stacked_bar_3',
  label: {
    display: 'Dataset 3',
  },
  group: 'stacked_bar_1',
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadBarPopup,
  values: [
    {
      x: 1,
      y: 30,
    },
    {
      x: 2,
      y: 8,
    },
    {
      x: 3,
      y: 9,
    },
    {
      x: 4,
      y: 10,
    },
    {
      x: 5,
      y: 7,
    },
  ],
};

export default data;
