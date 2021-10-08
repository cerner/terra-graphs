import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithCos } from './createGraphValues';

const data = {
  key: 'uid_2',
  label: {
    display: 'Data Label 2',
  },
  color: Carbon.helpers.COLORS.YELLOW,
  shape: Carbon.helpers.SHAPES.DARK.SQUARE,
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
      start: 10,
      end: 10,
      color: '#bcbfc0',
    },
  ],
};

export default data;
