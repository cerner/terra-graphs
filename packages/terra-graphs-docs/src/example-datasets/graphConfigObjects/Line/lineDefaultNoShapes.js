const getLineDefaultNoShapesConfig = (id) => ({
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
      show: false,
      label: 'Line Set B',
      lowerLimit: 0,
      upperLimit: 250,
    },
  },
  showLabel: true,
  showLegend: true,
  showShapes: false,
  showVGrid: true,
  showHGrid: true,
});

export default getLineDefaultNoShapesConfig;

