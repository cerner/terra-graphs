Terra.describeViewports('Timeseries with eventline', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/graphs/bar-graph/basic-bar-graphs/timeseries-with-eventline'));
    it('canvas element', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });

    it('legend element', () => {
      Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
    });
  });
});
