Terra.describeViewports('No data', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/graphs/general/other/no-data'));

    it('canvas element', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });
  });
});
