Terra.describeViewports('Label Truncation', ['tiny', 'medium', 'large'], () => {
    describe('Validates', () => {
      before(() => browser.url('/raw/tests/terra-graphs/general/label-truncation'));
  
      it('canvaselement', () => {
        Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
      });
      it('legend element', () => {
        Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
      });
    });
  });   