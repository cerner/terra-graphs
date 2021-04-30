import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '../../../examples/popup';
import { createGraphValuesWithSin } from './helper';

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
];

export default data;
