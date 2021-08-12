import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPiePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const dataset3 = {
  key: 'uid_3',
  label: {
    display: 'Dataset 3',
  },
  color: Carbon.helpers.COLORS.LIGHT_PURPLE,
  onClick: loadPiePopup,
  value: 30,
};

export default dataset3;
