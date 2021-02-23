Terra.describeViewports('Label Truncation', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    beforeEach(() => browser.url('/raw/tests/terra-graphs/general/label-truncation'));

    it('canvaselement', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });
    it('legend element', () => {
      Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
    });
    it('x-axis', () => {
      browser.click('.carbon-x-axis-label');
      Terra.validates.screenshot('x-axis click', { selector: '.carbon-graph-container' });
    });
    it('y-axis', () => {
      browser.click('.carbon-y-axis-label');
      Terra.validates.screenshot('y-axis click', { selector: '.carbon-graph-container' });
    });
    it('y2-axis', () => {
      browser.click('.carbon-y2-axis-label');
      Terra.validates.screenshot('y2-axis click', { selector: '.carbon-graph-container' });
    });
  });
});
