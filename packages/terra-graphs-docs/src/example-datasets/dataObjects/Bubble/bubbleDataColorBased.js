import { loadBubblePopup } from '@cerner/terra-graphs-docs/src/example-datasets/popup.js';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const bubbleDataColorWeightBased  = {
  key: 'uid_2',
  label: {
    display: 'Amount',
  },
  palette: Carbon.helpers.BUBBLE.PALETTE.GREEN,
  onClick: loadBubblePopup,
  values: [{
      x: new Date(2016, 0, 1, 11, 0).toISOString(),
      y: 60,
    },
    {
      x: new Date(2016, 0, 1, 9, 0).toISOString(),
      y: 75,
    },
    {
      x: new Date(2016, 0, 1, 19, 30).toISOString(),
      y: 165,
    },
    {
      x: new Date(2016, 0, 1, 15, 0).toISOString(),
      y: 120,
    },
  ],
  yAxis: 'y',
};

export default bubbleDataColorWeightBased;
