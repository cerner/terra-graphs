import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithCos } from './createGraphValues';

const data = {
  key: 'uid_6',
  label: {
    display: 'Data Label 6',
  },
  shape: Carbon.helpers.SHAPES.DARK.SQUARE,
  color: Carbon.helpers.COLORS.ORANGE,
  onClick: loadPopup,
  values: createGraphValuesWithCos({
    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,
  }),
  legendOptions: {
    showLine: true,
    showShape: false,
  },
  showShapes: false,
};

export default data;
