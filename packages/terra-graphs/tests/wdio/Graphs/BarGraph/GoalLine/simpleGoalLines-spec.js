Terra.describeViewports('Simple goal lines', ['tiny', 'medium', 'large'], () => {
    describe('Validates', () => {
      before(() => browser.url('/raw/tests/terra-graphs/graphs/bar-graph/goal-line/simple-goal-lines'));
      it('canvas element', () => {
        Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
      });
  
      it('legend element', () => {
        Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
      });
    });
  });
  