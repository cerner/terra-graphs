import Carbon from '@cerner/carbon-graphs';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithSin } from '../createGraphValues';

const data = [
  {
    key: 'uid_1',
    label: {
      display: 'Data Label 1',
    },
    color: Carbon.helpers.COLORS.BLACK,
    onClick: loadPopup,
    values: createGraphValuesWithSin({
      length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI,
    }),
  },
];

export default data;
