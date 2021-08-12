import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPiePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const dataset2 = {
  key: 'uid_2',
  label: {
    display: 'Dataset 2',
  },
  color: Carbon.helpers.COLORS.GREEN,
  onClick: loadPiePopup,
  value: 10,
};

export default dataset2;
