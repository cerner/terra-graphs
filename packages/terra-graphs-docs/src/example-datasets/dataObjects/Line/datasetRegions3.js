import Carbon from '@cerner/carbon-graphs';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithCos } from '../createGraphValues';

const data = {
  key: 'uid_3',
  label: {
    display: 'Data Label 3',
  },
  shape: Carbon.helpers.SHAPES.DARK.SQUARE,
  color: Carbon.helpers.COLORS.ORANGE,
  onClick: loadPopup,
  values: createGraphValuesWithCos({
    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI,
  }),
  legendOptions: {
    showLine: true,
    showShape: true,
  },
  regions: [
    {
      end: 10,
    },
  ],
};

export default data;
