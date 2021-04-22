Terra.describeViewports('Horizontal Grid Hidden', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/graphs/general/grid/horizontal-grid-hidden'));

    it('canvas element', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });
  });
});
