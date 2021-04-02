import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '../../../examples/popup';

const data = [
  {
    key: 'uid_2',
    label: {
      display: 'Data Label 2',
    },
    shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,
    color: Carbon.helpers.COLORS.BLUE,
    style: { strokeDashArray: '2,2' },
    onClick: loadPopup,
    values: new Array(18).fill('').map((_, i) => ({
      y: Math.sin(i) * Math.PI * 2,
      x: 85 + i * 10,
    })),
    legendOptions: {
      showLine: true,
      showShape: false,
      style: { strokeDashArray: '2,2' },
    },
    showShapes: false,
  },
];

export default data;
