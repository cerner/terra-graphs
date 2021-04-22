Terra.describeViewports('Grouped bars', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/graphs/bar-graph/basic-bar-graphs/grouped-bars'));
    it('canvas element', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });

    it('legend element', () => {
      Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
    });
  });
});
