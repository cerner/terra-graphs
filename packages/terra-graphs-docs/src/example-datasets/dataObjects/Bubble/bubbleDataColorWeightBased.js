import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const bubbleDataColorWeightBased = {
  key: 'Bubble_Color_Weight_Dataset',
  label: {
    display: 'Amount',
  },
  palette: Carbon.helpers.BUBBLE.PALETTE.ORANGE,
  onClick: loadBubblePopup,
  weight: {
    min: 40,
    max: 450,
  },
  values: [
    {
      x: new Date(2016, 0, 1, 11, 0).toISOString(),
      y: 60,
      weight: 70,
    },
    {
      x: new Date(2016, 0, 1, 9, 0).toISOString(),
      y: 75,
      weight: 180,
    },
    {
      x: new Date(2016, 0, 1, 19, 30).toISOString(),
      y: 165,
      weight: 220,
    },
    {
      x: new Date(2016, 0, 1, 15, 0).toISOString(),
      y: 120,
      weight: 340,
    },
  ],
  yAxis: 'y',
};

export default bubbleDataColorWeightBased;
