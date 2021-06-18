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
        x: new Date(2016, 0, 1, 5).toISOString(),
        y: 16,
      },
      {
        x: new Date(2016, 0, 1, 7).toISOString(),
        y: 18,
      },
      {
        x: new Date(2016, 0, 1, 13).toISOString(),
        y: 13,
      },
      {
        x: new Date(2016, 0, 1, 16).toISOString(),
        y: 16,
      },
      {
        x: new Date(2016, 0, 1, 0).toISOString(),
        y: 20,
      },
    ],
  },
];

export default data;
