Terra.describeViewports('Label Truncation', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    beforeEach(() => browser.url('/raw/tests/terra-graphs/graphs/general/axes/label-truncation'));

    it('canvaselement', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });
    it('legend element', () => {
      Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
    });
    it('x-axis', () => {
      $('.carbon-x-axis-label').click();
      Terra.validates.screenshot('x-axis click', { selector: '.carbon-graph-container' });
    });
    it('y-axis', () => {
      $('.carbon-y-axis-label').click();
      Terra.validates.screenshot('y-axis click', { selector: '.carbon-graph-container' });
    });
    it('y2-axis', () => {
      $('.carbon-y2-axis-label').click();
      Terra.validates.screenshot('y2-axis click', { selector: '.carbon-graph-container' });
    });
  });
});
