import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const bubbleDataCustomRadius = {
  key: 'bubble_custom_radius_dataset',
  label: {
    display: 'Bubble set B',
  },
  color: Carbon.helpers.COLORS.LIGHT_BLUE,
  onClick: loadBubblePopup,
  weight: {
    fixedRadius: 12,
  },
  values: [
    {
      x: new Date(2016, 0, 1, 6, 0).toISOString(),
      y: 100,
    },
    {
      x: new Date(2016, 0, 1, 10, 0).toISOString(),
      y: 120,
    },
    {
      x: new Date(2016, 0, 1, 12, 0).toISOString(),
      y: 180,
    },
    {
      x: new Date(2016, 0, 1, 18, 0).toISOString(),
      y: 220,
    },
  ],
  yAxis: 'y',
};

export default bubbleDataCustomRadius;
