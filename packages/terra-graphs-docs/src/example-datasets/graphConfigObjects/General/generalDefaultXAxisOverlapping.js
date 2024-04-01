import Carbon from '@cerner/carbon-graphs';

const getLineTimeseriesConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Datetime',
      lowerLimit: new Date(2016, 0, 1).toISOString(),
      upperLimit: new Date(2016, 0, 12).toISOString(),
      ticks: {
        values: [
          new Date(2016, 0, 1).toISOString(),
          new Date(2016, 0, 2).toISOString(),
          new Date(2016, 0, 3).toISOString(),
          new Date(2016, 0, 4).toISOString(),
          new Date(2016, 0, 5).toISOString(),
          new Date(2016, 0, 6).toISOString(),
          new Date(2016, 0, 7).toISOString(),
          new Date(2016, 0, 8).toISOString(),
          new Date(2016, 0, 9).toISOString(),
          new Date(2016, 0, 10).toISOString(),
          new Date(2016, 0, 11).toISOString(),
        ],
        tickLabelsRotation: -45,
        format: '%Y, %X',
      },
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
  locale: Carbon.helpers.LOCALE.en_US,
});

export default getLineTimeseriesConfig;
