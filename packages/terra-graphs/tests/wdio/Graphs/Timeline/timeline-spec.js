Terra.describeViewports('Timeline graphs', ['tiny', 'medium', 'large'], () => {
  describe('Validates', () => {
    it('basic timeline graph container', () => {
      browser.url('/raw/tests/terra-graphs-docs/graphs/timeline/basic-timeline');
      Terra.validates.screenshot('simple-timeline', { selector: '.carbon-timeline-container' });
    });
  });
});
