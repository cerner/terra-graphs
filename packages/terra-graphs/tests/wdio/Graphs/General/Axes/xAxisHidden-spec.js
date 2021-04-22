Terra.describeViewports('X Axis Hidden', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/graphs/general/axes/x-axis-hidden'));

    it('canvas element', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });
  });
});
