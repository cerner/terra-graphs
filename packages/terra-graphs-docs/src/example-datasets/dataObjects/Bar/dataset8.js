import Carbon from '@cerner/carbon-graphs';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'negative_bar',
  label: {
    display: 'Dataset 1',
  },
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadBarPopup,
  values: [
    {
      x: 1,
      y: -15,
    },
    {
      x: 2,
      y: -8,
    },
    {
      x: 3,
      y: -9,
    },
    {
      x: 4,
      y: -10,
    },
    {
      x: 5,
      y: -7,
    },
  ],
};

export default data;
