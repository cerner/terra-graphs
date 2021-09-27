import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithSin } from './createGraphValues';

const data = {
  key: 'uid_1',
  label: {
    display: 'Data Label 2',
  },
  color: Carbon.helpers.COLORS.BLUE,
  shape: Carbon.helpers.SHAPES.DARK.SQUARE,
  onClick: loadPopup,
  type: Carbon.helpers.LINE_TYPE.SPLINE,
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
    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,
  }),
};

export default data;
