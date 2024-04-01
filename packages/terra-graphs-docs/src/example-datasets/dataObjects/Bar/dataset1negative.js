import Carbon from '@cerner/carbon-graphs';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'dataset_bar_1',
  label: {
    display: 'Dataset 1',
  },
  color: Carbon.helpers.COLORS.LIGHT_PURPLE,
  onClick: loadBarPopup,
  values: [
    {
      x: 1,
      y: -10,
    },
    {
      x: 2,
      y: -15,
    },
    {
      x: 3,
      y: -18,
    },
    {
      x: 4,
      y: -6,
    },
    {
      x: 6,
      y: -10,
    },
  ],
};

export default data;
