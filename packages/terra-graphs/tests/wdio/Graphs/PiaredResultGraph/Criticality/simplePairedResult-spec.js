Terra.describeViewports('Y2 Axis', ['tiny', 'medium', 'large'], () => {
    describe('Validates', () => {
      before(() => browser.url('/raw/tests/terra-graphs/graphs/paired-result/Criticality/simple-paired-result'));
  
      it('canvas element', () => {
        Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
      });
      it('legend element', () => {
        Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
      });
    });
  });