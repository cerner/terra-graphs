import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'grouped_bar_4',
  label: {
    display: 'Dataset 4',
  },
  color: Carbon.helpers.COLORS.LIGHT_PURPLE,
  onClick: loadBarPopup,
  yAxis: 'y2',
  values: [
    {
      x: 1,
      y: 10,
    },
    {
      x: 2,
      y: 15,
    },
    {
      x: 3,
      y: 18,
    },
    {
      x: 4,
      y: 6,
    },
    {
      x: 6,
      y: 10,
    },
  ],
  regions: [
    {
      axis: 'y2',
      x: 1,
      start: 7,
      end: 7,
    },
    {
      axis: 'y2',
      x: 2,
      start: 13,
      end: 13,
    },
    {
      axis: 'y2',
      x: 3,
      start: 17,
      end: 17,
    },
    {
      axis: 'y2',
      x: 4,
      start: 4,
      end: 4,
    },
  ],
};

export default data;
