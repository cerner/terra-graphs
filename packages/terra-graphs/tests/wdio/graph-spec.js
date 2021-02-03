Terra.describeViewports('Graph', ['tiny', 'medium', 'large'], () => {
describe('Default', () => {
    beforeEach(() => browser.url('/raw/tests/terra-graphs/graph/graph-container'));
    it('displays default Line Graph', () => {  
      Terra.validates.screenshot('default', { selector: '#graphContainer' });
    });
  
    it('displays Divider with custom text', () => {
  
      Terra.validates.screenshot('axis', { selector: '.carbon-axis.carbon-axis-x' });
    });

    it('displays Divider with custom text', () => {
  
        Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
      });
  });
});