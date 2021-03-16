import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
    loadPopup,
 } from '../../../examples/popup';

 const data =  {
    key: 'uid_4',
    label: {
      display: 'Data Label 4',
    },
    shape: Carbon.helpers.SHAPES.DARK.CIRCLE,
    onClick: loadPopup,
    values: [
      {
        x: new Date(2016, 0, 1, 1, 5).toISOString(),
        y: 5,
        isCritical: false,
        region: {
          start: 3,
          end: 8,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      {
        x: new Date(2016, 0, 1, 2, 15).toISOString(),
        y: 11,
        region: {
          start: 4,
          end: 14,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      {
        x: new Date(2016, 0, 1, 3, 15).toISOString(),
        y: 12,
        region: {
          start: 5,
          end: 15,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      {
        x: new Date(2016, 0, 1, 4, 15).toISOString(),
        y: 16,
        region: {
          start: 10,
          end: 20,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      {
        x: new Date(2016, 0, 1, 5, 15).toISOString(),
        y: 17,
        region: {
          start: 10,
          end: 20,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      {
        x: new Date(2016, 0, 1, 6, 15).toISOString(),
        y: 9,
      },
      {
        x: new Date(2016, 0, 1, 7, 0).toISOString(),
        y: 11,
        region: {
          start: 8,
          end: 15,
        },
      },
      {
        x: new Date(2016, 0, 1, 8, 15).toISOString(),
        y: 12,
        region: {
          start: 8,
          end: 15,
        },
      },
      {
        x: new Date(2016, 0, 1, 9, 45).toISOString(),
        y: 16,
        region: {
          start: 10,
          end: 20,
        },
      },
      {
        x: new Date(2016, 0, 1, 12, 15).toISOString(),
        y: 17,
        region: {
          start: 10,
          end: 20,
        },
      },
      {
        x: new Date(2016, 0, 1, 13, 15).toISOString(),
        y: 28,
        region: {
          start: 10,
          end: 20,
        },
        isCritical: true,
      },
      {
        x: new Date(2016, 0, 1, 14, 15).toISOString(),
        y: 12,
        region: {
          start: 8,
          end: 15,
        },
      },
      {
        x: new Date(2016, 0, 1, 19, 45).toISOString(),
        y: 13,
        region: {
          start: 9,
          end: 16,
        },
      },
      {
        x: new Date(2016, 0, 1, 21, 15).toISOString(),
        y: 14,
        region: {
          start: 9,
          end: 16,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
    ],
    yAxis: 'y',
  };


export default data;