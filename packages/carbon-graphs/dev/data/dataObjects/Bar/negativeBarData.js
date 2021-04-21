import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadBarPopup,
} from '../../../examples/popup';

const data = [
  {
    key: 'uid_bar_6',
    label: {
      display: 'Data Label 6',
    },
    group: 'uid_bar_1',
    color: Carbon.helpers.COLORS.BLUE,
    onClick: loadBarPopup,
    values: [
      {
        x: 1,
        y: -15,
      },
      {
        x: 2,
        y: -8,
      },
      {
        x: 3,
        y: -9,
      },
      {
        x: 4,
        y: -10,
      },
      {
        x: 5,
        y: -7,
      },
    ],
  },
];

export default data;
