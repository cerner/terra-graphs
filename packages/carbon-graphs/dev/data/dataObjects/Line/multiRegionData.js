import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '../../../examples/popup';
import { createGraphValuesWithCos } from './helper';

const data = [
  {
    key: 'uid_5',
    label: {
      display: 'Data Label 5',
    },
    shape: Carbon.helpers.SHAPES.DARK.SQUARE,
    color: Carbon.helpers.COLORS.ORANGE,
    onClick: loadPopup,
    values: createGraphValuesWithCos(20, 85, 10, Math.PI * 5),
    legendOptions: {
      showLine: true,
      showShape: true,
    },
  },
];

export default data;
