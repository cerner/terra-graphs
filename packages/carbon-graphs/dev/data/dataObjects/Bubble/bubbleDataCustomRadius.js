import {
    loadPopup
  } from '../../../examples/popup';
  import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
  
  // custom radius dataset
  
  const bubbleDataCustomRadius = {
    key: 'uid_5',
    label: {
      display: 'Bubble set B',
    },
    color: Carbon.helpers.COLORS.LIGHT_BLUE,
    onClick: loadPopup,
    weight: {
      fixedRadius: 12,
    },
    values: [{
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
