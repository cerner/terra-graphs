import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';
import { createGraphValuesWithSin } from '../createGraphValues';

const data = {
  key: 'uid_1',
  label: {
    display: 'Data Label 1',
  },
  color: Carbon.helpers.COLORS.BLACK,
  onClick: loadPopup,
  values: [
    {
      x: 85,
      y: 5,
    },
    {
      x: 90,
      y: 11,
    },
    {
      x: 92,
      y: 12,
    },
    {
      x: 101,
      y: 16,
    },
    {
      x: 107,
      y: 17,
    },
    {
      x: 107,
      y: 9,
    },
    {
      x: 135,
      y: 11,
    },
    {
      x: 139,
      y: 12,
    },
    {
      x: 143,
      y: 16,
    },
    {
      x: 155,
      y: 17,
    },
    {
      x: 161,
      y: 28,
    },
    {
      x: 164,
      y: 12,
    },
    {
      x: 168,
      y: 13,
    },
    {
      x: 170,
      y: 14,
    },
  ]
};

export default data;
