Terra.describeViewports('Y2 Axis', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/regions/line/y-2-axis'));

    it('canvas element', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });

    it('legend element', () => {
      Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
    });
    it(' when hovered on Data Label 2 legend', () => {
      const element = $('.carbon-legend').$('li');
      element.moveToObject();
      Terra.validates.screenshot('Graph container', { selector: '.carbon-graph-container' });
    });
  });
});
