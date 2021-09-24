import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'bubble_dataset_1',
  label: {
    display: 'Bubble Data Label 1',
  },
  graphType: 'BubbleMultipleDataset',
  color: Carbon.helpers.COLORS.GREEN,
  onClick: loadPopup,
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
