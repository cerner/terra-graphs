Terra.describeViewports('Dataset Region Identical', ['tiny', 'medium', 'large'], () => {
    describe('Validates', () => {
      before(() => browser.url('/raw/tests/terra-graphs/regions/spline/value-region'));
  
      it('canvas element', () => {
        Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
      });
  
      it('legend element', () => {
        Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
      });
    });
  });
  