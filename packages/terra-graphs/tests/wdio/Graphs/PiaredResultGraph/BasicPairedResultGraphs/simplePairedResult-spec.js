Terra.describeViewports('Simple Paired Result', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    before(() => browser.url('/raw/tests/terra-graphs/graphs/paired-result/basic-paired-result-graphs/simple-paired-result'));

    it('canvas element', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });
    it('legend element', () => {
      Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
    });
  });
});
