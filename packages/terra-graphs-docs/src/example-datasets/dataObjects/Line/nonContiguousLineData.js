import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = [
  {
    key: 'uid_3',
    label: {
      display: 'Data Label 3',
    },
    shape: Carbon.helpers.SHAPES.DARK.CIRCLE,
    color: Carbon.helpers.COLORS.BLUE,
    onClick: loadPopup,
    values: [
      {
        x: new Date(2016, 0, 1, 1, 5).toISOString(),
        y: 15,
      },
      {
        x: new Date(2016, 0, 1, 2, 15).toISOString(),
        y: 21,
      },
      {
        x: new Date(2016, 0, 1, 3, 15).toISOString(),
        y: null,
      },
      {
        x: new Date(2016, 0, 1, 4, 15).toISOString(),
        y: 16,
      },
      {
        x: new Date(2016, 0, 1, 5, 15).toISOString(),
        y: 17,
      },
      {
        x: new Date(2016, 0, 1, 6, 15).toISOString(),
        y: 19,
      },
      {
        x: new Date(2016, 0, 1, 9, 45).toISOString(),
        y: 16,
      },
      {
        x: new Date(2016, 0, 1, 12, 15).toISOString(),
        y: 17,
      },
      {
        x: new Date(2016, 0, 1, 13, 15).toISOString(),
        y: 28,
      },
      {
        x: new Date(2016, 0, 1, 14, 15).toISOString(),
        y: 22,
      },
      {
        x: new Date(2016, 0, 1, 19, 45).toISOString(),
        y: 23,
      },
    ],
    yAxis: 'y',
  },
];

export default data;
