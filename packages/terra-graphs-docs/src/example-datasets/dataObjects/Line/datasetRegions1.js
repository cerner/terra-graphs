import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithSin } from './createGraphValues';

const data = {
  key: 'uid_1',
  label: {
    display: 'Data Label 1',
  },
  color: Carbon.helpers.COLORS.BLUE,
  shape: Carbon.helpers.SHAPES.DARK.SQUARE,
  onClick: loadPopup,
  legendOptions: {
    showLine: true,
    showShape: true,
  },
  regions: [
    {
      axis: 'y',
      start: 2,
      end: 10,
      color: '#f4f4f4',
    },
  ],
  values: createGraphValuesWithSin({
    length: 5, initialX: 85, xModifier: 50, yModifier: Math.PI * 3,
  }),
};

export default data;
