const getlineAndPairdResultConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      show: true,
      label: 'Data',
      lowerLimit: 0,
      upperLimit: 300,
    },
    y: {
      show: true,
      label: 'Combination Set A',
      lowerLimit: 0,
      upperLimit: 20,
    },
    y2: {
      show: true,
      label: 'Combination Set B',
      lowerLimit: 40,
      upperLimit: 180,
    },
  },
  showLabel: true,
  showLegend: true,
  showVGrid: true,
  showHGrid: true,
});

export default getlineAndPairdResultConfig;
