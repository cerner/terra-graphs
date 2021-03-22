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
    color: Carbon.helpers.COLORS.BLACK,
    onClick: loadPopup,
    values: new Array(20).fill('').map((_, i) => ({
      y: Math.sin(i) * Math.PI,
      x: 85 + i * 10,
    })),
  },
  {
    key: 'uid_2',
    label: {
      display: 'Data Label 2',
    },
    shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,
    color: Carbon.helpers.COLORS.BLUE,
    style: { strokeDashArray: '2,2' },
    onClick: loadPopup,
    values: new Array(18).fill('').map((_, i) => ({
      y: Math.sin(i) * Math.PI * 2,
      x: 85 + i * 10,
    })),
    legendOptions: {
      showLine: true,
      showShape: false,
      style: { strokeDashArray: '2,2' },
    },
    showShapes: false,
  },
  {
    key: 'uid_3',
    label: {
      display: 'Data Label 3',
    },
    shape: Carbon.helpers.SHAPES.DARK.X,
    color: Carbon.helpers.COLORS.GREEN,
    onClick: loadPopup,
    values: new Array(12).fill('').map((_, i) => ({
      y: Math.sin(i) * Math.PI * 3,
      x: 85 + i * 10,
    })),
  },
  {
    key: 'uid_4',
    label: {
      display: 'Data Label 4',
    },
    shape: Carbon.helpers.SHAPES.DARK.CROSS,
    color: Carbon.helpers.COLORS.LIGHT_PURPLE,
    onClick: loadPopup,
    values: new Array(15).fill('').map((_, i) => ({
      y: Math.sin(i) * Math.PI * 4,
      x: 85 + i * 10,
      region: {
        start: Math.sin(i) * Math.PI * 4 - Math.PI,
        end: Math.sin(i) * Math.PI * 4 + Math.PI,
      },
    })),
  },
  {
    key: 'uid_5',
    label: {
      display: 'Data Label 5',
    },
    shape: Carbon.helpers.SHAPES.DARK.SQUARE,
    color: Carbon.helpers.COLORS.ORANGE,
    onClick: loadPopup,
    values: new Array(20).fill('').map((_, i) => ({
      y: Math.cos(i) * Math.PI * 5,
      x: 85 + i * 10,
    })),
    legendOptions: {
      showLine: true,
      showShape: true,
    },
  },
  {
    key: 'uid_6',
    label: {
      display: 'Data Label 6',
    },
    shape: Carbon.helpers.SHAPES.DARK.CIRCLE,
    color: Carbon.helpers.COLORS.LIGHT_BLUE,
    onClick: loadPopup,
    values: new Array(14).fill('').map((_, i) => ({
      y: Math.cos(i) * Math.PI * 6,
      x: 85 + i * 10,
    })),
  },
  {
    key: 'uid_7',
    label: {
      display: 'Data Label 7',
    },
    shape: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,
    color: Carbon.helpers.COLORS.GREY,
    onClick: loadPopup,
    values: new Array(18).fill('').map((_, i) => ({
      y: Math.cos(i) * Math.PI * 7,
      x: 85 + i * 10,
    })),
  },
  {
    key: 'uid_8',
    label: {
      display: 'Data Label 8',
    },
    shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,
    color: Carbon.helpers.COLORS.BLUE,
    onClick: loadPopup,
    values: [],
    legendOptions: {
      showElement: false,
    },
  },
];

export default data;
