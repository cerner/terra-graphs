import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const getbarConfig = (id) => ({
  bindTo: id,
  bindLegendTo: null,
  axis: {
    x: {
      show: true,
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Data',
      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),
      upperLimit: new Date(2016, 0, 2, 0).toISOString(),
      ticks: {
        values: [
          new Date(2016, 0, 1, 3).toISOString(),
          new Date(2016, 0, 1, 6).toISOString(),
          new Date(2016, 0, 1, 9).toISOString(),
          new Date(2016, 0, 1, 12).toISOString(),
          new Date(2016, 0, 1, 15).toISOString(),
        ],
        format: '%H',
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
});

export default getbarConfig;

