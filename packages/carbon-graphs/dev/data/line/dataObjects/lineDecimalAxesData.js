import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
    loadPopup,
 } from '../../../examples/popup';

const data = [
    {
      key: 'uid_1',
      label: {
        display: 'Data Label 1',
      },
      shape: Carbon.helpers.SHAPES.DARK.CIRCLE,
      onClick: loadPopup,
      values: [
        {
          x: 20.9,
          y: 0.2,
        },
        {
          x: 21,
          y: 0.4,
        },
        {
          x: 21.1,
          y: 0.6,
        },
        {
          x: 21.2,
          y: 0.6,
        },
        {
          x: 21.4,
          y: 0.8,
        },
        {
          x: 21.5,
          y: 1.4,
        },
        {
          x: 21.8,
          y: 1.6,
        },
        {
          x: 22,
          y: 1.8,
        },
        {
          x: 22.1,
          y: 1.4,
        },
        {
          x: 22.2,
          y: 1.4,
        },
        {
          x: 22.3,
          y: 3.6,
        },
        {
          x: 22.4,
          y: 1.2,
        },
        {
          x: 22.5,
          y: 1.4,
        },
        {
          x: 22.6,
          y: 1.6,
        },
      ],
      yAxis: 'y',
    },
    {
      key: 'uid_2',
      label: {
        display: 'Data Label 2',
      },
      shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,
      color: Carbon.helpers.COLORS.BLUE,
      onClick: loadPopup,
      values: [
        {
          x: 20.9,
          y: 10.4,
        },
        {
          x: 21.2,
          y: 11,
        },
        {
          x: 21.4,
          y: 12,
        },
        {
          x: 21.6,
          y: 12,
        },
        {
          x: 21.8,
          y: 12.5,
        },
        {
          x: 22.2,
          y: 13,
        },
      ],
      yAxis: 'y2',
    },
  ];

  export default data;