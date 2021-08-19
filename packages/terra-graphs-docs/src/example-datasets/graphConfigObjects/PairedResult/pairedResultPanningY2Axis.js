import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const getPairedResultTimeseriesPanningConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Datetime',
      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),
      upperLimit: new Date(2016, 0, 2, 0).toISOString(),
      ticks: {},
    },
    y: {
      label: 'Paired Set A',
      lowerLimit: 0,
      upperLimit: 200,
    },
    y2: {
      show: true,
      label: 'Paired Set B',
      lowerLimit: 100,
      upperLimit: 350,
    },
  },
  pan: {
    enabled: true,
  },
  showLabel: true,
  showLegend: true,
  showVGrid: true,
  showHGrid: true,
});

export default getPairedResultTimeseriesPanningConfig;
