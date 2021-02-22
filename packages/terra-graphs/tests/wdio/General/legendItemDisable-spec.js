Terra.describeViewports('Legend item disable', ['tiny', 'medium', 'large'], () => {
    describe('Validates', () => {
      before(() => browser.url('/raw/tests/terra-graphs/general/legend-item-disable'));
  
      it('canvas element', () => {
        Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
      });
  
      it('legend element', () => {
          Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
        });
    });
  });