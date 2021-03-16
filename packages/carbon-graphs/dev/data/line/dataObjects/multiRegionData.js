import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
    loadPopup,
 } from '../../../examples/popup';
  
const data = {
    key: 'uid_5',
    label: {
      display: 'Data Label 5',
    },
    shape: Carbon.helpers.SHAPES.DARK.SQUARE,
    color: Carbon.helpers.COLORS.ORANGE,
    onClick: loadPopup,
    values: new Array(20).fill('').map((_, i) => ({
      y: Math.cos(i) * Math.PI * 5,
      x: 85 + i * 10,
    })),
    legendOptions: {
      showLine: true,
      showShape: true,
    },
};

export default data;