import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadDatelinePopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const getbarConfig = (id) => ({
  bindTo: id,
  bindLegendTo: null,
  axis: {
    x: {
      show: true,
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Data',
      lowerLimit: new Date(2017, 11, 31).toISOString(),
      upperLimit: new Date(2018, 0, 8).toISOString(),
      ticks: {
        values: [
          new Date(2018, 0, 1).toISOString(),
          new Date(2018, 0, 2).toISOString(),
          new Date(2018, 0, 3).toISOString(),
          new Date(2018, 0, 4).toISOString(),
          new Date(2018, 0, 5).toISOString(),
          new Date(2018, 0, 6).toISOString(),
          new Date(2018, 0, 7).toISOString(),
        ],
        format: '%a %b %e',
      },
    },
    y: {
      show: true,
      label: 'Bar Set A',
      lowerLimit: 0,
      upperLimit: 20,
    },
    y2: {
      show: false,
      label: 'Line Set B',
      lowerLimit: 0,
      upperLimit: 20,
    },
  },
  showLabel: true,
  showLegend: true,
  showShapes: true,
  showVGrid: false,
  showHGrid: true,
  dateline: [
    {
      showDatelineIndicator: true,
      label: {
        display: 'Action Date',
      },
      color: '#C97318',
      shape: Carbon.helpers.SHAPES.SQUARE,
      onClick: loadDatelinePopup,
      value: new Date(2017, 12, 2).toISOString(),
    },
  ],
  clickPassThrough: {
    dateline: false,
  },
});

export default getbarConfig;

