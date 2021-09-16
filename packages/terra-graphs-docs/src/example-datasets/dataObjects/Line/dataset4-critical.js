import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'uid_4',
  label: {
    display: 'Data Label 4',
  },
  shape: Carbon.helpers.SHAPES.DARK.CROSS,
  color: Carbon.helpers.COLORS.LIGHT_PURPLE,
  onClick: loadPopup,
  values: new Array(15).fill('').map((_, i) => ({
    y: Math.sin(i) * Math.PI * 4,
    x: 85 + i * 10,
    region: {
      start: Math.sin(i) * Math.PI * 4 - Math.PI,
      end: Math.sin(i) * Math.PI * 4 + Math.PI,
    },
  })),
};

data.values[4].isCritical = true;
data.values[8].isCritical = true;

export default data;
