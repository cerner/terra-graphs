const getTimelineConfig = (id) => ({
  bindTo: id,
  bindLegendTo: null,
  axis: {
    x: {
      label: 'Datetime',
      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),
      upperLimit: new Date(2016, 0, 1, 15, 59).toISOString(),
      ticks: {
        format: '',
      },
    },
  },
  showLabel: true,
  showLegend: true,
});

export default getTimelineConfig;
