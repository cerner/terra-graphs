Terra.describeViewports('Simple non-contiguous line', ['tiny', 'medium', 'large'], () => {
    describe('Validates', () => {
      beforeEach(() => browser.url('/raw/tests/terra-graphs/non-contiguous-line/simple'));
  
      it('canvas element dataset', () => {
        Terra.validates.screenshot('canvas ', { selector: '.carbon-graph-canvas' });
      });
      it('legend element', () => {
        Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
      });
    });
  });
  