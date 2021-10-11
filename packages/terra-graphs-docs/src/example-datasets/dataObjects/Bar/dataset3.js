import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'grouped_bar_3',
  label: {
    display: 'Dataset 3',
  },
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadBarPopup,
  values: [
    {
      x: 1,
      y: 15,
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
      y: 8,
    },
  ],
};

export default data;
