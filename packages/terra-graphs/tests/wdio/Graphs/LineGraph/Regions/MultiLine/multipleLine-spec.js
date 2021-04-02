Terra.describeViewports('Multiple Line', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    beforeEach(() => browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/multi-line/multi-line'));

    it('canvas element', () => {
      Terra.validates.screenshot('canvas', { selector: '.carbon-graph-canvas' });
    });

    it('legend element', () => {
      Terra.validates.screenshot('legend', { selector: '.carbon-legend' });
    });

    describe('When hovered on', () => {
      let element = null;
      beforeEach(() => {
        browser.url('/raw/tests/terra-graphs/graphs/line-graph/regions/multi-line/multi-line');
        element = $('.carbon-legend').$$('li');
        console.log(element.length);
      });
      it(' data label 1 ', () => {
        element[0].moveTo();
        Terra.validates.screenshot('Graph container 1', { selector: '.carbon-graph-container' });
      });
      it('data label 3', () => {
        element[1].moveTo();
        Terra.validates.screenshot('Graph container 2', { selector: '.carbon-graph-container' });
      });
      it('data label 5', () => {
        element[2].moveTo();
        Terra.validates.screenshot('Graph container 3', { selector: '.carbon-graph-container' });
      });
    });
  });
});
