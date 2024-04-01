import Carbon from '@cerner/carbon-graphs';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'bubble_dataset_2',
  label: {
    display: 'Bubble Data Label 2',
  },
  graphType: 'BubbleMultipleDataset',
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadPopup,
  weight: {
    min: 40,
    max: 450,
  },
  values: [
    {
      x: 1,
      y: 25,
      weight: 150,
    },
    {
      x: 2,
      y: 15,
      weight: 300,
    },
    {
      x: 3,
      y: 2,
      weight: 200,
    },
    {
      x: 4,
      y: 28,
      weight: 400,
    },
    {
      x: 5,
      y: 23,
      weight: 450,
    },
  ],
};

export default data;
