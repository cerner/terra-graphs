import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const getLineTimeseriesPanningConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Datetime',
      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),
      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),
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
  pan: {
    enabled: true,
  },
  showLabel: true,
  showLegend: true,
  showShapes: true,
  showVGrid: true,
  showHGrid: true,
});

export default getLineTimeseriesPanningConfig;
