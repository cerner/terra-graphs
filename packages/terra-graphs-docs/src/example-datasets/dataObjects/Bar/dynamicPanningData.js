import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadBarPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = [
  {
    key: 'uid_bar_t1',
    label: {
      display: 'Data Label',
    },
    color: Carbon.helpers.COLORS.BLUE,
    onClick: loadBarPopup,
    values: [
      {
        x: new Date(2016, 0, 1, 3).toISOString(),
        y: 15,
      },
      {
        x: new Date(2016, 0, 1, 6).toISOString(),
        y: 19,
      },
      {
        x: new Date(2016, 0, 1, 9).toISOString(),
        y: 10,
      },
      {
        x: new Date(2016, 0, 1, 12).toISOString(),
        y: 13,
      },
      {
        x: new Date(2016, 0, 1, 15).toISOString(),
        y: 15,
      },
    ],
  },
  {
    key: 'uid_bar_t1',
    values: [
      {
        x: new Date(2016, 0, 1, 3).toISOString(),
        y: 1,
      },
      {
        x: new Date(2016, 0, 1, 6).toISOString(),
        y: 9,
      },
      {
        x: new Date(2016, 0, 1, 9).toISOString(),
        y: 8,
      },
      {
        x: new Date(2016, 0, 1, 12).toISOString(),
        y: 13,
      },
      {
        x: new Date(2016, 0, 1, 15).toISOString(),
        y: 15,
      },
    ],
  },
];

export default data;