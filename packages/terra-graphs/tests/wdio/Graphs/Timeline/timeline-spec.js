Terra.describeViewports('Timeline graphs', ['tiny', 'medium', 'large'], () => {
    describe('Validates', () => {
      it('basic timeline graph container', () => {
        browser.url('/raw/tests/terra-graphs-docs/graphs/timeline/basic-timeline');
        Terra.validates.screenshot('single-dataset', { selector: '.carbon-timeline-container' });
      });
    });
  });
  