Terra.describeViewports('Bubble graphs', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {

    it('Single Dataset graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bubble-graph/single-dataset');
      Terra.validates.screenshot('single-dataset', { selector: '.carbon-graph-container' });
    });

    it('graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bubble-graph/color-based-graph');
      Terra.validates.screenshot('color-based-graph', { selector: '.carbon-graph-container' });
    });

    it('graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bubble-graph/weight-based-graph');
      Terra.validates.screenshot('weight-based-graph', { selector: '.carbon-graph-container' });
    });

    it('graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bubble-graph/weight-color-based-graph');
      Terra.validates.screenshot('weight-color-based-graph', { selector: '.carbon-graph-container' });
    });

    it('graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bubble-graph/custom-weight-graph');
      Terra.validates.screenshot('custom-weight-graph', { selector: '.carbon-graph-container' });
    });

    it('graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/bubble-graph/multiple-dataset');
      Terra.validates.screenshot('multiple-dataset', { selector: '.carbon-graph-container' });
    });

  });
});
