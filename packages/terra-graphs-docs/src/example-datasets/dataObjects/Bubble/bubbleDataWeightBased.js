import { loadBubblePopup } from '@cerner/terra-graphs-docs/src/example-datasets/popup.js';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const bubbleDataWeightBased = {
  key: 'uid_3',
  label: {
    display: 'Amount',
  },
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadBubblePopup,
  weight: {
    min: 40,
    max: 450,
  },
  values: [{
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

export default bubbleDataWeightBased;
