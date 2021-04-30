import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '../../../examples/popup';
import { createGraphValuesWithSin, createGraphValuesWithCos } from './helper';

const data = [
  {
    key: 'uid_1',
    label: {
      display: 'Data Label 1',
    },
    color: Carbon.helpers.COLORS.BLACK,
    onClick: loadPopup,
    values: createGraphValuesWithSin(20, 85, 10, Math.PI),
  },
  {
    key: 'uid_3',
    label: {
      display: 'Data Label 3',
    },
    shape: Carbon.helpers.SHAPES.DARK.X,
    color: Carbon.helpers.COLORS.GREEN,
    onClick: loadPopup,
    values: createGraphValuesWithSin(12, 85, 10, Math.PI * 3),
  },
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
