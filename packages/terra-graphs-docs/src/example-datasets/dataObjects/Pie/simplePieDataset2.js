import Carbon from '@cerner/carbon-graphs';
import { loadPiePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const dataset2 = {
  key: 'simple_pie_data_2',
  label: {
    display: 'Dataset 2',
  },
  color: Carbon.helpers.COLORS.GREEN,
  onClick: loadPiePopup,
  value: 10,
};

export default dataset2;
