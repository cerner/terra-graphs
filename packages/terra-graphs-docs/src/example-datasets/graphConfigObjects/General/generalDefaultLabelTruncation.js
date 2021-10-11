const largeLabel = 'Project long display value which is only for testing, Project long display value which is only for testing '
    + 'Project long display value which is only for testing, Project long display value which is only for testing';

const getDefaultConfig = (id) => ({
  bindTo: id,
  bindLegendTo: null,
  axis: {
    x: {
      show: true,
      label: largeLabel,
      lowerLimit: 80,
      upperLimit: 280,
    },
    y: {
      show: true,
      label: largeLabel,
      lowerLimit: -18,
      upperLimit: 18,
    },
    y2: {
      show: true,
      label: largeLabel,
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

export default getDefaultConfig;
