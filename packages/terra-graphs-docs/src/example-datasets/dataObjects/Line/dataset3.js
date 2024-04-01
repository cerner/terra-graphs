import Carbon from '@cerner/carbon-graphs';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithSin } from '../createGraphValues';

const data = {
  key: 'uid_3',
  label: {
    display: 'Data Label 3',
  },
  shape: Carbon.helpers.SHAPES.DARK.X,
  color: Carbon.helpers.COLORS.GREEN,
  onClick: loadPopup,
  values: createGraphValuesWithSin({
    length: 12, initialX: 85, xModifier: 17, yModifier: Math.PI * 4,
  }),
};

export default data;
