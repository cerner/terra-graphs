const getCombinationGraphConfig = (id) => ({
  bindTo: id,
  bindLegendTo: null,
  axis: {
    x: {
      show: true,
      label: 'Data',
      lowerLimit: 0,
      upperLimit: 8,
      ticks: {
        values: [1, 2, 3, 4, 5, 6, 7],
        format: '.0f',
      },
    },
    y: {
      show: true,
      label: 'Combination Set A',
      lowerLimit: 0,
      upperLimit: 35,
    },
    y2: {
      show: true,
      label: 'Combination Set B',
      lowerLimit: 0,
      upperLimit: 30,
    },
  },
  showLabel: true,
  showLegend: true,
  showShapes: true,
  showVGrid: false,
  showHGrid: true,
});

export default getCombinationGraphConfig;

