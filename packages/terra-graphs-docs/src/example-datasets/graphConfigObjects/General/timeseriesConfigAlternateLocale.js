import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const getLineTimeseriesConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Datetime',
      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),
      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),
      ticks: {
        values: [
          new Date(2016, 0, 1, 1, 0).toISOString(),
          new Date(2016, 0, 1, 5, 0).toISOString(),
          new Date(2016, 0, 1, 10, 0).toISOString(),
          new Date(2016, 0, 1, 15, 0).toISOString(),
          new Date(2016, 0, 1, 20, 0).toISOString(),
        ],
        format: '%A %e %B %Y, %X',
      }
    },
    y: {
      label: 'Line Set A',
      lowerLimit: 10,
      upperLimit: 30,
    },
    y2: {
      show: false,
      label: 'Line Set B',
      lowerLimit: 0,
      upperLimit: 250,
    },
  },
  showLabel: true,
  showLegend: true,
  showShapes: true,
  showVGrid: true,
  showHGrid: true,
  locale: Carbon.helpers.LOCALE.de_DE
});

export default getLineTimeseriesConfig;
