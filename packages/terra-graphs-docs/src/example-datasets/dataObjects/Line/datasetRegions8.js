import Carbon from '@cerner/carbon-graphs';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithCos } from '../createGraphValues';

const data = {
  key: 'uid_8',
  label: {
    display: 'Data Label 8',
  },
  color: Carbon.helpers.COLORS.GREEN,
  shape: Carbon.helpers.SHAPES.DARK.X,
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
  values: createGraphValuesWithCos({
    length: 12, initialX: 85, xModifier: 17, yModifier: Math.PI * 4,
  }),
};

export default data;
