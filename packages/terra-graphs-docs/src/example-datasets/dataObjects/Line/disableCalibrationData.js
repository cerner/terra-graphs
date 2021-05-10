import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithCos } from './createGraphValues';

const data = [
  {
    key: 'uid_7',
    label: {
      display: 'Data Label 7',
    },
    shape: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,
    color: Carbon.helpers.COLORS.GREY,
    onClick: loadPopup,
    values: createGraphValuesWithCos({
      length: 18, initialX: 85, xModifier: 10, yModifier: Math.PI * 7,
    }),
  },
];

export default data;
