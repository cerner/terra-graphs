import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'identical_region_line_dataset',
  graphType: 'Line',
  label: {
    display: 'Line Data Label',
  },
  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadPopup,
  values: new Array(50).fill('').map((_, i) => ({
    y: Math.sin(i) * 5 + 10,
    x: 10 + i * 5,
  })),
  regions: [
    {
      axis: 'y',
      start: 120,
      end: 180,
      color: '#c8cacb',
    },
  ],
};

export default data;
