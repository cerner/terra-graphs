const getPieConfig = (id) => ({
  bindTo: id,
  bindLegendTo: '#legendContainer',
  removeContainerPadding: true,
  legendPadding: {
    left: 2.5,
    right: 2.5,
    top: 2.5,
    bottom: 2.5,
  },
  dimension: {
    height: 300,
  },
  showLegend: true,
});

export default getPieConfig;
