import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithCos } from './createGraphValues';

const data = {
  key: 'uid_6',
  label: {
    display: 'Dataset 6',
  },
  color: Carbon.helpers.COLORS.GREY,
  onClick: loadPopup,
  shape: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,
  values: createGraphValuesWithCos({
    length: 18, initialX: 85, xModifier: 10, yModifier: Math.PI * 7,
  }),
};

export default data;
