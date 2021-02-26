Terra.describeViewports('Simple multi line', ['tiny', 'medium', 'large'], () => {
    describe('Validates', () => {
      beforeEach(() => browser.url('/raw/tests/terra-graphs/multi-line/simple'));
  
      it('canvas element dataset', () => {   
        browser.pause(750*6);   
        Terra.validates.screenshot('canvas ', { selector: '.carbon-graph-canvas' });
      });
      it('legend element', () => {
        browser.pause(750*6);   
        Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
        });
    });
  });x