const getLineDefaultY2Config = (id) => ({
  bindTo: id,
  bindLegendTo: null,
  axis: {
    x: {
      show: true,
      label: 'Data',
      lowerLimit: 80,
      upperLimit: 280,
    },
    y: {
      show: true,
      label: 'Line Set A',
      lowerLimit: -18,
      upperLimit: 18,
    },
    y2: {
      show: true,
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

export default getLineDefaultY2Config;

