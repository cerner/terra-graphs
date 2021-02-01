Terra.describeViewports('Graphs', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/components/terra-graphs/graphs/graph'));

    it('validates the element', () => {
      Terra.validates.element({ selector: '#root'});
    });
  });
});
