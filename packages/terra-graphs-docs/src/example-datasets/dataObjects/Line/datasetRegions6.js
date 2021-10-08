import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithCos } from '../createGraphValues';

const data = {
  key: 'uid_6',
  label: {
    display: 'Data Label 6',
  },
  color: Carbon.helpers.COLORS.ORANGE,
  shape: Carbon.helpers.SHAPES.DARK.SQUARE,
  onClick: loadPopup,
  yAxis: 'y2',
  legendOptions: {
    showLine: true,
    showShape: true,
  },
  regions: [
    {
      axis: 'y2',
      start: 50,
      end: 150,
    },
  ],
  values: createGraphValuesWithCos({
    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,
  }),
};

export default data;
