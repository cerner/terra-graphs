import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'uid_bar_1',
  label: {
    display: 'Data Label 1',
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
  regions: [
    {
      axis: 'y',
      x: 1,
      start: 7,
      end: 7,
    },
    {
      axis: 'y',
      x: 2,
      start: 13,
      end: 13,
    },
    {
      axis: 'y',
      x: 3,
      start: 17,
      end: 17,
    },
    {
      axis: 'y',
      x: 4,
      start: 4,
      end: 4,
    },
  ],
};

export default data;
