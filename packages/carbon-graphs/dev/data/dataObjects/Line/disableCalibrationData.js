import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '../../../examples/popup';

const data = [
  {
    key: 'uid_7',
    label: {
      display: 'Data Label 7',
    },
    shape: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,
    color: Carbon.helpers.COLORS.GREY,
    onClick: loadPopup,
    values: new Array(18).fill('').map((_, i) => ({
      y: Math.cos(i) * Math.PI * 7,
      x: 85 + i * 10,
    })),
  },
];

export default data;
