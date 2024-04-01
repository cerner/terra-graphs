import Carbon from '@cerner/carbon-graphs';
import { loadBarPopup, loadTextLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'stacked_bar_1',
  label: {
    display: 'Dataset 1',
  },
  color: Carbon.helpers.COLORS.GREEN,
  onClick: loadBarPopup,
  values: [
    {
      x: 1,
      y: 30,
    },
    {
      x: 2,
      y: 10,
    },
    {
      x: 3,
      y: 13,
    },
    {
      x: 4,
      y: 15,
    },
    {
      x: 5,
      y: 18,
    },
  ],
  axisInfoRow: [
    {
      axis: 'x',
      x: 1,
      value: {
        onClick: loadTextLabelPopup,
        characterCount: 4,
        color: Carbon.helpers.COLORS.ORANGE,
        shape: {
          path: {
            d: 'M24,0l24,24L24,48L0,24L24,0z',
            fill: Carbon.helpers.COLORS.ORANGE,
          },
          options: {
            x: -6,
            y: -6,
            scale: 0.25,
          },
        },
        label: {
          display: '1234567',
          secondaryDisplay: 'ICU',
        },
      },
    },
    {
      axis: 'x',
      x: 2,
      value: {
        onClick: loadTextLabelPopup,
        color: Carbon.helpers.COLORS.BLACK,
        shape: {
          path: {
            d: 'M24,0l24,24L24,48L0,24L24,0z',
            fill: Carbon.helpers.COLORS.PURPLE,
          },
          options: {
            x: -6,
            y: -6,
            scale: 0.25,
          },
        },
        label: {
          display: '65',
          secondaryDisplay: 'ICU',
        },
      },
    },
    {
      axis: 'x',
      x: 3,
      value: {
        onClick: loadTextLabelPopup,
        color: Carbon.helpers.COLORS.GREEN,
        shape: {
          path: {
            d: 'M24,0l24,24L24,48L0,24L24,0z',
          },
          options: {
            x: -6,
            y: -6,
            scale: 0.25,
          },
        },
        label: {
          display: '42',
          secondaryDisplay: 'ICU',
        },
      },
    },
    {
      axis: 'x',
      x: 4,
      value: {
        onClick: loadTextLabelPopup,
        color: Carbon.helpers.COLORS.BLACK,
        shape: {},
        label: {
          display: '23',
          secondaryDisplay: '',
        },
      },
    },
    {
      axis: 'x',
      x: 5,
      value: {
        onClick: loadTextLabelPopup,
        color: Carbon.helpers.COLORS.BLACK,
        shape: {},
        label: {
          display: '',
          secondaryDisplay: 'ICU',
        },
      },
    },
    {
      axis: 'x',
      x: 6,
      value: {
        onClick: loadTextLabelPopup,
        color: Carbon.helpers.COLORS.BLACK,
        shape: {},
        label: {
          display: '25',
          secondaryDisplay: 'ICU',
        },
      },
    },
  ],
};

export default data;
