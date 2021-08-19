const getPairedResultConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      label: 'Data',
      lowerLimit: 0,
      upperLimit: 1000,
    },
    y: {
      label: 'Paired',
      lowerLimit: 0,
      upperLimit: 200,
    },
  },
  showLabel: true,
  showLegend: true,
  showVGrid: true,
  showHGrid: true,
});

export default getPairedResultConfig;
