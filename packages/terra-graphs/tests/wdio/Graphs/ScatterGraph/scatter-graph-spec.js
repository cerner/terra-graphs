Terra.describeViewports('ScatterGraph ', ['tiny', 'medium', 'large'], () => {
  describe('Basic Satter graphs', () => {
    it('validates simple scatter graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/scatter-graph/basic-scatter-graphs/simple-scatter');
      Terra.validates.screenshot('simple_scatter', { selector: '.carbon-graph-container' });
    });
  });
});
