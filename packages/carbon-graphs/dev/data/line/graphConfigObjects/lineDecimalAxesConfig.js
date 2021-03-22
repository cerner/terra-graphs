const lineDecimalAxes = (id) => ({
  bindTo: id,
  axis: {
    x: {
      label: 'Data',
      lowerLimit: 20.7,
      upperLimit: 22.7,
    },
    y: {
      label: 'Line Set A',
      lowerLimit: 0.2,
      upperLimit: 3.8,
      suppressTrailingZeros: true,
    },
    y2: {
      show: true,
      label: 'Line Set B',
      lowerLimit: 10.2,
      upperLimit: 13.8,
      suppressTrailingZeros: true,
    },
  },
  showLabel: true,
  showLegend: true,
  showShapes: true,
  showVGrid: true,
  showHGrid: true,
  ticksCount: 7,
});

export default lineDecimalAxes;
