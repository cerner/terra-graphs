import Carbon from '@cerner/carbon-graphs';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'dynamic_dataset_1',
  label: {
    display: 'Data Label 1',
  },
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadBarPopup,
  values: [
    {
      x: new Date(2016, 0, 1, 3).toISOString(),
      y: 15,
    },
    {
      x: new Date(2016, 0, 1, 6).toISOString(),
      y: 19,
    },
    {
      x: new Date(2016, 0, 1, 9).toISOString(),
      y: 10,
    },
    {
      x: new Date(2016, 0, 1, 12).toISOString(),
      y: 13,
    },
    {
      x: new Date(2016, 0, 1, 15).toISOString(),
      y: 15,
    },
  ],
};

export default data;
