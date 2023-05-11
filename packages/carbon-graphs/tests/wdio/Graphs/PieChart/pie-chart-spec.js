Terra.describeViewports('PieCharts', ['tiny', 'medium', 'large'], () => {
  it('validates simple Pie graph container', () => {
    browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/pie-chart/simple-pie');
    Terra.validates.screenshot('simple_pie', { selector: '.carbon-graph-container' });
  });

  it('validates Pie custom legend placement graph container', () => {
    browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/pie-chart/custom-legend-placement');
    Terra.validates.screenshot('custom_legend_placement', { selector: '.bindto-container' });
  });

  it('validates Pie reduced padding graph container', () => {
    browser.url('/raw/tests/cerner-terra-graphs-docs/graphs/pie-chart/graph-and-legend-padding-reduced');
    Terra.validates.screenshot('reduced_padding', { selector: '.bindto-container' });
  });
});
