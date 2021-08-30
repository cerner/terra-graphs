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
      show: false,
      label: 'Paired Set B',
      lowerLimit: 100,
      upperLimit: 350,
    },
  },
  eventline: [
    {
      color: Carbon.helpers.COLORS.GREY,
      style: {
        strokeDashArray: '4,4',
      },
      value: new Date(2016, 0, 1, 8).toISOString(),
    },
  ],
  pan: {
    enabled: true,
  },
  showLabel: true,
  showLegend: true,
  showVGrid: true,
  showHGrid: true,
});

export default getPairedResultTimeseriesPanningConfig;
