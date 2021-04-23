import {
  loadPopup
} from '../../../examples/popup';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

// basic dataset

const bubbleDataBasic = {
  key: 'uid_1',
  label: {
    display: 'Bubble set A',
  },
  onClick: loadPopup,
  color: Carbon.helpers.COLORS.PINK,
  values: [{
      x: new Date(2016, 0, 1, 12, 0).toISOString(),
      y: 70,
    },
    {
      x: new Date(2016, 0, 1, 15, 45).toISOString(),
      y: 120,
    },
    {
      x: new Date(2016, 0, 1, 10, 30).toISOString(),
      y: 160,
    },
    {
      x: new Date(2016, 0, 1, 18, 0).toISOString(),
      y: 180,
    },
    
  ],
  yAxis: 'y',
  showShapes: false,
};

export default bubbleDataBasic;
