import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithCos } from '../createGraphValues';

const data = {
  key: 'uid_9',
  label: {
    display: 'Data Label 9',
  },
  color: Carbon.helpers.COLORS.ORANGE,
  shape: Carbon.helpers.SHAPES.DARK.SQUARE,
  onClick: loadPopup,
  yAxis: 'y',
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
    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,
  }),
};

export default data;
