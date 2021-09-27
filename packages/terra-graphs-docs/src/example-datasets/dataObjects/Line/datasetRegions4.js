import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithCos } from './createGraphValues';

const data = {
  key: 'uid_4',
  label: {
    display: 'Data Label 4',
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
  regions: [
    {
      start: 2,
    },
  ],
};

export default data;
