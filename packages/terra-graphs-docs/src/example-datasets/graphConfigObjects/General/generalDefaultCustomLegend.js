const getDefaultConfig = (id, legendContainerID) => ({
  bindTo: id,
  bindLegendTo: legendContainerID,
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
  legendPadding: true,
  removeContainerPadding: {
    left: 2.5,
    right: 2.5,
    top: 2.5,
    bottom: 2.5,
  },
  showLabel: true,
  showLegend: true,
  showShapes: true,
  showVGrid: true,
  showHGrid: true,
});

export default getDefaultConfig;
