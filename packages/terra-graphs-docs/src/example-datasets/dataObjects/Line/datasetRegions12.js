import Carbon from '@cerner/carbon-graphs';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'uid_7',
  label: {
    display: 'Data Label 7',
  },
  shape: Carbon.helpers.SHAPES.DARK.CIRCLE,
  onClick: loadPopup,
  yAxis: 'y',
  values: [
    {
      x: new Date(2016, 0, 1, 1, 5).toISOString(),
      y: 5,
      isCritical: false,
      regions: [{
        start: 3,
        end: 8,
        color: Carbon.helpers.COLORS.GREY,
      },
      {
        start: 20,
        end: 27,
        color: Carbon.helpers.COLORS.LAVENDER,
      }],
    },
    {
      x: new Date(2016, 0, 1, 2, 15).toISOString(),
      y: 11,
      regions: [{
        start: 4,
        end: 14,
        color: Carbon.helpers.COLORS.GREY,
      },
      {
        start: 22,
        end: 29,
        color: Carbon.helpers.COLORS.LAVENDER,
      }],
    },
    {
      x: new Date(2016, 0, 1, 3, 15).toISOString(),
      y: 12,
      regions: [{
        start: 5,
        end: 15,
        color: Carbon.helpers.COLORS.GREY,
      },
      {
        start: 22,
        end: 29,
        color: Carbon.helpers.COLORS.LAVENDER,
      }],
    },
    {
      x: new Date(2016, 0, 1, 4, 15).toISOString(),
      y: 16,
      regions: [{
        start: 10,
        end: 20,
        color: Carbon.helpers.COLORS.GREY,
      },
      {
        start: 22,
        end: 29,
        color: Carbon.helpers.COLORS.LAVENDER,
      }],
    },
    {
      x: new Date(2016, 0, 1, 5, 15).toISOString(),
      y: 17,
      regions: [{
        start: 10,
        end: 20,
        color: Carbon.helpers.COLORS.GREY,
      },
      {
        start: 23,
        end: 30,
        color: Carbon.helpers.COLORS.LAVENDER,
      }],
    },
    {
      x: new Date(2016, 0, 1, 6, 15).toISOString(),
      y: 9,
    },
    {
      x: new Date(2016, 0, 1, 7, 0).toISOString(),
      y: 11,
      regions: [{
        start: 8,
        end: 15,
      },
      {
        start: 18,
        end: 25,
        color: Carbon.helpers.COLORS.LAVENDER,
      },
      {
        start: 27,
        end: 30,
        color: Carbon.helpers.COLORS.ORANGE,
      }],
    },
    {
      x: new Date(2016, 0, 1, 8, 15).toISOString(),
      y: 12,
      regions: [{
        start: 8,
        end: 15,
      },
      {
        start: 18,
        end: 25,
        color: Carbon.helpers.COLORS.LAVENDER,
      },
      {
        start: 27,
        end: 30,
        color: Carbon.helpers.COLORS.ORANGE,
      }],
    },
    {
      x: new Date(2016, 0, 1, 9, 45).toISOString(),
      y: 16,
      regions: [{
        start: 10,
        end: 20,
      },
      {
        start: 22,
        end: 27,
        color: Carbon.helpers.COLORS.LAVENDER,
      },
      {
        start: 28,
        end: 31,
        color: Carbon.helpers.COLORS.ORANGE,
      }],
    },
    {
      x: new Date(2016, 0, 1, 12, 15).toISOString(),
      y: 17,
      regions: [{
        start: 10,
        end: 20,
      },
      {
        start: 22,
        end: 27,
        color: Carbon.helpers.COLORS.LAVENDER,
      },
      {
        start: 28,
        end: 31,
        color: Carbon.helpers.COLORS.ORANGE,
      }],
    },
    {
      x: new Date(2016, 0, 1, 13, 15).toISOString(),
      y: 28,
      regions: [{
        start: 10,
        end: 20,
      },
      {
        start: 28,
        end: 31,
        color: Carbon.helpers.COLORS.ORANGE,
      }],
      isCritical: true,
    },
    {
      x: new Date(2016, 0, 1, 14, 15).toISOString(),
      y: 12,
      regions: [{
        start: 8,
        end: 15,
      },
      {
        start: 18,
        end: 25,
        color: Carbon.helpers.COLORS.LAVENDER,
      },
      {
        start: 27,
        end: 30,
        color: Carbon.helpers.COLORS.ORANGE,
      }],
    },
    {
      x: new Date(2016, 0, 1, 19, 45).toISOString(),
      y: 13,
      regions: [{
        start: 9,
        end: 16,
      },
      {
        start: 18,
        end: 25,
        color: Carbon.helpers.COLORS.LAVENDER,
      },
      {
        start: 28,
        end: 31,
        color: Carbon.helpers.COLORS.ORANGE,
      }],
    },
    {
      x: new Date(2016, 0, 1, 21, 15).toISOString(),
      y: 14,
      regions: [{
        start: 9,
        end: 16,
        color: Carbon.helpers.COLORS.GREY,
      },
      {
        start: 18,
        end: 25,
        color: Carbon.helpers.COLORS.LAVENDER,
      },
      {
        start: 27,
        end: 30,
        color: Carbon.helpers.COLORS.ORANGE,
      }],
    },
  ],
};

export default data;
