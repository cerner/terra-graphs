Terra.describeViewports('Graph and legend padding reduced', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/graphs/general/padding/graph-and-legend-padding-reduced'));

    it('container with reduced padding', () => {
      const element = $('.carbon-axis-y');
      element.moveTo();
      Terra.validates.screenshot('canvas', { selector: '.bindto-container' });
    });
  });
});
