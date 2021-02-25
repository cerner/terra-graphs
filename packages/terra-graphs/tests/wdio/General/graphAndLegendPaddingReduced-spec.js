Terra.describeViewports('Graph and legend padding reduced', ['tiny', 'medium', 'large'], () => {
    describe('Validates', () => {
      before(() => browser.url('/raw/tests/terra-graphs/general/graph-and-legend-padding-reduced'));
  
      it('canvas element', () => {
        Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
      });
  
      it('legend element', () => {
          Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
        });
    });
  });