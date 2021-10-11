import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'stacked_bar_2',
  label: {
    display: 'Dataset 2',
  },
  group: 'stacked_bar_1',
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
};

export default data;
