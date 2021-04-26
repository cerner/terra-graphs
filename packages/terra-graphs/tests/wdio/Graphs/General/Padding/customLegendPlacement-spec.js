Terra.describeViewports('Custom Legend Placement', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/graphs/general/padding/custom-legend-placement'));

    it('container with reduced padding', () => {
      Terra.validates.screenshot('canvas', { selector: '.bindto-container' });
    });
  });
});
