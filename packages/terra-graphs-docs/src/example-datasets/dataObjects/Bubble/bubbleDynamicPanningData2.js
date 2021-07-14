import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const bubbleDynamicPanningData = [{
  key: 'uid_2',
  label: {
    display: 'Bubble set B',
  },
  onClick: loadBubblePopup,
  color: Carbon.helpers.COLORS.ORANGE,
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
  showShapes: false,
},
{
  key: 'uid_2',
  label: {
    display: 'Bubble set B',
  },
  onClick: loadBubblePopup,
  values: [{
    x: new Date(2016, 0, 1, 12, 0).toISOString(),
    y: 10,
  },
  {
    x: new Date(2016, 0, 1, 15, 45).toISOString(),
    y: 75,
  },
  {
    x: new Date(2016, 0, 1, 10, 30).toISOString(),
    y: 42,
  },
  {
    x: new Date(2016, 0, 1, 18, 0).toISOString(),
    y: 38,
  },
  ],
  yAxis: 'y',
  showShapes: false,
},
];

export default bubbleDynamicPanningData;
