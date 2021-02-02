Terra.describeViewports('Graph', ['medium'], () => {
    it('displays default Line Graph', () => {
      browser.url('/raw/tests/terra-graphs/graph/graph-container');
  
      Terra.validates.element('default', { selector: '#graphContainer' });
    });
  
    // it('displays Divider with custom text', () => {
    //   browser.url('/raw/tests/terra-divider/divider/divider-with-text');
  
    //   Terra.validates.element('custom text');
    // });
  });