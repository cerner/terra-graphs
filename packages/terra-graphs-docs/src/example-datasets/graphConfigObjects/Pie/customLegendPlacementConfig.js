const getPieConfig = (id) => ({
  bindTo: id,
  bindLegendTo: '#legendContainer',
  dimension: {
    height: 300,
  },
  showLegend: true,
});

export default getPieConfig;
