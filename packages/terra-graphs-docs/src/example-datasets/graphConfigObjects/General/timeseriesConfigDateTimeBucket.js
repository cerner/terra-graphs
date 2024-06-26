import Carbon from '@cerner/carbon-graphs';

const getGraphConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Datetime',
      lowerLimit: new Date(2016, 0, 0, 23, 59).toISOString(),
      upperLimit: new Date(2016, 0, 2, 1, 0).toISOString(),
      ticks: {
        values: [
          new Date(2016, 0, 1, 1, 0).toISOString(),
          new Date(2016, 0, 1, 5, 0).toISOString(),
          new Date(2016, 0, 1, 10, 0).toISOString(),
          new Date(2016, 0, 1, 15, 0).toISOString(),
          new Date(2016, 0, 1, 20, 0).toISOString(),
        ],
        format: '%H',
        lowerStepTickValues: [
          new Date(2016, 0, 1, 6).toISOString(),
          new Date(2016, 0, 1, 12).toISOString(),
          new Date(2016, 0, 1, 18).toISOString(),
        ],
        midpointTickValues: [
          new Date(2016, 0, 1, 3).toISOString(),
          new Date(2016, 0, 1, 9).toISOString(),
          new Date(2016, 0, 1, 15).toISOString(),
          new Date(2016, 0, 1, 21).toISOString(),
        ],
        upperStepTickValues: [
          new Date(2016, 0, 1, 0).toISOString(),
          new Date(2016, 0, 1, 24).toISOString(),
        ],
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
});

export default getGraphConfig;
