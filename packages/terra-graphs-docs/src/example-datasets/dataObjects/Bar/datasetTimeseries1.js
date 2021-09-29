import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'uid_bar_t1',
  label: {
    display: 'Data Label t1',
  },
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadBarPopup,
  values: [
    {
      x: new Date(2018, 0, 1).toISOString(),
      y: 15,
    },
    {
      x: new Date(2018, 0, 2).toISOString(),
      y: 19,
    },
    {
      x: new Date(2018, 0, 3).toISOString(),
      y: 10,
    },
    {
      x: new Date(2018, 0, 4).toISOString(),
      y: 13,
    },
    {
      x: new Date(2018, 0, 5).toISOString(),
      y: 15,
    },
  ],
};

export default data;
