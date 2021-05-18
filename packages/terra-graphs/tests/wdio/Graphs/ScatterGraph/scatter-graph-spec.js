Terra.describeViewports('ScatterGraph ', ['tiny', 'medium', 'large'], () => {
  describe('Basic Satter graphs', () => {
    it('validates simple scatter graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/simple-scatter');
      Terra.validates.screenshot('simple_scatter', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/timeseries');
      Terra.validates.screenshot('timeseries', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with dateline graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/timeseries-with-dateline');
      Terra.validates.screenshot('timeseries_with_dateline', { selector: '.carbon-graph-container' });
    });

    it('validates timeseries with eventline graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/timeseries-with-eventline');
      Terra.validates.screenshot('timeseries_with_eventline', { selector: '.carbon-graph-container' });
    });

    it('validates y2-axis graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/y-2-axis');
      Terra.validates.screenshot('y2-axis', { selector: '.carbon-graph-container' });
    });
  });

  describe('Criticality', () => {
    it('validates criticality simple scatter graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/scatter-graph/criticality/simple');
      Terra.validates.screenshot('criticality_simple_scatter', { selector: '.carbon-graph-container' });
    });
  });
});
