import Carbon from '@cerner/carbon-graphs';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'dataset_bar_2',
  label: {
    display: 'Dataset 1',
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
};

export default data;
