import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';
import Carbon from '@cerner/carbon-graphs';

const bubbleDynamicPanningData = {
  key: 'bubble_dynamic_panning_data',
  label: {
    display: 'Bubble set A',
  },
  onClick: loadBubblePopup,
  color: Carbon.helpers.COLORS.PINK,
  values: [{
    x: new Date(2016, 0, 1, 12, 0).toISOString(),
    y: 20,
  },
  {
    x: new Date(2016, 0, 1, 15, 45).toISOString(),
    y: 40,
  },
  {
    x: new Date(2016, 0, 1, 10, 30).toISOString(),
    y: 50,
  },
  {
    x: new Date(2016, 0, 1, 18, 0).toISOString(),
    y: 60,
  },
  ],
  yAxis: 'y',
  showShapes: false,
};

export default bubbleDynamicPanningData;
