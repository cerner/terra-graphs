import Carbon from '@cerner/carbon-graphs';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithSin, createGraphValuesWithCos } from '../createGraphValues';

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
  {
    key: 'uid_3',
    label: {
      display: 'Data Label 3',
    },
    shape: Carbon.helpers.SHAPES.DARK.X,
    color: Carbon.helpers.COLORS.GREEN,
    onClick: loadPopup,
    values: createGraphValuesWithSin({
      length: 12, initialX: 85, xModifier: 10, yModifier: Math.PI * 3,
    }),
  },
  {
    key: 'uid_5',
    label: {
      display: 'Data Label 5',
    },
    shape: Carbon.helpers.SHAPES.DARK.SQUARE,
    color: Carbon.helpers.COLORS.ORANGE,
    onClick: loadPopup,
    values: createGraphValuesWithCos({
      length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,
    }),
    legendOptions: {
      showLine: true,
      showShape: true,
    },
  },
];

export default data;
