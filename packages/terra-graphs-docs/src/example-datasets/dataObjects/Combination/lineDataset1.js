import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'line_dataset',
  label: {
    display: 'Line Data Label',
  },
  graphType: 'Line',
  color: Carbon.helpers.COLORS.BLACK,
  onClick: loadPopup,
  values: new Array(7).fill('').map((_, i) => ({
    y: Math.sin(i) * Math.PI + 20,
    x: i + 0.5,
  })),
};

export default data;
