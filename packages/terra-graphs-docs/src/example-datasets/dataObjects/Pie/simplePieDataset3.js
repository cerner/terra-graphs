import Carbon from '@cerner/carbon-graphs';
import { loadPiePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const dataset3 = {
  key: 'simple_pie_data_3',
  label: {
    display: 'Dataset 3',
  },
  color: Carbon.helpers.COLORS.LIGHT_PURPLE,
  onClick: loadPiePopup,
  value: 30,
};

export default dataset3;
