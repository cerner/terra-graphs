Terra.describeViewports('Y2 Axis', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/graphs/paired-result/regions/multiple-paired-result'));

    it('canvas element', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });
    it('legend element', () => {
      Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
    });

    describe('When hovered', () => {
      let element = null;
      beforeEach(() => {
        browser.url('/raw/tests/terra-graphs/graphs/paired-result/regions/multiple-paired-result');
        element = $('.carbon-legend').$$('li');
      });
      it('First dataset High', () => {
        element[0].moveTo();
        Terra.validates.screenshot('First data High Graph container', { selector: '.carbon-graph-container' });
      });
      it('First dataset Low', () => {
        element[2].moveTo();
        Terra.validates.screenshot('First data low Graph container', { selector: '.carbon-graph-container' });
      });
      it('Second dataset High', () => {
        element[3].moveTo();
        Terra.validates.screenshot('Second data High Graph container', { selector: '.carbon-graph-container' });
      });
      it('Second dataset Low', () => {
        element[5].moveTo();
        Terra.validates.screenshot('Second data low Graph container', { selector: '.carbon-graph-container' });
      });
    });
  });
});
