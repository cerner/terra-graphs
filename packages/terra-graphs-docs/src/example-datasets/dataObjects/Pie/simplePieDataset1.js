import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPiePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const dataset1 = {
  key: 'simple_pie_data_1',
  label: {
    display: 'Dataset 1',
    format: (display, val) => `${display}: ${val.toFixed()}%`,
  },
  color: Carbon.helpers.COLORS.BLUE,
  onClick: loadPiePopup,
  value: 60,
};

export default dataset1;
