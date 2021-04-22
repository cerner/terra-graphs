Terra.describeViewports(' Axis info text labels', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/graphs/bar-graph/basic-bar-graphs/axis-info-text-labels'));
    it('canvas element', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });

    it('legend element', () => {
      Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
    });
  });
});
