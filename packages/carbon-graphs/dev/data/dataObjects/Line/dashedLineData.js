import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '../../../examples/popup';
import { createGraphValuesWithSin } from './createGraphValues';

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
    values: createGraphValuesWithSin({
      length: 18, initialX: 85, xModifier: 10, yModifier: Math.PI * 2,
    }),
    legendOptions: {
      showLine: true,
      showShape: false,
      style: { strokeDashArray: '2,2' },
    },
    showShapes: false,
  },
];

export default data;
