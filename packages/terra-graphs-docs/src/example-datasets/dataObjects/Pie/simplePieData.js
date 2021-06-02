import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPiePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = [
  {
    key: 'uid_1',
    label: {
      display: 'Blue',
      format: (display, val) => `${display}: ${val.toFixed()}%`,
    },
    color: Carbon.helpers.COLORS.BLUE,
    onClick: loadPiePopup,
    value: 60,
  },
  {
    key: 'uid_2',
    label: {
      display: 'Green',
    },
    color: Carbon.helpers.COLORS.GREEN,
    onClick: loadPiePopup,
    value: 10,
  },
  {
    key: 'uid_3',
    label: {
      display: 'Light Purple',
    },
    color: Carbon.helpers.COLORS.LIGHT_PURPLE,
    onClick: loadPiePopup,
    value: 30,
  },
];

export default data;
