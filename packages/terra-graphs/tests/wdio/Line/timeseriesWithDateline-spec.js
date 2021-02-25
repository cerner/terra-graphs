Terra.describeViewports('Timeseries with Dateline', ['tiny', 'medium', 'large'], () => {
    describe('Validates', () => {
      before(() => browser.url('/raw/tests/terra-graphs/line/timeseries-with-dateline'));
  
      it('canvas element', () => {
        Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
      });
  
      it('legend element', () => {
          Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
        });
    });
  });